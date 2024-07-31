import { Link } from "react-router-dom";
import Hello from "../components/hello";
import Welcome from "../components/welcome";


export default function HomePage() {
    const data = "Calvin"
    return (
        <>
        <h1>{data}</h1> 
        <Hello name={data} />  {/*child components */}
        <Welcome />
        <Link to={'/about'}>About Page</Link>
        </>
  );
}