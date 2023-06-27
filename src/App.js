import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import PdfFile from "./pages/pdfgen/PdfFile";

import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const NotRequireAuth = ({ children }) => {
    return !currentUser ? children : <Navigate to="/" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={
              <RequireAuth>
                <Home />
              </RequireAuth>} />
            <Route path="login" element={
              <NotRequireAuth>
              <Login />
              </NotRequireAuth>
            } />
            <Route path="students">
              <Route index element={
                <RequireAuth>
                  <List />
                </RequireAuth>
              } />
              <Route path=":id" element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              } />
              <Route path="pdf/:id" element={
                <RequireAuth>
                  <PdfFile />
                </RequireAuth>
              } />
              <Route path="new" element={
                <RequireAuth>
                  <New />
                </RequireAuth>
              } />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
