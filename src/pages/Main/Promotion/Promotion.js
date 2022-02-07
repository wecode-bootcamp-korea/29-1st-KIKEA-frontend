import React from 'react';
import './Promotion.scss';
import PromotionCard from './PromotionCard/PromotionCard';

const Promotion = () => {
  return (
    <div className="promotion">
      <span className="promotion-title">진행중인 프로모션</span>
      <div className="promotion-item">
        {DATA.map(card => (
          <PromotionCard
            img={card.img}
            description={card.description}
            key={card.id}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
};

const DATA = [
  {
    id: 1,
    title: '새해에도 KIKEA!!!!!!',
    description: '우리는 KIKEA!!!!!',
    img: 'https://images.unsplash.com/photo-1637075223191-21697ec6d0ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGlrZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    title: '산뜻한 분위기가 맞나요?',
    description:
      '주는 이와 받는 이 모두에게 기쁨을 주는 선물! IKEA 키프트 가드 구매하고 감사카드 받으세요',
    img: 'https://images.unsplash.com/photo-1567711601167-cd0efb1f8a99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aWtlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    title: '새 삶과 욕실 공간?',
    description:
      '싱그러운 분위기를 주는 신제품으로 우리 집을 새삶스럽게 변화시켜보세요! 한 해의 시작이 더 활기차고 생기 있어질 거예요.',
    img: 'https://images.unsplash.com/photo-1628752660419-ad1c751abe72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aWtlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
];

export default Promotion;
