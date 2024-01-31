import { categoryApi } from '@/services/category.service';
import { productApi } from '@/services/product.service';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware, productApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);
