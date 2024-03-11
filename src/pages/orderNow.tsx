import { useState } from 'react';
/* Utils */
import { navbarItems } from '../utils/constants';

const OrderNow = () => {

  const [activeNavItem, setActiveNavItem] = useState<string>(navbarItems[0].label);
  const [isNavbarScrollLocked, setNavbarScrollLocked] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>(''); 
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);


  const handleNavItemClick = (label: string) => {
    setActiveNavItem(label);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const SelectedPage = navbarItems.find((item) => item.label === activeNavItem)?.page;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (

    <section className='grid grid-cols-12 relative'>
       <nav className="flex p-2 md:space-x-4 mb-8 bg-red-900 rounded-2xl m-4 col-span-12 md:col-span-9 justify-between">
        {/* Icona dell'hamburger per la modalità mobile */}
        <div className="md:hidden">
          <button
            className="text-white py-2 px-4 font-semibold rounded flex items-center cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <span className="mr-2">Icona Hamburger</span>
          </button>
        </div>
        <div className='hidden md:flex w-[70%] justify-evenly md:w-full'>
        {navbarItems.map((item, index) => (
            <button
              key={index}
              className={`text-white py-2 px-4 md:px-2 font-semibold rounded flex items-center cursor-pointer ${item.label === activeNavItem ? "bg-white text-red-900" : ""}`}
              onClick={() => handleNavItemClick(item.label)}
            >
            <span className="mr-2">{item.icon}</span>
              {item.label}
            </button>
            ))}
        </div>
          <div className='flex w-[30%] justify-end col-span-12 md:flex md:w-auto'>
            <input
                type="text"
                placeholder="Cerca..."
                className="p-2 md:px-4 rounded-xl"
                value={searchTerm}
                onChange={handleSearchChange}
              />
          </div>
        </nav>
         {/* Menu dropdown per la modalità mobile */}
         {isMobileMenuOpen && (
          <div className="md:hidden bg-red-900 h-fit col-span-12 fixed top-[90px] p-2 mx-4 overflow-y-auto rounded-2xl">
            <div className="flex flex-col items-center justify-self-start">
              {navbarItems.map((item, index) => (
                <button
                  key={index}
                  className={`text-white py-2 px-4 font-semibold rounded flex flex-row cursor-pointer ${item.label === activeNavItem ? "bg-white text-red-900" : ""}`}
                  onClick={() => handleNavItemClick(item.label)}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
            {/* Bottone per chiudere il menu dropdown */}
            <button onClick={toggleMobileMenu}>Chiudi Menu</button>
          </div>
        )}
        <nav className=" justify-center p-2 space-x-4 mb-8 bg-red-900 rounded-2xl m-4 col-span-3 hidden md:flex">
          <button className={`text-white py-2 px-4 md:px-2 font-semibold rounded flex items-center cursor-pointer`}>
            <span className="mr-2">cart</span>
          </button>
        </nav>
        <div className='col-span-12 md:col-span-9 h-full bg-gray-200 mx-4 rounded-2xl p-2 overflow-auto'>
          {SelectedPage && <SelectedPage />}
        </div>
        <div className='col-span-3 h-[85vh] bg-gray-200 mx-4 rounded-2xl p-2 hidden md:flex'>
          <div className='w-full h-full'>
             <h1>Prova cart</h1>
          </div>
        </div>
    </section>
   
  );
};

export default OrderNow;