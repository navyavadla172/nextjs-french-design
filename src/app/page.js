'use client'; // This line is required for using React hooks like useState

import { useState } from 'react';  // Import useState hook
import WelcomeMessage from '@components/WelcomeMessage';  // Adjust the path if necessary

export default function Home() {
  const [messageVisible, setMessageVisible] = useState(false); // State to manage visibility of the text

  // Function to toggle visibility of the text
  const handleButtonClick = () => {
    setMessageVisible(!messageVisible); // Toggle the value of messageVisible
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <WelcomeMessage />
        </div>
        <div className="flex-1 bg-gray-200 p-6 rounded-md shadow-md">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4">
            Bienvenue dans notre site
          </h2>
          <p>
            Nous vous offrons une expérience enrichissante sur ce site.
          </p>
          
          {/* Button to toggle text visibility */}
          <button
            onClick={handleButtonClick}
            className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cliquez ici pour plus de détails
          </button>

          {/* Conditionally render the text when messageVisible is true */}
          {messageVisible && (
            <div className="mt-4 text-lg text-center text-green-600">
              <h3 className="font-bold text-xl mb-2">Découvrons Next.js ensemble</h3>
              <p>
                Next.js est un framework basé sur React qui permet de créer des applications web rapides et robustes. 
                Il simplifie le développement en offrant des outils puissants tels que le rendu côté serveur (SSR), la création 
                de pages statiques (SSG), et une gestion automatique du routage.
              </p>
              <p className="mt-2">
                Voici quelques bénéfices clés de Next.js :
              </p>
              <ul className="mt-4 list-disc pl-6">
                <li>Amélioration des performances grâce au rendu côté serveur (SSR)</li>
                <li>Création de pages statiques (SSG) optimisée pour le référencement SEO</li>
                <li>Système de routage automatique sans configuration complexe</li>
                <li>Optimisation des images et des ressources de manière automatisée</li>
                <li>Déploiement facile avec Vercel</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
