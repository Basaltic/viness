import { Patch } from 'immer';
import { nanoid } from 'nanoid';
import {
    IDeleteOperation,
    IInsertOperation,
    IMoveOperation,
    INavigateOperation,
    INodeLocation,
    IUpdateOperation,
    OperationType,
} from './operation.interface';
import { INode } from '../node/node';

/**
 * A factory to create atomic operation instance
 */
export class OperationFactory {
    static createInsertOp(node: INode): IInsertOperation {
        return { id: nanoid(), type: OperationType.INSERT, payload: node };
    }

    static createDeleteOp(nodeId: string): IDeleteOperation {
        return { id: nanoid(), type: OperationType.DELETE, payload: { nodeId } };
    }

    static createUpdateContentOp(nodeId: string, changes: Patch[]): IUpdateOperation {
        return { id: nanoid(), type: OperationType.UPDATE, payload: { nodeId, changes } };
    }

    static createNavigateOp(nodeId: string): INavigateOperation {
        return { id: nanoid(), type: OperationType.NAVIGATE, payload: { nodeId } };
    }

    static createMoveOp(nodeId: string, to: INodeLocation): IMoveOperation {
        return { id: nanoid(), type: OperationType.MOVE, payload: { nodeId, to } };
    }
}
