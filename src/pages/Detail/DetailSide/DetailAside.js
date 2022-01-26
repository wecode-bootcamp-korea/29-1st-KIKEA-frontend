import React from 'react';

const DetailAside = () => {
  return (
    <aside className="add-item">
      <div className="aside-top">
        <p className="add-item-comment">
          TÄLLBYN 텔뷘 제품이 장바구니에 추가되었습니다.
        </p>
        <button className="go-bag">장바구니로 가기</button>
      </div>
    </aside>
  );
};

export default DetailAside;
