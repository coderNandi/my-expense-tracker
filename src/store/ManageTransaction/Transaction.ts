import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { storeData } from "../MobileStorage/MobileStorage";

interface IntitalState {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
}

const transactions: IntitalState[] = [];

const manageTransaction = createSlice({
  name: "manageTransaction",
  initialState: { transactions, totalExpense: 0 },
  reducers: {

    initializeTheTransactions: (state, action: PayloadAction<IntitalState[]>) => {
      state.transactions = action.payload;
    },
    addTransaction: (state, action: PayloadAction<IntitalState>) => {
      state.transactions.push(action.payload);
      state.totalExpense += Number(action.payload.amount);
      storeData(action.payload.id, action.payload);
      
    },
    updateTransaction: (state, action: PayloadAction<IntitalState>) => {
      const index = state.transactions.findIndex(
        (item) => item.id === action.payload.id
      );
      state.transactions[index] = action.payload;
    },
    deleteTransaction: (state, action: PayloadAction<IntitalState>) => {
      const index = state.transactions.findIndex(
        (item) => item.id === action.payload.id
      );
      state.transactions.splice(index, 1);
    },
  },
});

export const { addTransaction, updateTransaction, deleteTransaction } =
  manageTransaction.actions;
export default manageTransaction.reducer;
