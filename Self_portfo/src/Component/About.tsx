import {useLocation} from "react-router-dom";
import Index from "../Component/Navigation/Index";

const About = () => {
  const {state} = useLocation();
  console.log(state);
  return (
    <>
      <Index />
      <p>About {state.data}</p>
    </>
  );
};

export default About;
