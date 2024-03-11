/* Pages */
import PizzePage from "../pages/pizzePage"
import FocaccePage from "../pages/focaccePage"
import BibitePage from "../pages/bibitePage"
import DolciPage from "../pages/dolciPage"
/* icons */
import { FaPizzaSlice, FaBeer, FaBreadSlice, FaCandyCane } from 'react-icons/fa';


export const navbarItems = [
  {label: "Pizze",   icon: <FaPizzaSlice />,  page: PizzePage},
  {label: "Focacce", icon: <FaBreadSlice />,  page: FocaccePage},
  {label: "Bibite",  icon: <FaBeer />,        page: BibitePage},
  {label: "Dolci",   icon: <FaCandyCane />,   page: DolciPage},
]