import HomePage from '@/pages/Home/HomePage';
import IntroPage from '@/pages/Intro/IntroPage';
import ProjectPage from '@/pages/Project/ProjectPage';
import AwardAndCertificationPage from '@/pages/AwardAndCertification/AwardAndCerticicationPage';
import EducationPage from '@/pages/Education/EducationPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MediaQueryUpdater from '@/app/MediaQueryUpdater';
import Layout from './Layout';
function App() {
    return (
        <>
            <MediaQueryUpdater />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/introdution" element={<IntroPage />} />
                        <Route path="/project" element={<ProjectPage />} />
                        <Route
                            path="/award&certification"
                            element={<AwardAndCertificationPage />}
                        />
                        <Route path="/education" element={<EducationPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
