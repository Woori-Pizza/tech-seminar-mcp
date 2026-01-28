import React from 'react';
import LinkCard from './LinkCard';
import Heading from './Heading';
import { LINK_CARDS } from '../data/mockData';

const LinkCardList = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[980px]">
        <Heading className="mb-8">서비스</Heading>
      </div>
      <div className="w-[980px] flex gap-5">
        {LINK_CARDS.map((card) => (
          <div
            key={card.id}
            className="w-[306px] h-[300px] border border-[#D8D8D8] p-[1px]"
          >
            <LinkCard
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkCardList;
