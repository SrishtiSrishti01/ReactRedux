const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;
console.log("inital", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(5));

// store.dispatch(icecreamActions.order());
// store.dispatch(icecreamActions.order());
// store.dispatch(icecreamActions.order());
// store.dispatch(icecreamActions.restock(5));

// unsubscribe();
