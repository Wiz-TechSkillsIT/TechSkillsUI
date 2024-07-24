import { Link } from 'react-router-dom';
import '../css/paj.css';
function PajDashboard(){
    return (
        <div className='paj-card'>
        <div className='paj-panel'>
            
                <div class="rowpaj">

                    <div class="columnpaj image-columnpaj">
                        <img src="./images/paj.png" alt="Description of Image" style={{ width: '70%' }} />
                    </div>
                    <div class="columnpaj text-columnpaj">
                        <div className="headingpaj"> You Learn, We Teach - Don't worry about the Fee  </div>
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
        </div>
    )
}

export default PajDashboard;