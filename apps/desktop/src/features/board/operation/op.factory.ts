import { Patch } from 'immer';
import { nanoid } from 'nanoid';
import { IDeleteOp, IInsertOp, IMoveOp, INavigateOp, IUpdateOp, OperationType } from './operation.interface';
import { INode } from '../node/node';

/**
 * A factory to create atomic operation instance
 */
export class OperationFactory {
    static createInsertOp(node: INode): IInsertOp {
        return { id: nanoid(), type: OperationType.INSERT, payload: node };
    }

    static createDeleteOp(nodeId: string): IDeleteOp {
        return { id: nanoid(), type: OperationType.DELETE, payload: { nodeId } };
    }

    static createUpdateContentOp(nodeId: string, changes: Patch[]): IUpdateOp {
        return { id: nanoid(), type: OperationType.UPDATE, payload: { nodeId, changes } };
    }

    static createNavigateOp(nodeId: string): INavigateOp {
        return { id: nanoid(), type: OperationType.NAVIGATE, payload: { nodeId } };
    }

    static createMoveOp(nodeId: string, to: INode): IMoveOp {
        return { id: nanoid(), type: OperationType.MOVE, payload: { nodeId, to } };
    }
}
