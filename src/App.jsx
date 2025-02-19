import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./assets/Components/SignIn";
import SignUp from "./assets/Components/SignUp";

function App() {
  console.log("App component rendered");

  return (
    <>
      <h3>Logo Here</h3>
    <SignUp/>
    <br />
    <br />
    {/* <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router> */}
      <SignIn/>
    </>
  );
}

export default App;
