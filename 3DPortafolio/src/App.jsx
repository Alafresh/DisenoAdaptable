import LogoSection from './sections/LogoSection';
import NavBar from './components/NavBar';
import FeatureCards from './sections/FeatureCards';
import Hero from './sections/Hero';
import ShowCaseSection from './sections/ShowCaseSection';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      <LogoSection />
      <FeatureCards />
    </>
  );
};

export default App;
