import { categoryApi } from '@/services/category.service';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch);
