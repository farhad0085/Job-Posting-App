import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
  }
};

export const retrieveData = async (storeKey) => {
  try {
    const value = await AsyncStorage.getItem(storeKey);
    if (value !== null) {
      // We have data!!
    }
    return value;
  } catch (error) {
    console.log("some error occured", error);
    // Error retrieving data
  }
};
