import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Contact } from "./components/Pages/Contact";
import OnlineDarslar from "./components/compon/onlineDarslar/onlineDars";
import Discord from "./components/compon/odiscardServer/discardServer";
import SavdoRobot from "./components/compon/savdoRobot/savdoRobot";
import PropShob from "./components/compon/propShop/propShob";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/discord" element={<Discord />} />
            <Route path="/onlineDars" element={<OnlineDarslar />} />
            <Route path="/savdoRobot" element={<SavdoRobot/>} />
            <Route path="/propShob" element={<PropShob />} />
            
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
