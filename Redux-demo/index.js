const redux = require("redux");
const createStore = redux.createStore;
const bindAction = redux.bindActionCreators;
const combinereducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

//Actions
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICRECREAM_RESTOCKED";

//Action creator
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

//initial State
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 8,
};

//Reducer
//(prevState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};

const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };

    case CAKE_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

//combine multiple reducers
const rootReducer = combinereducers({
  cake: cakeReducer,
  icecrea: IceCreamReducer,
});

//store
const store = createStore(rootReducer);
console.log("Initial", store.getState());

//subscribe store
const unsubscribe = store.subscribe(() => {
  console.log("updated", store.getState());
});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

//binding actions with store dispatch
const actions = bindAction(
  { orderCake, restockCake, restockIceCream, orderIceCream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

unsubscribe();
