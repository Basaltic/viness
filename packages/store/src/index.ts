import { enableMapSet, enablePatches } from 'immer';

enableMapSet();
enablePatches();

export { type Patch, applyPatches, produceWithPatches } from 'immer';
export { createJSONStorage, type StateStorage, type PersistStorage } from 'zustand/middleware';

export { type Persist } from './ui-state';

export { createStore, createStoreFactory } from './ui-store.factory';
