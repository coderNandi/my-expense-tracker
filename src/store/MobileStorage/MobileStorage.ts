import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (
  id: string,
  value: any
) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(id, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getAllKeys = async () => {
  let keys: any = []
  try {
    keys = await AsyncStorage.getAllKeys();
    let values=await AsyncStorage.multiGet(keys);
    console.log('values???///', values)
  } catch(e) {
    // read key error
  }
}
