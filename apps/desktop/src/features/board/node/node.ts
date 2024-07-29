import { NodeType } from './node-type';

export interface INode<T extends object = object> {
    id: string;
    type: string | NodeType;
    data: T;
}

export interface INodeDescription {
    type: string | NodeType;
}
