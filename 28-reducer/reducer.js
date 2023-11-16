const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_NAME":
      return [...state, action.payload];
    case "DELETE_NAME":
      return state.filter((personName) => personName !== action.payload);
    case "CLEAR_NAMES":
      return [];
    default:
      return state;
  }
}

let newState = reducer(initialState, { type: "ADD_NAME", payload: "Serge" });

console.log(newState);

newState = reducer(newState, { type: "ADD_NAME", payload: "Sandra" });

console.log(newState);

newState = reducer(newState, { type: "DELETE_NAME", payload: "Sandra" });

console.log(newState);

newState = reducer(newState, { type: "CLEAR_NAMES" });

console.log(newState);

newState = reducer(initialState, { type: "ADD_NAME", payload: "Serge1" });

console.log(newState);

newState = reducer(initialState, { type: "ADD_NAME", payload: "Sandra1" });

console.log(newState);

newState = reducer(initialState, { type: "ADD_NAME", payload: "Sandra2" });

console.log(newState);
