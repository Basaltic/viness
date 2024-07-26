import { Patch } from 'immer';
import { NodeType } from '../node/node-type';
import { INode } from '../node/node';

/**
 * Board Operations
 */
export interface AtomicOperation<OT = OperationType> {
    /**
     * node id
     */
    nodeId: string;
    /**
     * operation type
     */
    operationType: OT;
}

/**
 * Create/Insert New Node
 */
export interface CreateAtomicOperation<C = any> extends AtomicOperation<OperationType.CREATE_NODE> {
    /**
     * node id
     */
    nodeId: string;
    /**
     * 节点类型
     */
    nodeType: NodeType;

    /**
     * 所在位置信息
     */
    location: IUvaNodeLocation;
    /**
     * 初始化内容
     */
    content: C;
}

/**
 * 删除节点操作
 */
export interface DeleteAtomicOperation extends AtomicOperation<OperationType.DELETE_NODE> {
    /**
     * 被删除的节点
     */
    nodeId: string;
}

/**
 * 移动操作
 */
export interface MoveAtomicOperation extends AtomicOperation<OperationType.MOVE_NODE> {
    /**
     * 被移动的节点
     */
    nodeId: string;
    /**
     * 来自什么位置
     */
    from: IUvaNodeLocation;
    /**
     * 移至什么位置
     */
    to: IUvaNodeLocation;
}

/**
 * 画板节点导航操作
 */
export interface NavigateAtomicOperation extends AtomicOperation<OperationType.NAVIGATE_NODE> {
    /**
     * 导航到的节点id
     */
    nodeId: string;
}

/**
 * 内容更新操作
 */
export interface UpdateAtomicOperation<C = any> extends AtomicOperation<OperationType> {
    /**
     * 需要更新的节点id
     */
    nodeId: string;
    /**
     * 是否是本地内容更改
     */
    isLocalContentChange: boolean;
    /**
     * 需要修改的字段和值
     * 其属性和不同节点类型的内容属性的一部分
     */
    content: Partial<C>;
}

export enum OperationType {
    INSERT = 'insert',
    DELETE = 'delete',
    UPDATE = 'update',
    NAVIGATE = 'navigate',
    MOVE = 'move',
}

export interface IOperation<O = OperationType, P = {}> {
    id: string;
    type: O;
    payload: P;
}

/**
 * 插入操作，纯粹新增一个节点，并不在意其是否被链入
 */
export type IMoveOp = IOperation<OperationType.MOVE, { nodeId: string; to: IUvaNodeLocation }>;
export type IInsertOp = IOperation<OperationType.INSERT, INode>;
export type IDeleteOp = IOperation<OperationType.DELETE, { nodeId: string }>;
export type IUpdateOp = IOperation<OperationType.UPDATE, { nodeId: string; changes: Patch[] }>;
export type INavigateOp = IOperation<OperationType.NAVIGATE, { nodeId: string }>;

export type IOpGroup = { redoOp: IOperation; undoOp: IOperation };
export type IMutation = IOpGroup[];
