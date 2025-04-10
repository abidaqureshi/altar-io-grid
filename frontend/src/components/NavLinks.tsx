import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <div className="flex justify-center mb-4">
            <div className="flex gap-4 ">
                <Link
                    to="/"
                    className="flex bg-white items-center font-bold hover:text-orange-500"
                >
                    Home
                </Link>
                <Link
                    to="/payments"
                    className="flex bg-white items-center font-bold hover:text-orange-500"
                >
                    Payments
                </Link>
            </div>
        </div>
    );
};

export default NavLinks;
