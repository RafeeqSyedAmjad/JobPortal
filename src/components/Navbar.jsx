import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {

    return (
        <nav className="flex justify-between items-center bg-gray-200 p-4">
            <Link to="/" className="text-xl font-bold">
                Job Portal
            </Link>
        </nav>
    );
};

export default Navbar;
