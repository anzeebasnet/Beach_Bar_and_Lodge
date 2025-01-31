// import { useDispatch, useSelector, useStore } from 'react-redux'
// import type { RootState, AppDispatch, AppStore } from '../store'

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// export const useAppSelector = useSelector.withTypes<RootState>()
// export const useAppStore = useStore.withTypes<AppStore>()

import { useDispatch, useSelector, TypedUseSelectorHook, useStore } from 'react-redux';
import type { AppDispatch, RootState, AppStore } from '../store';

// Correct custom hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
