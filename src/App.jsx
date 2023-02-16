import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import LoginForm from "./Components/Login/LoginForm";
import LoginCreate from "./Components/Login/LoginCreate";
import LoginPasswordLost from "./Components/Login/LoginPasswordLost";
import LoginPasswordReset from "./Components/Login/LoginPasswordReset";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}>
            <Route path="/login/" element={<LoginForm />} />
            <Route path="/login/criar" element={<LoginCreate />} />
            <Route path="/login/perdeu" element={<LoginPasswordLost />} />
            <Route path="/login/resetar" element={<LoginPasswordReset />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
