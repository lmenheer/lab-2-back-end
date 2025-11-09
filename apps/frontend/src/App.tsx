import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/nav/Nav";
import EmployeePage from "./components/pages/EmployeesPage";
import { Footer } from "./components/footer/footer";
import Header from "./components/header/Header";
import OrganizationPage from "./components/pages/OrganizationPage"

function App() {
  return (
    <Router>
      <Nav />
      <Header />
      <main>
        <Routes>
          <Route path="/employees" element={<EmployeePage />} />
          <Route path="/organization" element={<OrganizationPage />} />
          <Route path="/" element={<EmployeePage />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;