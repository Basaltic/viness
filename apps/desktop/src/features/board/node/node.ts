import { NodeType } from './node-type';

export interface INode<T extends object = object> {
    id: string;
    data: T;
}

export interface INodeDescription {
    type: string | NodeType;
}
