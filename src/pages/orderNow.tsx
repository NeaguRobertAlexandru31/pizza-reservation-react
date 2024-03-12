import { useState } from 'react';
/* Utils */
import { navbarItems } from '../utils/constants';
/* Components */
import Cart from './carrelloPage';

const OrderNow = () => {

  const [activeNavItem, setActiveNavItem] = useState<string>(navbarItems[0].label);
  const [searchTerm, setSearchTerm] = useState<string>(''); 
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);


  const handleNavItemClick = (label: string) => {
    setActiveNavItem(label);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const SelectedPage = navbarItems.find((item) => item.label === activeNavItem)?.page;

  return (

    <section className ='grid grid-cols-12 relative'>
      {/* Navbar Desktop */}
      <nav className ="flex p-2 md:space-x-4 mb-8 bg-red-900 rounded-2xl m-4 col-span-12 md:col-span-9 justify-between">
        {/* Logo Mobile */}
        <div className ="md:hidden">
          <button className ="text-white py-2 px-4 font-semibold rounded flex items-center cursor-pointer">
            <span className ="mr-2">LOGO</span>
          </button>
        </div>
        {/* End Logo Mobile */}

        {/* Navbar Items Desktop  */}
        <div className='hidden md:flex w-[70%] justify-evenly md:w-full'>
          {navbarItems.map((item, index) => (
            <button
              className ={`text-white py-2 px-4 md:px-2 font-semibold rounded flex items-center cursor-pointer ${item.label === activeNavItem ? "bg-white text-red-800" : ""}`}
              key       ={index}
              onClick   ={() => handleNavItemClick(item.label)}
            >
            <span className="mr-2">{item.icon}</span>
              {item.label}
            </button>
            ))}
        </div>
        {/* End Navbar Items Desktop  */}

        {/* Search Bar */}
        <div className ='flex w-[30%] justify-end md:w-auto'>
          <input
            className   ="p-2 md:px-4 rounded-xl"           
            type        ="text"
            placeholder ="Cerca..."
            value       ={searchTerm}
            onChange    ={handleSearchChange}
          />
        </div>
        {/* End Search Bar */}
      </nav>
      {/* End Navbar Desktop */}

      {/* Bottom bar Mobile */}
      <nav className ="md:hidden p-2 bg-red-900 rounded-2xl m-4 col-span-12 w-full fixed bottom-4 left-0">
        <div className ="flex justify-between w-full">
          {navbarItems.map((item, index) => (
            <button
              className ={`text-white py-2 px-4 font-semibold rounded-xl flex flex-row cursor-pointer ${item.label === activeNavItem ? "bg-white text-red-700" : ""}`}
              key       ={index}
              onClick   ={() => handleNavItemClick(item.label)}
            >
              <span className ="mr-2">{item.icon}</span>
            </button>
          ))}
        </div>
      </nav>
      {/* End Bottom Bar Mobile */}

      {/* Cart Navbar */}
      <nav className =" justify-center p-2 space-x-4 mb-8 bg-red-900 rounded-2xl m-4 col-span-3 hidden md:flex">
        <button className ={`text-white py-2 px-4 md:px-2 font-semibold rounded flex items-center cursor-pointer`}>
          <span className ="mr-2">cart</span>
        </button>
      </nav>
      {/* End Cart Navbar */}

      {/* Pages */}
      <div className ='col-span-12 md:col-span-9 h-full bg-gray-200 mx-4 rounded-2xl p-2 overflow-auto'>
        {SelectedPage && <SelectedPage />}
      </div>
      {/* End Pages */}

      {/* Cart */}
      <div className ='col-span-3 h-[85vh] bg-gray-200 mx-4 rounded-2xl p-2 hidden md:flex'>
        <div className ='w-full h-full'>
          <Cart />
        </div>
      </div>
      {/* End Cart */}
    </section>
  );
};

export default OrderNow;