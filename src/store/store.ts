import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./ManageTransaction/Transaction";

export  const store= configureStore({
    reducer: {
        transaction: transactionReducer
    },
    middleware:getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})