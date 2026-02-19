import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayouts = () => {
  return (
    <div className='flex flex-col min-h-screen '>
      <Navbar />
        <div className='flex-1 w-11/12 mx-auto'>
          <Outlet />
        </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;