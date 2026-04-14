import { useState } from "react";
import "./userButton.css";
import apiRequest from "../../utils/apiRequest";
import { Link, useNavigate } from "react-router";
import useAuthStore from "../../utils/authStore";
import ImageComponent from "../image/imageComponent";

const UserButton = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // TEMP
  // const currentUser = true;

  const { currentUser, removeCurrentUser } = useAuthStore();

  console.log(currentUser);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/users/auth/logout", {});
      removeCurrentUser();
      navigate("/auth");
    } catch (err) {
      console.log(err);
    }
  };

  return currentUser ? (
    <div className="userButton">
      {currentUser.img ? (
        <ImageComponent path={currentUser.img} alt="" />
      ) : (
        <img src="/general/noAvatar.png" alt="" />
      )}
      <div onClick={() => setOpen((prev) => !prev)}>
        <img src="/general/arrow.svg" alt="" className="arrow" />
      </div>
      {open && (
        <div className="userOptions">
          <Link to={`/${currentUser.username}`} className="userOption">
            Profile
          </Link>
          <div className="userOption" onClick={handleLogout}>
            Logout
          </div>
        </div>
      )}
    </div>
  ) : (
    <Link to="/auth" className="loginLink">
      Login / Sign Up
    </Link>
  );
};

export default UserButton;