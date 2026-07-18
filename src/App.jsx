import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';

import ProjectDetail from './pages/ProjectDetail';

const Home = () => {
  return (
    <div className="relative z-0">
      <div>
        <Navbar />
        <Hero />
      </div>

      <div className="bg-about bg-cover bg-center bg-no-repeat">
        <About />
      </div>

      <Projects />

      <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
        <Tech />
      </div>

      <div
        className="bg-experience bg-cover bg-center bg-no-repeat
        rounded-tl-[150px] rounded-br-[150px]"
      >
        <div
          className="bg-experienceLight bg-cover bg-center
          bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
        >
          <Experience />
        </div>
      </div>

      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/proyectos/:slug"
          element={<ProjectDetail />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;