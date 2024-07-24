
 import { MegaMenu } from 'primereact/megamenu';
 
import '../css/navbar.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
 import { useSelector } from 'react-redux';
  
export default function Navbar(){
    const navigate = useNavigate();
    const [avatar,setAvatar] = useState(null);
    const {list} = useSelector(((state)=>state.user));
    
    useEffect(()=>{
         if(list.length === 1){
           setAvatar(list[0].picture)
        }
        
    },[list.length])
    const items = [
        {
            label: 'Course Library',
            icon: 'pi pi-box',
            items: [
                [
                    {
                        label: 'Free Courses',
                        items: [{ label: 'Java Essentials',  
                            command: () => {
                                navigate('/course-details?id=1');
                            } }, { label: 'Code with Python' }, { label: 'Program with C' }, { label: 'SQL Essentials' }, { label: 'J2EE: JSPs and Servlets' }]
                    }
                ],
                [
                    {
                        label: 'Premium Courses',
                          style : 'width:250px; !important',
                        items: [{ label: 'Core Java [A-Z]'
                            ,  
                            command: () => {
                                navigate('/course-details?id=64e13322b617710fd139a70e');
                            } 
                         }, { label: 'Spring MVC Framework'
                            ,  
                            command: () => {
                                navigate('/course-details?id=64e6ed1296e21156e3ae1bbd');
                            } 
                          }, { label: 'Spring Boot for Professionals' },
                            { label: 'Angular Programming' },
                            { label: 'React Programming' },
                            { label: 'Node.Js' },
                            { label: 'Mastering DB/SQL Programming' }
                        ]
                    },
                     
                ] 
                 
            ]
        },
        {
            label: 'Certifications',
            icon: 'pi pi-mobile',
            items: [
                [
                    {
                        label: 'Java Certification',
                        items: [{ label: 'Oracle Certified Associate, Java Programmer:1Z0-808' }]
                    },
                    {
                        label: 'SQL Certification',
                        items: [{ label: 'Oracle Certified Associate, SQL Programmer:1Z0-801' }]
                    }
                ],
                
                
            ]
        },
        {
            label: 'Pay After Job Program',
            icon: 'pi pi-star',
            command: () => {
                console.log('PAJ')
            } 
        }
    ];
   
    //const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const start = <Link to='/'><img src='./images/techskillslogo_1.png' style={{width: '80%'}} /></Link> 
    const end = (
        <div className="flex align-items-center gap-2">
            {
                avatar === null?
                <Link to='/auth'> <i className="pi pi-user ml-4" style={{ fontSize: '1.5rem' }}></i>
             </Link> :
             <span >
                <img src={avatar} alt='Avatar' style={{width: '50%', height: '50%'}}></img>
             </span>
            }
            
         </div>
    );
    return (
        <div className="card"  style={{backgroundColor: 'bisque'}}>
             
            <MegaMenu model={items} breakpoint="960px" start={start} end={end}  className="custom-megamenu" />
        </div>
    )
}