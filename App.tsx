import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddTransactionScreen from "./src/screens/AddTransactionScreen";
import TransactionScreen from "./src/screens/TransactionScreen";
import {store} from "./src/store/store";
import { Provider } from "react-redux";

const Tab = createBottomTabNavigator();

export default function App() {
  const handleIcon = ({ route }) => {
    let iconName: any;
    return {
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === "AddTransaction") {
          iconName = require(`./src/assets/images/addcircle.png`);
        } else if (route.name === "Transaction") {
          iconName = require(`./src/assets/images/fact_check.png`);
        } else if (route.name === "filterTransaction") {
          iconName = require(`./src/assets/images/filter_list.png`);
        }
        return (
          <View>
            <Image
              source={iconName}
              style={focused ? styles.imageFocused : null}
            />
          </View>
        );
      },
      tabBarActiveTintColor: "black",
      tabBarInactiveTintColor: "blue",
    };
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={handleIcon}>
          <Tab.Screen
            name="Transaction"
            component={TransactionScreen}
            options={{ title: "Transaction" }}
          />
          <Tab.Screen
            name="AddTransaction"
            component={AddTransactionScreen}
            options={{ title: "Add Transaction" }}
          />
          {/* <Tab.Screen
            name="filterTransaction"
            component={TransactionScreen}
            options={{ title: "Filter" }}
          /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageFocused: {
    backgroundColor: "#9490C3",
    opacity: 0.36,
    borderRadius: 20,
  },
});
