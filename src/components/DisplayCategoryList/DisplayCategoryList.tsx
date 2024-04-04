import { FunctionComponent, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
/**
 * Function component for displaying a category list in a modal.
 *
 * @param {ModalProps} setDisplayModal - function to control the display of the modal
 * @return {ReactNode} The rendered category list component
 */
interface ModalProps {
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}
const DATA: ItemData[] = [
  { id: "1", title: "Food" },
  { id: "2", title: "Shopping" },
  { id: "3", title: "Entertainment" },
  { id: "4", title: "Travel" },
  { id: "5", title: "Other" },
];

type ItemData = {
  id: string;
  title: string;
};

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const DisplayCategoryList: FunctionComponent<ModalProps> = ({
  setDisplayModal,
  setSelectedCategory,
}) => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === selectedId ? "#A6B3B3" : "#B6BDC9";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          setSelectedCategory(item.title);
          console.log('category.....', item.title);
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    textAlign: "center",
  },
});

export default DisplayCategoryList;
