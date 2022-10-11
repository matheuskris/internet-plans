import { Outlet } from "react-router-dom";
import "./navigation.styles.css";

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="" alt="" />
        </div>
        <div className="menu">
          <span className="link">Planos</span>
          <span className="link">Promoções</span>
          <span className="link">Entrar</span>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
