import { UIState } from './ui-state';

export type UIStore<StateValue extends object, T extends Record<string, Function>> = {
    state: UIState<StateValue>;
    actions: T;
    /**
     * destory this store instance
     */
    destory: () => void;
};
