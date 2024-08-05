import { Board } from './board';
import { VideoNodeDescription } from './nodes/video';

export const board = new Board();

// register nodes
board.registry.register(VideoNodeDescription);
