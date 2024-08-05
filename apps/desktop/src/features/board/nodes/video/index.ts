import { INodeDescription } from '../../node/node';
import { NodeType } from '../../node/node-type';

export const VideoNodeDescription: INodeDescription = {
    type: NodeType.IMAGE,
    view: () => null,
    draggingView: () => null,
};
