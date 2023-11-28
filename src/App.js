import "./style/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import News from "./Pages/News";
import Setting from "./Pages/Setting";
import Support from "./Pages/Support";
import Transaction from "./Pages/Transaction";
import Contact from "./Pages/Contact";
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/news" element={<News />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
