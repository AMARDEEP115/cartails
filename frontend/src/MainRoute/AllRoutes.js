import { Routes,Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Singup";

const AllRouter=({Dark})=>{
    return <Routes>
        <Route path="/" element={<Home Dark={Dark}/>} />
        <Route path="/signin" element={<Login Dark={Dark}/>} />
        <Route path="/signup" element={<Signup Dark={Dark}/>} />
    </Routes>
}

export default AllRouter;