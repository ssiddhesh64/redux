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
