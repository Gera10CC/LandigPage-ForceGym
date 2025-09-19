import { Routes, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/page';
import VideoSection from '../VideosSection';

function PublicRoutes() {    
    return (
        <Routes>
            <Route 
                path="/" 
                element={<LandingPage />} 
            />
            <Route 
                path="/videos-ejercicios" 
                element={<VideoSection/>} 
            />
        </Routes>
    );
}

export default PublicRoutes;