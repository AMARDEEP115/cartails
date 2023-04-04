import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Forms.css";

const initialState={
    name:"",
    email:"",
    password:""
};

const Signup=({Dark})=>{
    const [shwPass,setShwPass]=React.useState(false);
    const [details,setDetails]=React.useState(initialState);

    const handleSignup=(e)=>{
        e.preventDefault();
        console.log(details);
    }

    return <div id="FormPage" style={{backgroundColor:Dark?"black":"white"}}>
        <div id="Form">
            <Heading fontFamily={"cursive"}>Sign Up</Heading>
            <form onSubmit={(e)=>handleSignup(e)}>
                <input value={details.name} type="text" placeholder="NAME" onChange={(e)=>setDetails({...details,name:e.target.value})} required/>
                <input value={details.email} type="email" placeholder="EMAIL" onChange={(e)=>setDetails({...details,email:e.target.value})}/>
                <div>
                    <input value={details.password} type={shwPass?"text":"password"} placeholder="PASSWORD" onChange={(e)=>setDetails({...details,password:e.target.value})} required/>
                    {!shwPass && <AiFillEye size="24px" color={Dark?"rgb(0, 119, 255)":"black"} onClick={()=>setShwPass(true)}/>}
                    {shwPass && <AiFillEyeInvisible size="24px" color={Dark?"rgb(0, 119, 255)":"black"} onClick={()=>setShwPass(false)}/>}
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <h1 style={{color:Dark?"rgb(0, 119, 255)":"black"}}>Have an account? <Link to="/signin" style={{color:Dark?"rgb(129, 186, 252)":"rgb(0, 119, 255)"}}>Sign in</Link></h1>
        </div>
    </div>
}

export default Signup;