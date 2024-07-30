import { Board } from './board';
import { VideoNodeDescription } from './nodes/video';

export const board = new Board();

// register nodes
board.registry.register(VideoNodeDescription);

// const n = {
//   id: '',
//   l: {
//     prev: '',
//     next: '',
//     tail: '',
//     parent: '',
//   },
// };

// const nav = 'b'

// const a = {
//   root: 'a',
//   tree: {
//     a: {
//       1: '',
//       2: '',
//     },
//     b: {
//       2: '',
//       3: '',
//     },
//   },
// };

// a ===> linked nodes
