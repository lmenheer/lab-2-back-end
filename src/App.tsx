import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/nav/Nav";
import { EmployeeList } from "./components/employee-list/EmployeeList";
import { Footer } from "./components/footer/footer";
import Header from "./components/header/Header";
import Organization from "./components/organization-page/OrganizationPage";

function App() {
  return (
    <Router>
      <Nav />
      <Header />

      <main>
        <Routes>
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/" element={<EmployeeList />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
