import { configureStore } from '@reduxjs/toolkit'

import { MathService } from '../services/MathService'

export const store = configureStore({
  reducer: { [MathService.reducerPath]: MathService.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(MathService.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
