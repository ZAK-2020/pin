import { Link } from "react-router";
import ImageComponent from "../image/imageComponent";
import "./leftBar.css";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <Link to ="/" className="menuIcon">
          <ImageComponent  className="logo"   path="/general/logo.png" alt="logo" />
        </Link>
         <Link to= "/" className="menuIcon">
         <ImageComponent  path="/general/home.svg" alt="home" />
        </Link>
        <Link to ="/create" className="menuIcon">
         <ImageComponent  path="/general/create.svg" alt="logo" />
        </Link>
         <Link to ="/" className="menuIcon">
         <ImageComponent path="/general/updates.svg" alt="logo" />
        </Link>
         <Link to ="/" className="menuIcon">
          <ImageComponent className path="/general/messages.svg" alt="logo" />
        </Link>
        
      </div>
    </div>
  );
};

export default LeftBar;
