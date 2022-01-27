import React from 'react';
import './ProductSuggestion.scss';

const ProductSuggestion = () => {
  return (
    <>
      <div className="product-suggestion-container">
        <div className="suggestion-description">
          <h1 className="suggestion-title">거실이 침실로 변신할 때</h1>
          <span className="suggestion-content">
            낮에는 여러 활동을 하고 저녁에는 차분한 분위기가 필요한, 24시간
            사용하는 방이 있나요? 편안한 침대로 쉽게 변신할 수 있는 소파베드를
            두면 아주 유용해요. 암막커튼, 아늑한 분위기의 텍스타일과 따듯한
            조명을 더하면 언제라도 기분 좋게 잠들 수 있죠.
          </span>
          <span className="see-details-btn">모든 소파베드 보러가기</span>
        </div>
        <div className="suggestion-img-container">
          {SUGGESTIONDATA.map(KIKEA => (
            <img
              className="suggestion-img"
              key={KIKEA.id}
              src={KIKEA.img}
              alt={KIKEA.alt}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSuggestion;

const SUGGESTIONDATA = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'KIKEAsuggestion',
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'KIKEAsuggestion',
  },
];
