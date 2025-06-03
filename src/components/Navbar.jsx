import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router";
import { FiMenu, FiX, FiShoppingCart, FiHeart, FiUser, FiSearch } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItemsInCart } = useCart();
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="font-roboto bg-primary text-darkwhite py-3 md:py-4" ref={navRef}>
      <div className="mx-4 md:mx-40 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-ranchers text-2xl md:text-3xl font-bold cursor-pointer">TechNerd</Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 ml-12 gap-1">
          <input
            type="text"
            placeholder="Wyszukaj produkt..."
            className="w-2xl px-4 py-2 rounded-l-lg text-lightgrey bg-darkwhite outline-none"
          />
          <button className='px-2 rounded-r-lg bg-darkwhite text-lightgrey cursor-pointer duration-500 hover:bg-lightgrey hover:text-darkwhite'>
            <FiSearch />
          </button>
        </div>

        {/* Icons */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/cart" className="relative cursor-pointer hover:text-lightgrey duration-500">
            <FiShoppingCart size={24} />
            {totalItemsInCart > 0 && (
              <span className="absolute -top-2 -right-2 bg-rose text-darkwhite text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItemsInCart}
              </span>
            )}
          </Link>
          <FiHeart size={24} className='cursor-pointer hover:text-lightgrey duration-500' />
          <FiUser size={24} className='cursor-pointer hover:text-lightgrey duration-500' />
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-screen opacity-100 mt-3 space-y-3' : 'max-h-0 opacity-0 mt-0 space-y-0'}`}
      >
        <div className="px-4">
          <div className="flex flex-1 gap-1">
            <input
              type="text"
              placeholder="Szukaj..."
              className="w-full px-4 py-2 rounded-l-lg text-lightgrey bg-darkwhite outline-none"
            />
            <button className='px-2 rounded-r-lg bg-darkwhite cursor-pointer'>
              <FiSearch className='text-lightgrey' />
            </button>
          </div>
          <div className="flex flex-col gap-4 text-lg my-10">
            <Link to="#" className="border-b-2 w-full pb-2 pl-2" onClick={() => setIsOpen(false)}>Oferta dla Ciebie</Link>
            <Link to="#" className="border-b-2 w-full pb-2 pl-2" onClick={() => setIsOpen(false)}>Promocje</Link>
            <Link to="#" className="border-b-2 w-full pb-2 pl-2" onClick={() => setIsOpen(false)}>Status zamówienia</Link>
            <Link to="#" className="border-b-2 w-full pb-2 pl-2" onClick={() => setIsOpen(false)}>Gwarancje</Link>
            <Link to="#" className="border-b-2 w-full pb-2 pl-2" onClick={() => setIsOpen(false)}>Usługi dodatkowe</Link>
          </div>
          <div className="flex justify-around text-white text-lg">
            <Link to="/cart" className="relative cursor-pointer" onClick={() => setIsOpen(false)}>
              <FiShoppingCart size={24} />
              {totalItemsInCart > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose text-darkwhite text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItemsInCart}
                </span>
              )}
            </Link>
            <FiHeart size={24} onClick={() => setIsOpen(false)} />
            <FiUser size={24} onClick={() => setIsOpen(false)} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
