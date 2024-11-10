import Navbar from './Navbar';
import Hero from './Hero'
import Features from './Features';


function Home() {
  return (
    <div className='bg-offwhite'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
    </div>

  );
}

export default Home;
