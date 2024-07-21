import { configureStore } from "@reduxjs/toolkit";
import user from "./store/reducer/user";
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';
const preloadedState = loadFromLocalStorage();


const store = configureStore({
    reducer : {user},
    preloadedState, // Set the preloaded state
})


store.subscribe(() => {
    saveToLocalStorage(store.getState());
  });

  export default store;