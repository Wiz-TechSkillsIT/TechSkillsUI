import { useNavigate } from 'react-router';
import '../css/CourseScrollPanel.css';
import { Galleria } from 'primereact/galleria';

const LearningTrack = () => {
    const navigate = useNavigate();
    
    const courses = [
        {
            title: 'Core Java with SQL',
            image: './images/corejava.png',
            description: 'Make console based apps with Java and SQL',
            link: '/track-info-java-sql', // Add your respective routes here
        },
        {
            title: 'Java Backend Developer',
            image: './images/springboot.png',
            description: 'Enterprise grade REST apis with Spring boot and AWS',
            link: '/spring-boot-with-aws',
        },
        {
            title: 'MERN Stack',
            image: './images/mern_stack.png',
            description: 'Create Web Apps with React UI, Node API and MongoDB',
            link: '/mern-stack',
        },
        {
            title: 'MEAN Stack',
            image: './images/mean_stack.png',
            description: 'Create Web Apps with Angular UI, Node API and MongoDB',
            link: '/mean-stack',
        },
        {
            title: 'Full Stack Java Developer',
            image: './images/java_full_stack.png',
            description: 'Spring MVC Framework with J2EE based UI',
            link: '/full-stack-java',
        },
    ];

    const handleCardClick = (link) => {
        navigate(link); // Navigate to the respective link when the card is clicked
    };

    return (
        <div>
            <div className="heading-container">
                {/* <p className="heading-text">Learning Tracks</p> */}
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
                        <div 
                            className="course-card" 
                            key={index} 
                            onClick={() => handleCardClick(course.link)} // Handle click
                        >
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
    );
};

export default LearningTrack;
