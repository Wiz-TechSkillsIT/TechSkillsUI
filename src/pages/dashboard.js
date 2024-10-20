
 
import LearningTrack from '../components/learningtrack';
import ReviewsCommon from '../components/reviewscommon';
import LearnByDoingIt from '../components/learmbydoing';
import Motto from '../components/motto';
import PajDashboard from '../components/pajdashboard';
 import { useEffect, useState } from 'react';
import LoginModal from '../components/loginModal';
import { useSelector } from 'react-redux';
import CourseOfferings from '../components/CourseOfferings';
 

function Dashboard(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const {list} = useSelector(((state)=>state.user));
     useEffect(()=>{
       if(list.length === 1 ){
          setName(list[0].fname)
          setEmail(list[0].email);
     }
    },[list.length])

    return (
         <div style={{backgroundColor: 'bisque'}}>
                {
                   list.length === 1?
                    <div>
                          <LoginModal nameProp={name} emailProp={email} />
                    </div>
                     : ''
                }
             <div><LearningTrack /></div> 
             <div><Motto /></div>  
             <div><PajDashboard /></div>  
             <div><LearnByDoingIt /></div>  
             <div><ReviewsCommon /></div>  
           </div>
    )
}
        

export default Dashboard;