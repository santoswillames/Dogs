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
import { User } from "./Components/User/User";
import { UserStorage } from "./UserContext";
import { ProtectedRoute } from "./Components/Helper/ProtectedRoute";
import Photo from "./Components/Photo/Photo";
import UserProfile from "./Components/User/UserProfile";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />}>
                <Route path="/login/" element={<LoginForm />} />
                <Route path="/login/criar" element={<LoginCreate />} />
                <Route path="/login/perdeu" element={<LoginPasswordLost />} />
                <Route path="/login/resetar" element={<LoginPasswordReset />} />
              </Route>
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
