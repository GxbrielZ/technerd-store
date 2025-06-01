import { Link } from 'react-router';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-18 bg-primary text-darkwhite pt-12 pb-24 px-4 sm:px-6 lg:px-32">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg mb-4">OBSŁUGA KLIENTA</h4>
          <ul>
            <li className="mb-2"><Link to="#" className="hover:underline">Status zamówienia</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Centrum pomocy</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Reklamacje</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Serwis</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Zwroty</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Odbiór zużytego sprzętu</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Zgłoś błąd</Link></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg mb-4">INFORMACJE</h4>
          <ul>
            <li className="mb-2"><Link to="#" className="hover:underline">Praca</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Centrum informacyjne</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">O firmie</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Regulamin</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Newsletter</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Dla mediów</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Program partnerski</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Informacje prawne</Link></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg mb-4">ZAKUPY</h4>
          <ul>
            <li className="mb-2"><Link to="#" className="hover:underline">Producenci</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Raty</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Leasing</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Karta podarunkowa</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Ubezpieczenia</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Tax Free</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Montaż</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Usługi dodatkowe</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Wynajem</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Opcje płatności</Link></li>
            <li className="mb-2"><Link to="#" className="hover:underline">Promocje</Link></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg mb-4">KONTAKT</h4>
          <div className="flex items-center justify-center md:justify-start mb-2">
            <FaPhone className="mr-2" />
            <span>Infolinia: 777-888-000</span>
          </div>
          <div className="flex items-center justify-center md:justify-start mb-4">
            <FaEnvelope className="mr-2" />
            <span>E-mail: technerd@kontakt.pl</span>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#ededed] duration-300"><FaFacebook /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#ededed] duration-300"><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#ededed] duration-300"><FaLinkedin /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#ededed] duration-300"><FaYoutube /></a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#ededed] duration-300"><FaTiktok /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
