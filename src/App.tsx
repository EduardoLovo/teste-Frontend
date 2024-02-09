import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import { ApliqueList } from "./pages/Apliques/ApliqueList";

const App = () => {
  // const PrivateRoute = ({ children, redirectTo }) => {
  //   const isAuthenticated = JwtHandler.isJwtValid();
  //   // console.log("isAuh:", isAuthenticated);
  //   return isAuthenticated ? children : <Navigate to={redirectTo} />;
  // };
  return (
    <div className="appContent">
      <Sidebar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aplique-lista" element={<ApliqueList />} />
      </Routes>
      {/* <Title>Ola Mundo</Title> */}
    </div>
  );
};
export default App;
