import { useRequest as ahooksUseRequest } from 'ahooks';
import { isFunction, isObject, last } from 'radash';
import swr, { mutate as swrMutate, MutatorCallback, MutatorOptions, SWRConfiguration, SWRResponse } from 'swr';
import swrMutation, { SWRMutationConfiguration } from 'swr/mutation';

import { Func, ReturnTypes, UseRequstSecondArgument } from './types';

type UserInputArguments<A extends any[]> = A | (() => Readonly<A> | null | void) | (() => A[0] | null | void);

type UseCaseOptions<P extends any[]> = {
    ready?: (...args: P) => boolean;
};

/**
 * create a single usecase
 * a usecase is a enhanced function with extra mixin hooks & methods
 *
 * @param usecase
 * @returns
 *
 * @example useSwr
 *
 * // 创建一个 usecase
 * const useCaseFetcher = createUseCase(({ url }) => fetch(url));
 *
 * // 无任何入参，此时会自动请求
 * useCaseFetcher.useSwr();
 *
 * // 仅传入参数，此时会自动请求
 * useCaseFetcher.useSwr([{ url: '' }]);
 *
 * // 仅传入配置，此时会自动请求
 * useCaseFetcher.useSwr({ refreshInterval: 10000 });
 *
 * // 同时传入参数和配置，此时会自动请求
 * useCaseFetcher.useSwr({ refreshInterval: 10000 }, [{ url: '' }]);
 *
 * // 同时传入参数和配置，此时会自动请求
 * useCaseFetcher.useSwr([{ url: '' }], { refreshInterval: 10000 });
 *
 * // 仅传入条件参数，条件参数返回值作为 fetcher 入参，仅当条件参数返回值为真值时触发请求
 * useCaseFetcher.useSwr(() => {
 *    return [{ url: '' }] as const;
 * });
 *
 * // 同时传入条件参数和配置，条件参数返回值作为 fetcher 入参，仅当条件参数返回值为真值时触发请求
 * useCaseFetcher.useSwr(
 *   () => {
 *     return [{ url: '' }] as const;
 *   },
 *   { refreshInterval: 10000 },
 * );
 *
 * // 同时传入条件参数和配置，条件参数返回值作为 fetcher 入参，仅当条件参数返回值为真值时触发请求
 * useCaseFetcher.useSwr({ refreshInterval: 10000 }, () => {
 *   return [{ url: '' }] as const;
 * });
 *
 * // 条件参数返回非数组，此时返回值作为 fetcher 第一个入参，仅当条件参数返回值为真值时触发请求
 * useCaseFetcher.useSwr(() => {
 *   return { url: '' };
 * });
 */
export function createUseCase<T extends Func, P extends any[] = Parameters<T>, R = Awaited<ReturnTypes<T>>>(
    usecase: T,
    options?: UseCaseOptions<P>,
) {
    const symbol = Symbol();

    const didReady = (args?: any) => {
        if (!isFunction(options?.ready)) {
            return [args, symbol];
        }

        if (options?.ready?.(...args)) {
            return [args, symbol];
        }

        return null;
    };

    /**
     *
     * @param data
     * @param option
     */
    function mutate(data?: R | Promise<R> | MutatorCallback<R>, option?: boolean | MutatorOptions) {
        return swrMutate((cachedKey) => Array.isArray(cachedKey) && last(cachedKey) === symbol, data, option);
    }

    /**
     *
     * @param config SWRConfiguration
     */
    function useSwr<Conf extends SWRConfiguration<R>>(config: Conf): SWRResponse<R, any, Conf>;
    /**
     *
     * @param args fetcher arguments
     */
    function useSwr(args: UserInputArguments<P>): SWRResponse<R, any>;
    /**
     *
     * @param config SWRConfiguration
     * @param args fetcher arguments
     */
    function useSwr<Conf extends SWRConfiguration<R>>(config?: Conf, args?: UserInputArguments<P>): SWRResponse<R, any, Conf>;
    /**
     *
     * @param args fetcher arguments
     * @param config SWRConfiguration
     */
    function useSwr<Conf extends SWRConfiguration<R>>(args?: UserInputArguments<P>, config?: Conf): SWRResponse<R, any, Conf>;
    function useSwr(p1?, p2?) {
        /**
         * args maybe array or function, but config is always object
         */
        const [config = {}, argsFactory] = isObject(p1) ? [p1, p2] : [p2, p1];

        /**
         * 无需入参
         * 无需条件请求
         */
        if (!argsFactory) {
            return swr(didReady(argsFactory), () => usecase(), config);
        }

        /** 无需条件请求 */
        if (Array.isArray(argsFactory)) {
            return swr(didReady(argsFactory), ([_args]) => usecase(..._args), config);
        }

        /** 条件请求 */
        return swr(
            () => {
                const args = argsFactory?.();

                /** disable */
                if (args === null || args === void 0) {
                    return null;
                }

                /**
                 * enable
                 * auto convert first argument to array
                 */
                return Array.isArray(args) ? args : [args];
            },
            ([_args]) => usecase(..._args),
            config,
        );
    }

    /**
     *
     * @param config SWRMutationConfiguration
     */
    function useSwrMutation<Conf extends SWRMutationConfiguration<R, any, [Symbol], P>>(config?: Conf) {
        return swrMutation([symbol], (_, { arg }) => usecase(arg), config);
    }

    /**
     *
     * @param option
     * @returns
     *
     * @example
     */
    function useRequest(option?: UseRequstSecondArgument<R, P>) {
        return ahooksUseRequest(usecase, Object.assign({}, option));
    }

    const mixin = {
        mutate,
        useSwr,
        useSwrMutation,
        useRequest,
    };

    const enhancedUsecase = Object.assign(usecase, mixin);
    return enhancedUsecase;
}

/**
 * Create a set of usecases which are used to arrange the business logic from service & store
 *
 * @param factory
 * @returns
 */
export function createUseCases<T extends Record<string, Func>>(factory: T) {
    const enhancedUsescases = {};

    Object.keys(factory).forEach((key) => {
        const usecase = factory[key];
        enhancedUsescases[key] = createUseCase(usecase);
    });

    return enhancedUsescases as { [key in keyof T]: ReturnTypes<typeof createUseCase<T[key]>> };
}
