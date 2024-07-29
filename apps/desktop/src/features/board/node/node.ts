import { NodeType } from './node-type';

export interface INode<T extends object = object> {
    id: string;
    type: string | NodeType;
    data?: T;
    location: INodeLocation;
}

export interface INodeDescription {
    type: string | NodeType;
}

export interface INodeLocation {
    /**
     * x
     */
    x?: number;
    /**
     * y
     */
    y?: number;
    /**
     * Previous sibling node id
     */
    prevId?: string | null;
    /**
     * Next sibling node id
     */
    nextId?: string | null;
    /**
     * Parent node id
     */
    parentId?: string | null;
    /**
     * The order in the node list
     */
    order?: string;

    [key: string]: any;
}
