import { FunctionComponent, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native"; // Import the required components
import { useSelector } from "react-redux";
import { getAllKeys} from "../../store/MobileStorage/MobileStorage";

const ExpenseSummary: FunctionComponent = () => {
  useEffect(() => {
    getAllKeys()
  }, [])

  const totalExpense = useSelector(
    (state: any) => state.transaction.totalExpense
  );
  return (
    <View style={styles.container}>
      <View>
        <Text>Total Expense</Text>
      </View>
      <View>
        <Text>Rs {totalExpense}</Text>
      </View>
    </View>
  );
};
export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 70,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#949191",
  },
});
