import logo from "./logo.svg";
import "./App.css";
import { UserView } from "./features/user/UserView";
import { IceCreamView } from "./features/icecream/IceCreamView";
import { CakeView } from "./features/cake/CakeView";
function App() {
  return (
    <div className="App">
      <UserView></UserView>
      <IceCreamView></IceCreamView>
      <CakeView></CakeView>
    </div>
  );
}

export default App;
