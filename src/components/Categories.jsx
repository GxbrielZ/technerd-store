import {
  Tv, WashingMachine, MonitorSmartphone, Smartphone,
  Camera, Gamepad2, Bike, Dumbbell, Home, Wrench,
  PawPrint, PackageOpen, ShoppingCart, Tag
} from "lucide-react";

const menuItems = [
  { label: "TV, Audio i RTV", icon: <Tv /> },
  { label: "AGD", icon: <WashingMachine /> },
  { label: "AGD do zabudowy", icon: <MonitorSmartphone /> },
  { label: "AGD małe", icon: <PackageOpen /> },
  { label: "Komputery i tablety", icon: <MonitorSmartphone /> },
  { label: "Smartfony i zegarki", icon: <Smartphone /> },
  { label: "Foto i kamery", icon: <Camera /> },
  { label: "Gaming", icon: <Gamepad2 /> },
  { label: "Rowery i hulajnogi", icon: <Bike /> },
  { label: "Fitness i sport", icon: <Dumbbell /> },
  { label: "Dom", icon: <Home /> },
  { label: "Warsztat i ogród", icon: <Wrench /> },
  { label: "Artykuły dla zwierząt", icon: <PawPrint /> },
  { label: "Zabawki i LEGO", icon: <PackageOpen /> },
  { label: "Supermarket", icon: <ShoppingCart /> },
  { label: "Outlet", icon: <Tag /> },
];

const Categories = () => {
  return (
    <div className="bg-darkwhite shadow p-4 rounded-xl text-lightgrey">
      <div className="flex border-b border-lightgrey mb-4">
        <button className="font-bold border-b-2 border-lightgrey pb-2 px-4 cursor-pointer">
          Produkty
        </button>
        <button className="pb-2 px-4">
          Usługi
        </button>
      </div>
      <ul className="space-y-3">
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center gap-3 hover:text-black cursor-pointer">
            <span className="w-5 h-5">{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
