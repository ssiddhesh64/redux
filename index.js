// import redux from "redux";
const redux = require("redux");
const reduxThunk = require("redux-thunk").default;
const axios = require("axios");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const DECREMENT = "DECREMENT";
const INCREMENT = "INCREMENT";

// An action is an object with a type property
// An action creator is a function that returns a function
// here decrement is an Action creator
function decrement() {
  return {
    type: DECREMENT,
    info: "this is an action object and can have other properties than type",
  };
}

function increment() {
  return {
    type: INCREMENT,
    info: "this is an action object and can have other properties than type",
  };
}

const initialState1 = {
  counter1: 10,
};

const initialState2 = {
  counter2: 10,
};

// a reducer is a function which takes state and an action and returns new state
// (prevState, action) => newState
const reducer1 = (state = initialState1, action) => {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state,
        counter1: state.counter1 - 1,
      };
    default:
      return state;
  }
};

const reducer2 = (state = initialState2, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter2: state.counter2 + 1,
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
const rootReducer = combineReducers({
  dec: reducer1,
  inc: reducer2,
});
const store = createStore(rootReducer);
console.log("Initial state", store.getState());
const unsubscibe = store.subscribe(() =>
  console.log("Updated store", store.getState())
);
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());
unsubscibe();

//middleware
//suggested way to extend redux with custom functionality
//provides third-party extension between dispatching an action, and the moment it reaches the reducer
//use middleware for logging, crash reporting, performing asynchronous task, etc.
