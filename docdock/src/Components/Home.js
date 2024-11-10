import Navbar from './Navbar';
import Hero from './Hero'
import Features from './Features';
import Footer from './Footer';


function Home() {
  return (
    <div className='bg-offwhite'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Footer></Footer>
    </div>

  );
}

export default Home;
