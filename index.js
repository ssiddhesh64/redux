const DECREMENT = "DECREMENT";

// this is a function which returns an action with property type and more
function decrement() {
  return {
    type: DECREMENT,
    info: "this is an action object and can have other properties than type",
  };
}
