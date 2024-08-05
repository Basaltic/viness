import { useRequest } from 'ahooks';

export type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;
export type ReturnTypes<F extends Function> = F extends (...args: any) => infer R ? R : never;

export type UseRequstArguments<TData, TParams extends any[]> = ArgumentTypes<typeof useRequest<TData, TParams>>;
export type UseRequstSecondArgument<TData, TParams extends any[]> = UseRequstArguments<TData, TParams>[1];

export type ID = string | number | Symbol;

export type Func = (...args: any[]) => any;
