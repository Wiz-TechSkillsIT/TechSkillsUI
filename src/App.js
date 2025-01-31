import logo from './logo.svg';
import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import Dashboard from './pages/dashboard';
import { Route, Routes, useLocation } from 'react-router';
import CourseDetails from './pages/coursedetails';
import Navbar from './components/navbar';
import CourseVideos from './pages/coursevideos';
 import Auth from './pages/auth';
import { Provider } from 'react-redux';
import store from './store';
import UserDashboard from './pages/userdashboard';
import Footer from './components/footer';
import PrivateRoute from './auth/privateRoute';
import TrackInfoJavaSql from './components/trackinfojavasql';
import PrivacyPolicy from './components/privacyPolicy';
import TermsAndConditions from './components/terms';
import CourseCheckout from './components/courseCheckout';
import SpringBootWithAWS from './components/springbootwithaws';
import MernStack from './components/mernstack';
import SpringBootDetails from './pages/SpringBootDetails';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import TrackInfoNode from './components/trackinfonode';
import TrackInfoReact from './components/trackinforeact';
import TrackInfoAngular from './components/trackinfoangular';
import { ToastContainer } from 'react-toastify';

function App() {
  const location = useLocation();
  return (
    <div> 
      <ToastContainer position="top-center" autoClose={3000} />
      <GoogleReCaptchaProvider
      reCaptchaKey="6Ld0FmcqAAAAAGbEOn7GUWGLEwlVUl2NcQs-elNl"  
    >
    <Provider store={store}> 
    <PrimeReactProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/track-info-java-sql' element={<TrackInfoJavaSql />} />
        <Route path='/track-info-nodejs' element={<TrackInfoNode />} />
        <Route path='/track-info-react' element={<TrackInfoReact />} />
        <Route path='/track-info-angular' element={<TrackInfoAngular />} />
        
        <Route path='/spring-boot-with-aws' element={<SpringBootWithAWS />} />
        <Route path='/mern-stack' element={<MernStack />} />
        <Route path='/user-dashboard' element={<UserDashboard />} />
        <Route path='/course-details-java-spring-boot' element={<SpringBootDetails /> } />
        <Route 
                    path="/course-videos/:id" 
                    element={
                        //<PrivateRoute key={location.key}>
                            <CourseVideos />
                        //</PrivateRoute>
                    }  
                />
        <Route path='/auth' element={<Auth />} />
        <Route path='/checkout/:id/' element={<CourseCheckout />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
      </Routes>
         <Footer />
    </PrimeReactProvider>
    </Provider>
    </GoogleReCaptchaProvider>
    </div>
  );
}

export default App;
