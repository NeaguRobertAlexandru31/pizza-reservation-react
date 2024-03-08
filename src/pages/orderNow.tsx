import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navbarItems } from '../constants';

const OrderNow = () => {

  const [activeNavItem, setActiveNavItem] = useState<string>(navbarItems[0].label);


  const handleNavItemClick = (label: string) => {
    setActiveNavItem(label);
  };

  const SelectedPage = navbarItems.find((item) => item.label === activeNavItem)?.page;

  return (

    <section>
       <nav className="flex justify-center p-2 space-x-4 mb-8 bg-red-800 rounded-2xl m-4">
            {navbarItems.map((item, index) => (
              <button
                key={index}
                className={`text-white py-2 px-4 md:px-2 font-semibold rounded flex items-center cursor-pointer ${item.label === activeNavItem ? "bg-white text-red-800" : ""}`}
                onClick={() => handleNavItemClick(item.label)}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
          
          {SelectedPage && <SelectedPage />}
    </section>
   
  );
};

export default OrderNow;