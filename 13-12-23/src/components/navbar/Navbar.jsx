import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="./src/assets/logoipsum-327.svg" alt="logo" />
      </div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
