import { Link } from "react-router";
import "./leftBar.css";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <Link to="/" className="menuIcon">
          <img className="logo" src="/general/logo.png" alt="logo" />
        </Link>
        <Link to="/" className="menuIcon">
          <img src="/general/home.svg" alt="home" />
        </Link>
        <Link to="/create" className="menuIcon">
          <img src="/general/create.svg" alt="create" />
        </Link>
        <Link to="/" className="menuIcon">
          <img src="/general/updates.svg" alt="updates" />
        </Link>
        <Link to="/" className="menuIcon">
          <img src="/general/messages.svg" alt="messages" />
        </Link>
      </div>
    </div>
  );
};

export default LeftBar;
