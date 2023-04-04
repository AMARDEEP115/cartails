import { Button, Heading } from "@chakra-ui/react";
import "./Homee.css";
import { Navigate } from "react-router-dom";

const Home=({Dark})=>{
    const styles={backgroundColor:Dark?"black":"white"};
    const handleLogOut=()=>{
        return <Navigate to="/signin"/>
    }

    return <div style={styles} id="Home">
        <Heading fontFamily="cursive" color="rgb(0, 119, 255)">Name  : <span>Amar Deep</span></Heading>
        <Heading fontFamily="cursive" color="rgb(0, 119, 255)">Email : <span>Amar Deep</span></Heading>
        <button style={{color:Dark?"black":"white"}} onClick={handleLogOut}>LOGOUT</button>
    </div>
}

export default Home;