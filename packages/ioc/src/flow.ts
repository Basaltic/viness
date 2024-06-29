import useSwr, { SWRConfiguration, mutate, MutatorOptions } from 'swr';
import useSWRMutation, { SWRMutationConfiguration } from 'swr/mutation';
import { last } from 'radash';
import { ArgumentTypes, ReturnTypes } from './types';

/**
 * create a single usecase
 * a usecase is a enhanced function with extra mixin hooks & methods
 *
 * @param usecase
 * @returns
 */
export function createUseCase<T extends Function>(usecase: T) {
  const cacheKey = Symbol();

  const mixin = {
    mutate: (args: ArgumentTypes<T>, option?: boolean | MutatorOptions) => {
      return mutate((cachedKey) => Array.isArray(cachedKey) && last(cachedKey) === cacheKey, args, option);
    },
    useSwr: (args: ArgumentTypes<T>, config: SWRConfiguration) => {
      return useSwr([cacheKey, ...args], () => usecase(...args) as any, config);
    },
    useSwrMutation: (options?: SWRMutationConfiguration<ReturnTypes<T>, any>) => {
      return useSWRMutation([cacheKey], (_: any, { arg }: any ) => usecase(arg) as any, options);
    },
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
export function createUseCases<T extends Record<string, Function>>(factory: T) {
  const enhancedUsescases = {};

  Object.keys(factory).forEach((key) => {
    const usecase = factory[key];
    // @ts-ignore
    enhancedUsescases[key] = createUseCase(usecase);
  });

  return enhancedUsescases as { [key in keyof T]: ReturnTypes<typeof createUseCase<T[key]>> };
}
