// import redux from "redux";
const redux = require("redux");
const createStore = redux.createStore;
const DECREMENT = "DECREMENT";

// An action is an object with a type property
// An action creator is a function that returns a function
// here decrement is an Action creator
function decrement() {
  return {
    type: DECREMENT,
    info: "this is an action object and can have other properties than type",
  };
}

const initialState = {
  counter: 10,
};

// a reducer is a function which takes state and an action and returns new state
// (prevState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

//store is responsible for application state
//allows access to state via getState()
//allows state to be updated via dispatch(action)
//registers listeners via subscribe(listener)
//handles unregistering of listeners via function returned by subscribe(listener)
const store = createStore(reducer);
console.log("Initial state", store.getState());
const unsubscibe = store.subscribe(() =>
  console.log("Updated store", store.getState())
);
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
unsubscibe();
