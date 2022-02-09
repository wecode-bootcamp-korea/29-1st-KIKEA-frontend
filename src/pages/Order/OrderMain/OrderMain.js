import React from 'react';

const OrderMain = () => {
  return (
    <div className="ordermain">
      <div className="ordermain-container">
        <div className="order-list">
          <span>1</span>
        </div>
        <div className="order-text">
          <p>배송 방법</p>
          <p>주소를 입력하세요</p>
          <div className="information">
            <div className="input-box">
              <input
                className="member-email"
                type="text"
                name="email"
                onChange={changeInfo}
                placeholder="  "
                required
                autoComplete="off"
              />
              <label className="form-label">
                <span>이메일</span>
              </label>
            </div>
            <div className="input-box">
              <input
                className="member-password"
                type="password"
                name="password"
                placeholder="  "
                onChange={changeInfo}
                required
              />
              <label className="form-label">
                <span>비밀번호</span>
              </label>
            </div>
            <div className="input-box">
              <input
                className="member-name"
                type="text"
                name="name"
                placeholder="  "
                onChange={changeInfo}
                required
                autoComplete="off"
              />
              <label className="form-label">
                <span>이름</span>
              </label>
            </div>
            <div className="input-box">
              <input
                className="member-phoneNumber"
                type="text"
                name="phoneNumber"
                placeholder="  "
                onChange={changeInfo}
                required
                autoComplete="off"
              />
              <label className="form-label">
                <span>휴대전화</span>
              </label>
            </div>
            <div className="input-box">
              <input
                className="member-address"
                type="text"
                name="address"
                placeholder="  "
                onChange={changeInfo}
                required
                autoComplete="off"
              />
              <label className="form-label">
                <span>주소</span>
              </label>
            </div>
            <button className="signupButton" onClick={signUp}>
              KIKEA의 가족이 되기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMain;
