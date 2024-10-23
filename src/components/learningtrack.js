import { useNavigate } from 'react-router';
import '../css/CourseScrollPanel.css';
import { Galleria } from 'primereact/galleria';

const LearningTrack = () => {
    const navigate = useNavigate();
    
    const courses = [
        {
            title: 'Java to Spring Boot & AWS',
            image: './images/java_full_stack.png',
            description: 'Master Java programming from OOPs to advanced Spring Boot with AWS.',
            link: '/track-info-java-sql',
            levels: 'Levels 1 (Free), 2, 3'
        },
        {
            title: 'Node.js API Developer',
            image: './images/nodejs.png',
            description: 'Learn Node.js and build REST APIs, full-stack apps, and secure microservices.',
            link: '/track-info-nodejs',
            levels: 'Levels 1 (Free), 2, 3'
        },
        {
            title: 'React Development',
            image: './images/react.png',
            description: 'Become a job-ready React developer by mastering the latest React and Redux with projects.',
            link: '/mean-stack',
            levels: 'Levels 1 (Free), 2, 3'
        },
        {
            title: 'Angular Development',
            image: './images/angular.png',
            description: 'Learn Angular 18 from fundamentals to advanced concepts and real-world projects.',
            link: '/full-stack-java',
            levels: 'Levels 1 (Free), 2, 3'
        },
        {
            title: 'Database Programming',
            image: './images/sql.png',
            description: 'Learn SQL and NoSQL databases, optimized queries, and scaling techniques.',
            link: '/track-info-java-sql', // Add your respective routes here
            levels: 'Levels 1 (Free), 2'
        }
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
                             <div className="course-description">{course.description}</div>
                            <div className="course-levels">{course.levels}</div>

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
