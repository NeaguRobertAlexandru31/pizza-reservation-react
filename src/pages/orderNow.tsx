import { useState } from 'react';
/* Utils */
import { navbarItems } from '../utils/constants';
/* Components */
/* Icons */
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';


const OrderNow = () => {

  /* useState */
  const [activeNavItem, setActiveNavItem] = useState<string>(navbarItems[0].label);
  const [expanded, setExpanded]           = useState(false);

  /* useState functions */
  const handleNavItemClick = (label: string) => {
    setActiveNavItem(label);
  };

  /* Functions */
  const SelectedPage = navbarItems.find((item) => item.label === activeNavItem)?.page;

  return (

    <section className ='grid grid-cols-12 grid-rows-10 h-[100vh]'>
      {/* Navbar Desktop */}
      <nav className ="flex col-span-12 row-span-2 row-start-10 justify-around md:col-span-2 md:row-span-12 bg-blue-900">
        {/* Navbar Items Desktop  */}
        <div className='flex flex-row justify-between w-full p-4 md:flex-col md:justify-start md:p-2 md:m-2 md:mt-10'>
          {navbarItems.map((item, index) => (
            <button
              className = {`flex items-center md:py-2 md:px-2 text-white font-semibold rounded-lg cursor-pointer ${item.label === activeNavItem ? "bg-white text-blue-800" : ""}`}
              key       = {index}
              onClick   = {() => handleNavItemClick(item.label)}
            >
            <span className="m-2" style={{ fontSize:"36px"}}>{item.icon}</span>
            <span className='hidden md:flex'>{item.label}</span>
            </button>
            ))}
        </div>
        {/* End Navbar Items Desktop  */}
      </nav>
      {/* End Navbar Desktop */}
      {/* Search bar and settings */}
      <div className = 'flex col-span-12 row-span-1 md:col-span-10 md:col-start-3 justify-between items-center bg-blue-900 text-white'>
        <FaUserCircle size={36} className='ml-6'/>
        <div className = 'flex justify-center'>
          <form className="flex items-center">
            <input
              type="text"
              placeholder="Cerca"
              className="px-4 py-2 text-gray-900 rounded-lg border border-gray-300 focus:outline-none"
            />
          </form>
        </div>
        <FaShoppingCart size={36} className='mr-6' />
      </div>
      {/* End search bar and settings */}
      {/* Pages */}
      <div className = 'col-span-12 row-span-8 row-start-2 row-end-10 md:col-span-10 md:col-start-3 md:row-span-9 md:row-start-2 bg-gray-200 overflow-auto'>
        {SelectedPage && <SelectedPage />}
      </div>
      {/* End Pages */}
    </section>
  );
};

export default OrderNow;