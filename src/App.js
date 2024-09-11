import React from 'react';
import Header from './Components/Header';
import CreditCardSection from './Components/CreditCardSection';
import CompareCardsSection from './components/CompareCardsSection';
import LoungeFinder from './components/LoungeFinder';
import ImpactInAction from './ImpactInAction'; // Import the ImpactInAction component
import Footer from './Footer'; // Import the Footer component

function App() {
  return (
    <div className="App">
      {/* Header Component */}
      <Header />

      {/* Credit Card Section Component */}
      <CreditCardSection />

      {/* Compare Cards Section Component */}
      <CompareCardsSection />

      {/* Lounge Finder Section Component */}
      <LoungeFinder />

      {/* Impact In Action Component */}
      <ImpactInAction />

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
