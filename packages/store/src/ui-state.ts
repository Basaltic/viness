import { create } from 'zustand';
import { PersistOptions, devtools } from 'zustand/middleware';
import { produce, produceWithPatches, applyPatches, Patch } from 'immer';
import { createTrackedSelector } from 'react-tracked';
import { persist } from 'zustand/middleware';
import { ID } from './types';

export type PersistOption<T> = Omit<PersistOptions<T>, 'getStorage' | 'serialize' | 'deserialize'>;

export type Persist<T> = PersistOptions<T> | ((id: ID) => PersistOptions<T>);

export interface StateOption<StateValue extends object> {
    /**
     * state name，it's mainly used to
     */
    name?: string;
    /**
     * wether the state is initialized lazily
     */
    lazy?: boolean;
    /**
     * default state value
     */
    defaultState: StateValue;
    /**
     * persist options
     */
    persist?: Persist<StateValue>;
}

export type UIState<StateValue extends object> = ReturnType<typeof createState<StateValue>>;

/**
 * create ui state instance
 *
 * @param options
 * @returns
 */
export function createState<StateValue extends object>(options?: StateOption<StateValue>) {
    const { defaultState = {}, name = '' } = options || {};
    let creator: any = () => defaultState;

    if (process.env.NODE_ENV === 'development') {
        creator = devtools(() => defaultState, { name });
    }
    if (options?.persist) {
        creator = persist(creator, options.persist);
    }

    const innerApi = create<StateValue>()(creator);

    return {
        name,
        /**
         * defulat state value which is passed from params
         */
        defaultState,
        /**
         * return a auto tracked state object
         *
         * @returns
         */
        use: () => createTrackedSelector(innerApi)() as StateValue,
        /**
         * get the current state
         */
        get: () => innerApi.getState(),
        /**
         * change state
         *
         * @param updater
         * @param replace
         */
        set: (
            updater: StateValue | Partial<StateValue> | ((state: StateValue) => StateValue | Partial<StateValue> | void),
            replace?: boolean | undefined,
        ) => {
            if (typeof updater === 'function' && !replace) {
                innerApi.setState(produce(updater) as any, replace);
            } else {
                innerApi.setState(updater as any, replace);
            }
        },
        /**
         * subscribe the modification of the state in this state
         */
        subscribe(listener: (state: StateValue, prevState: StateValue) => void): () => void {
            return innerApi.subscribe(listener);
        },
        /**
         * change the state and return the patches
         *
         * @param updater
         * @param replace
         * @returns [patches, inverse patches]
         */
        setWithPatches(updater: (state: StateValue) => StateValue | void): [Patch[], Patch[]] {
            const state = this.get();
            const [nextState, patches, inversePatches] = produceWithPatches(state, updater);
            innerApi.setState(nextState);
            return [patches, inversePatches];
        },

        /**
         * applay change patches to this store state
         *
         * @param patches
         */
        applyPatches(patches: Patch[]) {
            const updater = (s: StateValue) => applyPatches(s, patches);
            innerApi.setState(updater);
        },
    };
}

export function createLazyState<StateValue extends object>(option: StateOption<StateValue>) {
    let instance: UIState<StateValue>;

    return new Proxy({} as unknown as UIState<StateValue>, {
        get(_target, key, _receiver) {
            /**
             * react-refresh 会在热更新时检测模块导出的内容是否是近似React组件(通过$$typeof属性进行判断)
             */
            if (!instance && key !== '$$typeof') {
                instance = createState<StateValue>(option);
            }

            // @ts-ignore
            return instance[key];
        },
    });
}
