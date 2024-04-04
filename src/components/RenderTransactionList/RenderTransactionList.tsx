import { FunctionComponent } from "react";
import TransactionItem from "../TransactionItem/TransactionItem";
import data from "../../utils/mockData.json";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const RenderTransactionList: FunctionComponent = () => {
  const transactionList = useSelector((state: any) => state.transaction.transactions);
  console.log('the transction r', transactionList);
  return (
    <View style={styles.container}>
      {transactionList.map((item: any) => (
        <TransactionItem singleTransaction={item} key={item.id} />
      ))}
    </View>
  );
};
export default RenderTransactionList;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
