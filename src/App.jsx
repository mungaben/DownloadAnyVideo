import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Listdata from "./components/Listdata";
import Login from "./components/Login";
import Accounts from "./pages/Accounts.jsx";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="bg-black">
      <Router>
        <NavBar />
        <Routes>
          {/* <Route path="/account" element={<Accounts />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/hello" element={<Listdata />} /> */}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;