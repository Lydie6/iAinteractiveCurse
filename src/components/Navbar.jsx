import { Link } from 'react-router-dom';
import { FiMoon } from 'react-icons/fi';
import { FaRegMoon } from "react-icons/fa6";
import '../index.css'

const Navbar = () => {
  return (
    <nav className="bg-dark-bg text-white p-4 sticky top-0 z-10  font-pixel  bg-dark-nav">
      <div className=" flex justify-between items-center max-w-[1200px] ml-[20%] mr-10">
        <div className="flex space-x-8 text-px-20">
          <Link to="/" className="hover:text-accent">Home</Link>
          <Link to="/blog" className="hover:text-accent">Blog</Link>
          <Link to="/learn" className="hover:text-accent">Learn</Link>
          <Link to="/games" className="hover:text-accent">Games</Link>
          <Link to="/coding" className="hover:text-accent">Coding</Link>
          <Link to="/events" className="hover:text-accent">Events</Link>
        </div>
        <div className="flex space-x-4 items-center">
        <FaRegMoon className="text-xl cursor-pointer hover:text-accent" />
        <button className="bg-purple-button text-white px-4 py-2 rounded">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;