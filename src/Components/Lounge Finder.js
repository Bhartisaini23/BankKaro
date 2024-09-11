import React from 'react';
import LoungeCard from './LoungeCard';

import lounge1 from '../images/lounge1.png';
import lounge2 from '../images/lounge2.png';
import lounge3 from '../images/lounge3.png';

const LoungeFinder = () => {
  return (
    <section className="text-center text-white py-16 bg-black">
      <h2 className="text-4xl font-bold mb-8">Lounge Finder</h2>
      <p className="text-lg mb-8">
        Check which lounges you can access at a click!
      </p>
      <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg mb-12">
        Try Lounge Finder
      </button>
      <div className="flex justify-center space-x-8">
        <LoungeCard image src='Ind1.png' title="Indra Gandhi Int'l" location="IGI • New Delhi" />
        <LoungeCard image src='Ind2.png' title="Indra Gandhi Int'l" location="IGI • New Delhi" />
        <LoungeCard image src='Ind3.png' title="Indra Gandhi Int'l" location="IGI • New Delhi" />
      </div>
    </section>
  );
};

export default LoungeFinder;
