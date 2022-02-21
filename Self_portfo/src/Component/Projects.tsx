import {useParams} from "react-router";
import Index from "../Component/Navigation/Index";

const Projects = () => {
  const {id} = useParams();
  console.log({id});
  return (
    <>
      <Index />
      <p>Projects</p>
    </>
  );
};

export default Projects;
