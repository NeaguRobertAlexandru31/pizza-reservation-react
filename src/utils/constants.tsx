/* Pages */
import PizzePage   from "../pages/pizzePage"
import FocaccePage from "../pages/focaccePage"
import BibitePage  from "../pages/bibitePage"
import DolciPage   from "../pages/dolciPage"
/* icons */
import { FaPizzaSlice, FaBeer, FaBreadSlice, FaCandyCane } from 'react-icons/fa';


export const navbarItems = [
  {label: "Pizze",   icon: <FaPizzaSlice />,  page: PizzePage},
  {label: "Focacce", icon: <FaBreadSlice size={36}/>,  page: FocaccePage},
  {label: "Bibite",  icon: <FaBeer size={36}/>,        page: BibitePage},
  {label: "Dolci",   icon: <FaCandyCane size={36}/>,   page: DolciPage},
]