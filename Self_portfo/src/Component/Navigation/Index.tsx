import {Link} from "react-router-dom";

const Navigation = () => {
  const data = {
    name: "Arun Ravi",
    city: "Ooty",
    graduationYear: 2019,
    country: "India",
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Projects/hello">Projects</Link>
      <Link to="/About" state={{data}}>
        About
      </Link>
      <Link to="/Contact/?name=ankit&city=indore">Contact</Link>
    </div>
  );
};

export default Navigation;
