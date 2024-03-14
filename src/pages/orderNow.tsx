import { useState } from 'react';
/* Utils */
import { navbarItems } from '../utils/constants';
/* Components */
/* Icons */

const OrderNow = () => {

  /* useState */
  const [activeNavItem, setActiveNavItem] = useState<string>(navbarItems[0].label);

  /* useState functions */
  const handleNavItemClick = (label: string) => {
    setActiveNavItem(label);
  };

  /* Functions */
  const SelectedPage = navbarItems.find((item) => item.label === activeNavItem)?.page;

  return (

    <section className ='grid grid-cols-12 grid-rows-10 h-[100vh]'>
      {/* Navbar Desktop */}
      <nav className ="md:col-span-2 md:row-span-12 bg-blue-900 justify-between">
        {/* Navbar Items Desktop  */}
        <div className='flex flex-col justify-evenly md:p-2 md:m-2 md:mt-10'>
          {navbarItems.map((item, index) => (
            <button
              className = {`flex items-center md:py-2 md:px-2 text-white font-semibold rounded-lg cursor-pointer ${item.label === activeNavItem ? "bg-white text-blue-800" : ""}`}
              key       = {index}
              onClick   = {() => handleNavItemClick(item.label)}
            >
            <span className="m-2">{item.icon}</span>
              {item.label}
            </button>
            ))}
        </div>
        {/* End Navbar Items Desktop  */}
      </nav>
      {/* End Navbar Desktop */}
        <div className='flex justify-between items-center md:col-span-10 md:col-start-3 row-span-1 bg-blue-900 text-white'>
            <div className='flex'>
              
            </div>
            <div className='flex justify-center'>
              <h1>searchbar</h1>
            </div>
            <div className='flex justify-end mr-2'>
              <h1 className='mx-2'>profilo</h1>
              <h1>carrello</h1>
            </div>
        </div>
      {/* Pages */}
      <div className ='md:col-span-10 md:col-start-3 md:row-span-9 md:row-start-2 bg-gray-200 overflow-auto'>
        {SelectedPage && <SelectedPage />}
      </div>
      {/* End Pages */}
    </section>
  );
};

export default OrderNow;