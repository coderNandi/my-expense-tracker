import { FunctionComponent, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import { Calendar } from "react-native-calendars";
import DisplayCategoryList from "../components/DisplayCategoryList/DisplayCategoryList";
import { addTransaction } from "../store/ManageTransaction/Transaction";
import { useDispatch, useSelector } from "react-redux";
interface IntitalState {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
}
const AddTransactionScreen: FunctionComponent = () => {
  const [displayCalendar, setDisplayCalendar] = useState<boolean>(false);
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [userEntry, setUserEntry] = useState<IntitalState>({id:'', description: '', amount: 0, category: '', date: ''});
  const dispatch = useDispatch();
  const entry = useSelector((state: any) => state.transaction.transactions);
  const onClickAddEntry = () => {
    dispatch(addTransaction(userEntry));
    let uniqueID = "id" + Math.random().toString(16).slice(2)
    setUserEntry({ id: uniqueID, description: '', amount: 0, category: '', date: '' });
    console.log('the entry is.?????', entry);
  };
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          textAlign={"center"}
          placeholder="DD / MM / YYYY"
          onFocus={() => setDisplayCalendar(true)}
          onChangeText={() => setDisplayCalendar(true)}
          showSoftInputOnFocus={false}
          value = {userEntry.date}
        />
      </View>
      {displayCalendar && (
        <View>
          <Calendar
            onDayPress={(day) => {
              setDisplayCalendar(false);
              setUserEntry({ ...userEntry, date: day.dateString });
            }}
          />
        </View>
      )}

      <View style={[styles.input, styles.textArea]}>
        <TextInput
          textAlign={"center"}
          placeholder="Notes here...."
          editable
          multiline
          numberOfLines={2}
          maxLength={40}
          onChangeText={(text: any) => {
            console.log("the text is..//////", text);
            setUserEntry({ ...userEntry, description: text });
          }}
          value={userEntry.description}
        />
      </View>

      <View style={[styles.input, styles.selectCategory]}>
        <TextInput
          textAlign={"center"}
          placeholder="Select Category ..."
          value={selectedCategory}
          onPressIn={() => setDisplayModal(true)}
        />
      </View>

      <View>
        <Modal
          onRequestClose={() => {
            setDisplayModal(false);      
            setUserEntry({ ...userEntry, category: selectedCategory });
          }}
          animationType="slide"
          visible={displayModal}
        >
          <DisplayCategoryList
            setDisplayModal={setDisplayModal}
            setSelectedCategory={setSelectedCategory}
          />
          <Pressable
            onPress={() => {setDisplayModal(false);
              setUserEntry({ ...userEntry, category: selectedCategory });
            }}
            style={({ pressed }) =>
              pressed
                ? [styles.closeButton, { backgroundColor: "#B6BDC9" }]
                : styles.closeButton
            }
          >
            <Text>Close</Text>
          </Pressable>
        </Modal>
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder="Add amount"
          keyboardType="numeric"
          textAlign={"center"}
          onChangeText={(text: any) => setUserEntry({ ...userEntry, amount: text })}
          value={userEntry.amount.toString()}
        />
      </View>

      <View style={{ width: "60%" }}>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [styles.addButton, { backgroundColor: "#B6BDC9" }]
              : styles.addButton
          }
          onPress={onClickAddEntry}
        >
          <Text>Add</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddTransactionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    width: "90%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#B6BDC9",
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  textArea: {
    height: 100,
  },
  selectCategory: {
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    textAlign: "center",
    width: 60,
    height: 40,
    marginBottom: 25,
    borderRadius: 10,
    marginLeft: "40%",
    backgroundColor: "#80B1DF",
    color: "white",
  },

  addButton: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    textAlign: "center",
    height: 40,
    marginBottom: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "#80B1DF",
  },
});
