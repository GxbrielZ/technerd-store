import { Link } from "react-router";

const BottomNavbar = () => {
  return (
    <nav className="hidden md:flex font-roboto bg-darkwhite text-lightgrey py-3 md:py-4">
      <div className="flex items-center mx-auto gap-46">
        <Link>Oferta dla Ciebie</Link>
        <Link>Promocje</Link>
        <Link>Status zamówienia</Link>
        <Link>Gwarancje</Link>
        <Link>Usługi dodatkowe</Link>
      </div>
    </nav>
  );
};

export default BottomNavbar;
