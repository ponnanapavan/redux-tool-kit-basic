import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { useSelector } from 'react-redux';
const Navbar = () => {
    const cartData=useSelector(state=>state.cart)
   
    return (
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold">Ecommerce</div>
            <div>
                <Link to="/" className="mr-4">Home</Link>
                <Link to="/cart" className="mr-4">My Cart {cartData.length} </Link>
            </div>
        </div>
    );
}

export default Navbar;