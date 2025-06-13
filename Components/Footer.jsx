import { Linkedin, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#073C21] text-white px-6 md:px-20 py-10 text-sm">
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* Logo & Description */}
        <div className="flex-1">
          <p className="max-w-xs leading-relaxed">
            Our Company Provides Environmentally Sustainable Solid Green Fuels And Innovative Solutions Specifically Designed For Industrial Boilers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="text-base font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/" onClick={scrollToTop} className="hover:text-green-300">Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop} className="hover:text-green-300">About Us</Link></li>
            <li><Link to="/products" onClick={scrollToTop} className="hover:text-green-300">Products</Link></li>
            <li><Link to="/contact" onClick={scrollToTop} className="hover:text-green-300">Contact Us</Link></li>
            <li><Link to="/sustainability" onClick={scrollToTop} className="hover:text-green-300">Sustainability</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div className="flex-1">
          <h3 className="text-base font-semibold mb-3">Our Products</h3>
          <ul className="space-y-1">
            <li><Link to="/products/briquettes" onClick={scrollToTop} className="hover:text-green-300">Briquettes</Link></li>
            <li><Link to="/products/pellets" onClick={scrollToTop} className="hover:text-green-300">Pellets</Link></li>
            <li><Link to="/products/wood-chips" onClick={scrollToTop} className="hover:text-green-300">Wood Chips</Link></li>
            <li><Link to="/products/coffee-nut-shell" onClick={scrollToTop} className="hover:text-green-300">Coffee Nut Shell</Link></li>
            <li><Link to="/products/baggasse-dust" onClick={scrollToTop} className="hover:text-green-300">Bagasse Dust</Link></li>
            <li><Link to="/products/saw-dust" onClick={scrollToTop} className="hover:text-green-300">Sawdust</Link></li>
            <li><Link to="/products/palm-nut-shell" onClick={scrollToTop} className="hover:text-green-300">Palm Nut Shell</Link></li>
            <li><Link to="/products/rice-husk" onClick={scrollToTop} className="hover:text-green-300">Rice Husk</Link></li>
            <li><Link to="/products/cashew-nut-shell" onClick={scrollToTop} className="hover:text-green-300">Cashew Nut Shell</Link></li>
            <li><Link to="/products/corn-shank" onClick={scrollToTop} className="hover:text-green-300">Corn Shank</Link></li>

          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="text-base font-semibold mb-3">Business Inquiries</h3>
          <ul className="space-y-1">
          <li><a href="mailto:info@sreeneegreen.in">ssrao@sreeneegreen.in</a></li>
          <li><a href="mailto:info@sreeneegreen.in">info@sreeneegreen.in</a></li>
          <li><a href="tel:+919381124568">+91-93811-24568</a></li>
<li><a href="tel:+919441109841">+91-94411-09841</a></li>
<li><a href="tel:+919982047999">+91-99820-47999</a></li>
<li><a href="tel:+919440628656">+91-94406-28656</a></li>

          </ul>
        </div>

        {/* Address */}
        <div className="flex-1">
          <h3 className="text-base font-semibold mb-3">Address</h3>
          <p className="leading-relaxed text-base mt-3 mb-3">
          Office Address
          </p>

          <p className="leading-relaxed">
          P No. 15, 1st Floor, Lake View Enclave, Miyapur, Serilingampally, K.V. Rangareddy, Telangana, India, 500049          </p>
          <p className="leading-relaxed text-base mt-3 mb-3">
          Plant Address
          </p>
          <p className="leading-relaxed">
          HFP2+HMG Basuragadi Village, Hyderabad, Telangana 500043</p>


        </div>

      </div>

      {/* Divider & Social */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-white/20 pt-6">
        <p className="text-center text-xs">
          Copyright © 2025 All Rights Reserved With Sreenee Green Pvt Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
