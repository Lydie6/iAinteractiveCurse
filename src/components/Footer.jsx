import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne CONTINUATIV */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-accent-yellow pb-2">CONTINUATIV</h2>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Courriel</li>
              <li className="hover:text-white cursor-pointer">Challenges</li>
              <li className="hover:text-white cursor-pointer">Games</li>
              <li className="hover:text-white cursor-pointer">Certifications</li>
            </ul>
          </div>

          {/* Colonne CONTINUTY */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-accent-yellow pb-2">CONTINUTY</h2>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Events</li>
              <li className="hover:text-white cursor-pointer">Forum</li>
              <li className="hover:text-white cursor-pointer">Discord</li>
              <li className="hover:text-white cursor-pointer">Monitoring</li>
            </ul>
          </div>

          {/* Colonne CONTROT */}
          <div>
            <h2 className="text-xl font-bold mb-4  text-accent-yellow pb-2">CONTROT</h2>
            <ul className="space-y-2">
              <li>Université de Blaise</li>
              <li>00000 Blaise, Algérie</li>
              <li className="hover:text-white cursor-pointer">contact@meixman-bajaite.dz</li>
              <li>+213 34 XX XX XX</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-gray-700">
          <p>© {new Date().getFullYear()} LEARNING. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;