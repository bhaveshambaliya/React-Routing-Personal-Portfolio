import {useLocation} from "react-router-dom";
import Index from "../Component/Navigation/Index";

const ContactUs = () => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("name");
  const city = new URLSearchParams(search).get("city");
  console.log(name);
  return (
    <>
      <Index />
      <p>Contact Us</p>
      <p>{name}</p>
      <p>{city}</p>
    </>
  );
};

export default ContactUs;
