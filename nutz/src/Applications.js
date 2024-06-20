import { Button } from "@mui/material";
import comming from "../src/assorts/nutzCommingSoon.png"
import { GoHome } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Applications=()=>{
    let navigate=useNavigate()
    const GoHome=()=>{
            navigate("/")
    }
    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:"center",flexDirection:'column'}}>
        <img src={comming} alt="img" style={{width:'50%',height:'50%'}}/>
        <Button varient="text" onClick={()=>GoHome()}>Go Home</Button>
        </div>
    )
}
export default Applications;