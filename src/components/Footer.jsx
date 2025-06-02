import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="bg-[url('/imgs/Group%2044.png')] bg-cover bg-center md:bg-left bg-no-repeat w-full pt-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 flex flex-col md:flex-row gap-10 md:gap-14 lg:gap-20 items-center md:items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <img
              src="/imgs/logo.png"
              alt="Logo"
              className="rounded-2xl mb-10 flex justify-center items-center w-[220px] h-[220px] md:w-[250px] md:h-[250px] object-contain"
            />
          </div>

          {/* Links */}
          <div className="flex flex-1 justify-center md:justify-evenly flex-wrap text-center md:text-left gap-10 sm:gap-12 md:gap-14 lg:gap-20">
            {/* About */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <Link to="/how-it-work">How it works</Link>
                </li>
                <li>
                  <Link to="/become-a-chef">Become a Chef</Link>
                </li>
                <li>
                  <Link to="">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>

            {/* Menu */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Menu</h3>
              <ul className="space-y-4 text-gray-700">
                <li>Grilled</li>
                <li>Chicken</li>
                <li>Pasta</li>
                <li>BBQ</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-700 mb-4">Get daily new dishes updates</p>
              <div className="flex w-full max-w-sm sm:max-w-md mb-4 px-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 flex-grow rounded-l-full border border-gray-300 min-w-0"
                />
                <button className="bg-[#006A5A] text-white px-4 rounded-r-full hover:bg-[#006a5ade] hover:cursor-pointer">
                  Subscribe
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt="Facebook"
                    className="w-8 h-8"
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    alt="Instagram"
                    className="w-8 h-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm py-4">
        © 2025 MaclApp. All rights reserved.
      </div>
    </>
  );
};
