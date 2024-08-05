import { AtomicOperationHistory } from './operation-history';
import { AtomicOperations } from './operations';

export class Commands {
    constructor(
        private history: AtomicOperationHistory,
        private operations: AtomicOperations,
    ) {}

    undo() {
        return this.history.undo(() => {});
    }

    redo() {
        return this.history.redo(() => {});
    }

    insertNode() {}

    removeNode() {}

    movePosition() {}
}
