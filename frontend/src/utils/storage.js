import SyncStorage from "sync-storage";

export const getOldFavouritePosts = () => {
  try {
    let jsonValue = SyncStorage.get("favouritePost") || "[]";
    jsonValue = JSON.parse(jsonValue) || [];
    // get unique post ids
    const uniqueIds = jsonValue
      .map((item) => item.id)
      .filter((value, index, self) => self.indexOf(value) === index);
    jsonValue = uniqueIds.map((id) =>
      jsonValue.find((value) => value.id === id)
    );
    return jsonValue;
  } catch (error) {
    console.log("Error occured", error);
  }
};

export const addToFavourite = (post) => {
  try {
    let jsonValue = getOldFavouritePosts();
    jsonValue.push(post);
    jsonValue = JSON.stringify(jsonValue);
    SyncStorage.set("favouritePost", jsonValue);
  } catch (error) {
    console.log("Error occured", error);
  }
};

export const removeFromFavourite = (post) => {
  let oldFavouritePosts = getOldFavouritePosts();
  var filtered = oldFavouritePosts.filter((el) => el.id != post.id);
  const jsonValue = JSON.stringify(filtered);
  SyncStorage.set("favouritePost", jsonValue);
};

export const isFavourite = (oldFavouritePosts, postObj) => {
  try {
    const matched = oldFavouritePosts.find((post) => post.id === postObj.id);
    if (matched) return true;
    else return false;
  } catch (error) {
    console.log("Error occured", error);
  }
};
