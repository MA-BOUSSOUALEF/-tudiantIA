import React from 'react';

const SpellChecker = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">
        Correcteur Orthographique
      </h1>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <textarea
          className="w-full h-48 p-4 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:border-gray-600"
          placeholder="Entrez votre texte ici..."
        />
        <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity">
          Corriger
        </button>
      </div>
    </div>
  );
};

export default SpellChecker;