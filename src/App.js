import logo from './logo.svg';
import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import Dashboard from './pages/dashboard';
import { Route, Routes } from 'react-router';
import CourseDetails from './pages/coursedetails';
import Navbar from './components/navbar';
import CourseVideos from './pages/coursevideos';
 import Auth from './pages/auth';
import { Provider } from 'react-redux';
import store from './store';
import UserDashboard from './pages/userdashboard';
import Footer from './components/footer';

function App() {
  return (
    <div> 
    <Provider store={store}> 
    <PrimeReactProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/user-dashboard' element={<UserDashboard />} />
        <Route path='/course-details' element={<CourseDetails /> } />
        <Route path='/course-videos' element={<CourseVideos /> } />
        <Route path='/auth' element={<Auth />} />
      </Routes>
         <Footer />
    </PrimeReactProvider>
    </Provider>
    </div>
  );
}

export default App;
