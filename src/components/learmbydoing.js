import { Link } from 'react-router-dom';
import '../css/learn.css'
function LearnByDoingIt(){

    return(
        <div className='learn-panel'>
            <div class="row1">
        <div class="column image-column1">
            <img src="./images/learn.png" alt="Description of Image" style={{width: '50%'}} />
        </div>
        <div class="column text-column1">
            <div className="heading1"> Best way to learn coding is by making projects  </div>
            <div className="para">
               Hi! This is Imtiyaz Hirani 
               (<Link to={'#'}><i className="pi pi-linkedin" style={{ color: 'slateblue' }}></i>
               </Link>)&nbsp;
               and I am lead instructor at TechSkillsIT. <br /> 
               <br />
               At TechSkillsIT, We have created the content by implementing concepts practically and resolving errors live on screen in the videos. 
               <br />
                <br />
               <span className='highlight'>After all premium courses, we conduct live sessions where I create projects from scratch with learners following along with me.   
               </span></div>
        </div>
    </div>
        </div>
        
    )
}

export default LearnByDoingIt;