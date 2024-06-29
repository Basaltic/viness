
export type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;
export type ReturnTypes<F extends Function> = F extends (...args: any) => infer R ? R : never;
