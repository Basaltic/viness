import { Board } from './board';
import { VideoNodeDescription } from './nodes/video';

export const board = new Board();

export const useBoard = () => board;

// register nodes
board.descriptionRegistry.register(VideoNodeDescription);
