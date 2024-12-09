// src/app/layout.js

import 'src/app/styles/globals.css';

export default function Layout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 font-sans antialiased">
        <div className="container mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  );
}