import { useState } from "react";
import '../css/pageHeading.css'
import { Button } from "primereact/button";
import { useNavigate } from "react-router";
const LoginModal =({nameProp,emailProp})=>{
    const [name, setName] = useState(nameProp);
    const [email, setEmail] = useState(emailProp);
    const navigate = useNavigate(); 

    const gotoDashboard = ()=>{
        navigate("/user-dashboard")
    }
    return(
        <div className="page-heading-card" >
        <div className="page-heading-content" >
            
            <div style={{fontFamily: 'cursive' , fontSize: '2.0rem' , color:'#27333f', paddingLeft: '50px'}}> 
            Hey {nameProp}, 
            <span  style={{paddingLeft: '50px'}} > 
            <Button type="button" label="Notifications" size="small" severity="warning" icon="pi pi-bell" outlined badge="0"   />
           </span>
           <span  style={{paddingLeft: '50px'}} >
            <Button type="button" label="Messages"  size="small" icon="pi pi-users" outlined badge="1"  />
            </span>
            </div>
        </div>
        <div className="goto-button">
            <button onClick={()=>gotoDashboard()}>My Dashboard</button>
        </div>
    </div>
    )
}

export default LoginModal;