import React from 'react';
import './OrderMain.scss';

const OrderMain = ({ inputState, changeInfo }) => {
  return (
    <div className="ordermain">
      <div className="ordermain-container">
        <div className="information">
          <p> 1. 주문자 정보</p>
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
        </div>
      </div>
    </div>
  );
};

export default OrderMain;
