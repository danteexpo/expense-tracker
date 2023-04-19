// react-router-dom
import { Link } from 'react-router-dom';
// img
import expenseTracker from '../../public/expense-tracker.svg';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#1f9751] p-5">
      <ul className="flex my-0 mx-auto max-w-[1080px] items-center">
        <li className="mr-auto font-bold text-xl text-white">
          <img src={expenseTracker} alt="" className="h-8" />
        </li>
        <li className="text-white font-medium hover:underline">
          <Link to="/login">Login</Link>
        </li>
        <li className="ml-4 md:ml-8 text-white font-medium hover:underline">
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
