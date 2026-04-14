import UserButton from "../userButton/userButton";
import "./topBar.css";
import { useNavigate } from "react-router";

const TopBar = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?search=${e.target[0].value}`);
  };

  return (
    <div className="topBar">
      <form onSubmit={handleSubmit} className="search">
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder="Search" />
      </form>
      <UserButton />
    </div>
  );
};

export default TopBar;
