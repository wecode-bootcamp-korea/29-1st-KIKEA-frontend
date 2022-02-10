import React from 'react';
import SUGGESTIONDATA from '../Mock/SuggestionData';
import './ProductSuggestion.scss';

const ProductSuggestion = () => {
  return (
    <div className="product-suggestion-container">
      <div className="suggestion-description">
        <div>
          <h2 className="suggestion-title">거실이 침실로 변신할 때</h2>
          <span className="suggestion-content">
            낮에는 여러 활동을 하고 저녁에는 차분한 분위기가 필요한, 24시간
            사용하는 방이 있나요? 편안한 침대로 쉽게 변신할 수 있는 소파베드를
            두면 아주 유용해요. 암막커튼, 아늑한 분위기의 텍스타일과 따듯한
            조명을 더하면 언제라도 기분 좋게 잠들 수 있죠.
          </span>
        </div>
        <div className="btn-container">
          <button className="see-details-btn">모든 상품 보러가기</button>
        </div>
      </div>
      <div className="suggestion-img-container">
        {SUGGESTIONDATA.map(KIKEA => (
          <div className="suggestion-img-wrapper" key={KIKEA.id}>
            <img className="suggestion-img" src={KIKEA.img} alt={KIKEA.alt} />
          </div>
        ))}
      </div>
      <div className="warranty">
        <div className="warranty-title">10년 품질보증</div>
        <div className="warranty-content">
          IKEA는 소파의 프레임 및 쿠션의 소재와 제작 결함에 대해 10년 품질보증을
          제공합니다. STOCKHOLM 스톡홀름 소파의 경우 25년 품질보증이 적용됩니다.
        </div>
        <div className="warranty-btn-container">
          <button className="warranty-btn">
            품질보증에 대해 자세히 알아보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSuggestion;
