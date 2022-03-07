import './App.css';
import Earn from './components/Earn';
import Feature from './components/Feature';
import Hero from './components/Hero';
import Rewards from './components/Rewards';
import Socials from './components/Socials';
import Tokenomics from './components/Tokenomics';

function App() {
  return (
    <>
    {/* Header */}
    <Hero />
    <Feature />
    <Rewards />
    <Earn />
    <Tokenomics />
    <Socials />
    {/* Footer */}
    </>
  );
}

export default App;
