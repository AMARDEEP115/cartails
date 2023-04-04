import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button,useDisclosure} from '@chakra-ui/react';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import "./Navbarr.css";

const Navbar=({Dark,setDark})=>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    const Navi=useNavigate();
    const btnRef = React.useRef();

    return <div id="Navbar">
        <h1 style={{color:Dark?"black":"white"}} onClick={()=>Navi("/")}>HOMEEE</h1>
        <div id="FullNavbar">
            <Link to="/" style={{color:Dark?"black":"white"}}>Home</Link>
            <Link to="/signin" style={{color:Dark?"black":"white"}}>Signin</Link>
            <Link to="/signup" style={{color:Dark?"black":"white"}}>Singnup</Link>
            <a href="#" style={{color:Dark?"black":"white"}}>Logout</a>
            {!Dark&&<BsFillMoonFill color="white" onClick={()=>setDark(true)}/>}
            {Dark&&<BsFillSunFill color="yellow" onClick={()=>setDark(false)}/>}
        </div>
        <div id="SmallNavbar" style={{border:"3px solid",borderColor:Dark?"black":"white",borderRadius:"5px",padding:"2px"}}>
            <GiHamburgerMenu size="30px" color={Dark?"black":'white'} onClick={onOpen} />
            <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent bgColor={Dark?"black":"white"}>
                    <DrawerCloseButton color={"rgb(0, 119, 255)"}/>
                    <DrawerHeader color={"rgb(0, 119, 255)"}>MENU</DrawerHeader>
          
                    <DrawerBody id="ModalNav">
                        <Link to="/" style={{color:"rgb(0, 119, 255)"}}>Home</Link>
                        <Link to="/signin" style={{color:"rgb(0, 119, 255)"}}>Signin</Link>
                        <Link to="/signup" style={{color:"rgb(0, 119, 255)"}}>Singnup</Link>
                        <a href="#" style={{color:"rgb(0, 119, 255)"}}>Logout</a>
                        {!Dark && <BsFillMoonFill color="rgb(0, 119, 255)" onClick={()=>setDark(true)}/>}
                        {Dark && <BsFillSunFill color="yellow" onClick={()=>setDark(false)}/>}
                    </DrawerBody>
          
                    <DrawerFooter>
                        {/* <Button variant='outline' mr={3} onClick={onClose}>Cancel</Button>
                        <Button colorScheme='blue'>Save</Button> */}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    </div>
}

export default Navbar;