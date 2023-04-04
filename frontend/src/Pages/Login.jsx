import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Forms.css";

const initialState={
    detail:"",
    password:""
};


const Login=({Dark})=>{
    const [shwPass,setShwPass]=React.useState(false);
    const [details,setDetails]=React.useState(initialState);

    const handleSignin=(e)=>{
        e.preventDefault();
        console.log(details);
    }

    return <div id="FormPage" style={{backgroundColor:Dark?"black":"white"}}>
        <div id="Form">
            <Heading fontFamily={"cursive"}>Sign In</Heading>
            <form onSubmit={(e)=>handleSignin(e)}>
                <input value={details.detail} type="text" placeholder="NAME / EMAIL" onChange={(e)=>setDetails({...details,detail:e.target.value})} required/>
                <div>
                    <input value={details.password} type={shwPass?"text":"password"} placeholder="PASSWORD" onChange={(e)=>setDetails({...details,password:e.target.value})} required/>
                    {!shwPass && <AiFillEye size="24px" color={Dark?"rgb(0, 119, 255)":"black"} onClick={()=>setShwPass(true)}/>}
                    {shwPass && <AiFillEyeInvisible size="24px" color={Dark?"rgb(0, 119, 255)":"black"} onClick={()=>setShwPass(false)}/>}
                </div>
                <button type="submit">Sign In</button>
            </form>
            <h1 style={{color:Dark?"rgb(0, 119, 255)":"black"}}>Don't have a account? <Link to="/signup" style={{color:Dark?"rgb(129, 186, 252)":"rgb(0, 119, 255)"}}>Sign up</Link></h1>
        </div>
    </div>
}

export default Login;