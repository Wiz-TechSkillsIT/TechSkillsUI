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

function App() {
  const location = useLocation();
  return (
    <div> 
    <Provider store={store}> 
    <PrimeReactProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/track-info-java-sql' element={<TrackInfoJavaSql />} />
        <Route path='/user-dashboard' element={<UserDashboard />} />
        <Route path='/course-details' element={<CourseDetails /> } />
        <Route 
                    path="/course-videos" 
                    element={
                        <PrivateRoute key={location.key}>
                            <CourseVideos />
                        </PrivateRoute>
                    } 
                />
        <Route path='/auth' element={<Auth />} />
        <Route path='/checkout' element={<CourseCheckout />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
      </Routes>
         <Footer />
    </PrimeReactProvider>
    </Provider>
    </div>
  );
}

export default App;
