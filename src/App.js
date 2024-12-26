import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Menu from "./Component/Menu";


function App() {
  return (
    <>
      <Menu />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// import "./App.css";
// import Home from "./Home";
// import Menu from "./Menu";
// import Dashboard from "./Dashboard/Dashboard"
// import LoginPage from "./Login";
// import SignUpPage from "./SignUp";
// import EntryDataPage from "./Dashboard/EntryDataPage";
// import { useState } from "react";

// function App() {

//   const[singleURL, setSingleURL] = useState("home")
//   const singlePage = () =>{
//     switch (singlePage) {
//       case "Dashboard" :
//         return <Dashboard/>;
//       case "LoginPage" :
//         return <LoginPage/>
//     }
//   }

//   return (
//     <>
//     <Menu/>

//     </>

//   );
// }

// export default App;
