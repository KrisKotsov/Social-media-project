import AppHeading from "./components/AppHeading/AppHeading";
import SignIn from "./pages/SIgnIn/SignIn";

import "./App.css";

function App() {
  return (
    <>
      <AppHeading textColor="black" bgrColor="wheat">
        My Awesome App
      </AppHeading>
      <SignIn />
    </>
  );
}

export default App;
