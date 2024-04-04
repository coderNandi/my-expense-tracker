import { FunctionComponent } from "react";
import { View, Text, ScrollView } from "react-native";
import ExpenseSummary from "../components/ExpenseSummary/ExpenseSummary";
import RenderTransactionList from "../components/RenderTransactionList/RenderTransactionList";
import { useDispatch, useSelector } from "react-redux";

const TransactionScreen: FunctionComponent = () => {
  const entry = useSelector((state: any) => state.transaction.transactions);
  return (
    <ScrollView>
      <ExpenseSummary />
      <RenderTransactionList />
    </ScrollView>
  );
};
export default TransactionScreen;
