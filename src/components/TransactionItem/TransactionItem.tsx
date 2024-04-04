import { FunctionComponent } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

/**
 * Function component for rendering a TransactionItem.
 *
 * @param {any} props - the props passed to the component
 * @return {JSX.Element} the rendered TransactionItem component
 */
interface TransactionItemProps {
  singleTransaction: { [key: string]: string };
}

const TransactionItem: FunctionComponent<TransactionItemProps> = ({
  singleTransaction,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text>{singleTransaction.description}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>{singleTransaction.amount}</Text>
      </View>
      <View style={{ flex: 2 }}>
        <Text>{singleTransaction.category}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Pressable onPress={() => console.log("delete")} >
            <Image source={require("../../assets/images/delete.png")} />
        </Pressable>
      </View>
    </View>
  );
};
export default TransactionItem;

const width_proportion = "85%";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#94A7C2",
    opacity: 0.76,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: width_proportion,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
