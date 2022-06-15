import './App.css';
import DiscoverJobs from './Components/DiscoverJobs';
import Footer from './Components/Footer';
import Info from './Components/Info';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import SignUp from './Components/SignUp';
import SliderPlay from './Components/SliderPlay';

function App() {
  return (
    <>
    <div className='lg:m-1/3 xl:m-1/2'>
      <NavBar/>
      <SearchBar/>
      <Info/>
      <SliderPlay/>
      <DiscoverJobs/>
      <Footer/>
      {/* <SignUp/> */}
      </div>
    </>
  );
}

export default App;
