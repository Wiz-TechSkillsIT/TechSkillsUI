import '../css/CourseScrollPanel.css'
import { Galleria } from 'primereact/galleria';
 
const LearningTrack = () =>{
    const courses = [
        {
            title: 'Core Java with SQL',
            image: './images/corejava.png',
            description: 'Make console based apps with Java and SQL',
        },
        {
            title: 'Java Backend Developer',
            image: './images/springboot.png',
            description: 'Enterprise grade REST apis with Spring boot and AWS',
        },
       
        {
            title: 'MERN Stack',
            image: './images/mern_stack.png',
            description: 'Create Web Apps with React UI, Node API and MongoDB',
        },
        {
            title: 'MEAN Stack',
            image: './images/mean_stack.png',
            description: 'Create Web Apps with Angular UI, Node API and MongoDB',
        },
        {
            title: 'Full Stack Java Developer',
            image: './images/java_full_stack.png',
            description: 'Spring MVC Framework with J2EE based UI',
        },
        
    ];

    const itemTemplate = (item) => (
        <div className="course-card">
            <img src={item.image} alt={item.title} className="course-image" />
            <div className="course-title">{item.title}</div>
            <div className="course-description">{item.description}</div>
        </div>
    );

    return(
        <div>
             <div className="heading-container">
            <p className="heading-text">Learning Tracks</p>
            
        </div>

        <div className="course-scroll-panel">
            <button
                className="scroll-button left"
                onClick={() => (document.querySelector('.courses-container').scrollLeft -= 250)}
            >
                <svg viewBox="0 0 24 24">
                    <path d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
                </svg>
            </button>
            <div className="courses-container">
                {courses.map((course, index) => (
                    <div className="course-card" key={index}>
                        <img src={course.image} alt={course.title} className="course-image" />
                        <div className="course-title">{course.title}</div>
                        <div className="course-description">{course.description}</div>
                    </div>
                ))}
            </div>
            <button
                className="scroll-button right"
                onClick={() => (document.querySelector('.courses-container').scrollLeft += 250)}
            >
                <svg viewBox="0 0 24 24">
                    <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                </svg>
            </button>
        </div>

        </div>
       
    )
}

export default LearningTrack;