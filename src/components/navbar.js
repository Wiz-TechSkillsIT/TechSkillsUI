import { MegaMenu } from 'primereact/megamenu';
import '../css/navbar.css';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../store/action/user'; // Import the logout action

export default function Navbar() {
    const navigate = useNavigate();
    const [avatar, setAvatar] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const { list } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const dropdownRef = useRef(null); // Create a ref for the dropdown

    useEffect(() => {
        if (list.length === 1) {
            console.log(list[0].picture)
            setAvatar(list[0].picture);
        }
    }, [list.length]);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    // Handle logout action and close the dropdown
    const handleLogout = () => {
        // Clear the authentication token
        localStorage.clear(); // Or sessionStorage.removeItem("authToken");

        // Dispatch the logout action to clear the Redux state
        dispatch(logoutUser());

        // Redirect to login page
        navigate("/auth");

        // Reset avatar and close the dropdown
        setAvatar(null);
        setDropdownVisible(false); // Close the dropdown on logout
        console.log("User logged out successfully");
    };

    // Hide dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false); // Hide dropdown if clicked outside
            }
        };

        // Add event listener
        if (dropdownVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Clean up the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownVisible]);

    const items = [
        {
            label: 'Course Library',
            icon: 'pi pi-box',
            items: [
                [
                    {
                        label: 'Learning Tracks',
                        items: [
                            {
                                label: 'Java FSD: Java to Spring Boot & AWS ',
                                command: () => {
                                    navigate('/track-info-java-sql');
                                },
                            },
                            { label: 'Node.js Programming with Microservices' ,
                            command: () => {
                                navigate('/track-info-nodejs');
                            }},
                            { label: 'React.js Mastery',
                            command: () => {
                                navigate('/track-info-react');
                            }} ,
                            { label: 'Professional Angular Development'  ,
                            command: () => {
                                navigate('/track-info-angular');
                            }},
                           // { label: 'J2EE: JSPs and Servlets' },
                        ],
                    },
                ],
                /*   [
                    {
                        label: 'Premium Courses',
                        style: 'width:250px; !important',
                        items: [
                            {
                                label: 'Core Java [A-Z]',
                                command: () => {
                                    navigate('/course-details?id=64e13322b617710fd139a70e');
                                },
                            },
                            {
                                label: 'Spring MVC Framework',
                                command: () => {
                                    navigate('/course-details?id=64e6ed1296e21156e3ae1bbd');
                                },
                            },
                            { label: 'Spring Boot for Professionals' },
                            { label: 'Angular Programming' },
                            { label: 'React Programming' },
                            { label: 'Node.Js' },
                            { label: 'Mastering DB/SQL Programming' },
                        ],
                    },
                ],*/
            ],
        },
        /*
        {
            label: 'Certifications',
            icon: 'pi pi-mobile',
            items: [
                [
                    {
                        label: 'Java Certification',
                        items: [{ label: 'Oracle Certified Associate, Java Programmer:1Z0-808' }],
                    },
                    {
                        label: 'SQL Certification',
                        items: [{ label: 'Oracle Certified Associate, SQL Programmer:1Z0-801' }],
                    },
                ],
            ],
        },*/
         /*
        {
            label: 'Pay After Job Program',
            icon: 'pi pi-star',
            command: () => {
                console.log('PAJ');
            },
        },*/
    ];

    const start = (
        <Link to="/">
            <img src="./images/logo_main.png" style={{ width: '60%' }} alt="Logo" />
        </Link>
    );

    const end = (
        <div className="flex align-items-center gap-2" style={{ position: 'relative' }}>
            {avatar === null ? (
                <Link to="/auth">
                    <i className="pi pi-user ml-4" style={{ fontSize: '1.5rem' }}></i>
                </Link>
            ) : (
                <div>
                    <span onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                        <img
                            key={avatar}
                            src={avatar}
                            alt="Avatar"
                            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                        />
                    </span>
                    {/* Dropdown */}
                    {dropdownVisible && (
                        <div
                            ref={dropdownRef} // Attach ref to the dropdown
                            className="dropdown"
                            style={{
                                position: 'absolute',
                                top: '60px',
                                right: '0',
                                backgroundColor: '#fff',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                padding: '10px',
                                borderRadius: '4px',
                                zIndex: 10,
                            }}
                        >
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li
                                    onClick={handleLogout}
                                    style={{
                                        cursor: 'pointer',
                                        padding: '8px 16px',
                                        borderBottom: '1px solid #ccc',
                                    }}
                                >
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );

    return (
        <div className="card" style={{ backgroundColor: 'bisque' }}>
            <MegaMenu model={items} breakpoint="960px" start={start} end={end} className="custom-megamenu" />
        </div>
    );
}
