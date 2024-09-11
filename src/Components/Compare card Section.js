import React from 'react';
import cardBackground from '../images/compare-cards-background.png';
import creditCard1 from '../images/credit-card1.png';
import creditCard2 from '../images/credit-card2.png';
import creditCard3 from '../images/credit-card3.png';

const CompareCardsSection = () => {
  return (
    <section className="text-center text-white py-16 bg-cover" style={{ backgroundImage: `url(${cardBackground})` }}>
      <h1 className="text-5xl font-bold mb-8">Compare Cards</h1>
      <p className="text-lg mb-12">
        Uncover hidden benefits and find the perfect card for your financial goals.
      </p>
      <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg">
        Compare Cards
      </button>
      <div className="flex justify-center mt-12 space-x-8">
        <img src={creditCard1} alt="Credit Card 1" className="w-1/4 shadow-lg"/>
        <img src={creditCard2} alt="Credit Card 2" className="w-1/4 shadow-lg"/>
        <img src={creditCard3} alt="Credit Card 3" className="w-1/4 shadow-lg"/>
      </div>
    </section>
  );
};

export default CompareCardsSection;
