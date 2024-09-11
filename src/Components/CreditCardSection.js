import React from 'react';
import CreditCard from './CreditCard';

import hdfcRegalia from '../images/hdfc-regalia.png';
import axisBankAce from '../images/axis-bank-ace.png';
import indianOilHdfc from '../images/indian-oil-hdfc.png';

import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

const CreditCardSection = () => {
  return (
    <section className="bg-gray-900 text-white p-8">
      {/* Main Content Area */}
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-4">
          We find the Best <br /> Credit Cards for You
        </h1>
        <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg mt-4">
          Find A Credit Card
        </button>
      </div>

      {/* Card Image */}
      <div className="flex justify-center mt-12">
        <img
          src="CardImages.png"
          alt="Credit Card"
          className="w-1/3 shadow-lg"
        />
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <img
            src={icon1}
            alt="Personalised Offers"
            className="w-12 h-12 mb-4"
          />
          <h3 className="font-bold text-lg">Personalised Offers</h3>
          <p className="text-gray-400 text-center mt-2">
            Find best Credit Cards based <br /> on your spend pattern
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <img
            src={icon2}
            alt="Earn Rewards"
            className="w-12 h-12 mb-4"
          />
          <h3 className="font-bold text-lg">Earn Rewards</h3>
          <p className="text-gray-400 text-center mt-2">
            Earn Rewards for every <br /> successful Credit Card approval
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <img
            src={icon3}
            alt="Compare Cards"
            className="w-12 h-12 mb-4"
          />
          <h3 className="font-bold text-lg">Compare Cards</h3>
          <p className="text-gray-400 text-center mt-2">
            Compare your existing Cards <br /> with the best in the industry
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center">
          <img
            src={icon4}
            alt="Max Benefits"
            className="w-12 h-12 mb-4"
          />
          <h3 className="font-bold text-lg">Max Benefits</h3>
          <p className="text-gray-400 text-center mt-2">
            Get maximum benefits <br /> from your Credit Cards
          </p>
        </div>
      </div>

      {/* Popular Credit Cards Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Popular credit cards for every dedicated category
        </h2>
        <div className="tabs flex justify-center space-x-4 mb-8">
          <button className="tab bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded">Featured</button>
          <button className="tab bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded">Cashback</button>
          <button className="tab bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded">Travel</button>
          <button className="tab bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded">Online Shopping</button>
        </div>
        <div className="credit-cards-container flex justify-center flex-wrap gap-8">
          <CreditCard 
            image={hdfcRegalia} 
            title="HDFC Regalia" 
            description="5% Cashback" 
            offer="Valid on online shopping" 
          />
          <CreditCard 
            image={axisBankAce} 
            title="Axis Bank Ace Credit Card" 
            description="50% Cashback" 
            offer="Valid on online and offline purchases" 
          />
          <CreditCard 
            image={indianOilHdfc} 
            title="Indian Oil HDFC Credit Card" 
            description="50% Cashback" 
            offer="Valid on fuel purchases" 
          />
        </div>
      </div>
    </section>
  );
};

export default CreditCardSection;
