// localStorage.js

export const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('reduxState');
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (e) {
      console.warn('Could not load state', e);
      return undefined;
    }
  };
  
  export const saveToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('reduxState', serializedState);
    } catch (e) {
      console.warn('Could not save state', e);
    }
  };
  