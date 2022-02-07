import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.scss';

const SignUpForm = () => {
  const [inputState, setInputState] = useState({
    email: '',
    password: '',
    name: '',
    address: '',
    phone_number: '',
  });

  const navigate = useNavigate();

  const [radioGroup, setRadioGroup] = useState({
    isFamily: false,
    isNotFamily: false,
  });

  const changeRadio = ({ target }) => {
    let obj = { [target.value]: target.checked };
    setRadioGroup(obj);
  };

  const changeInfo = e => {
    const { name, value } = e.target;
    setInputState({
      ...inputState,
      [name]: value,
    });
  };

  const isValid = () => {
    if (!inputState.email.includes('@'))
      return alert('이메일 형식이 맞지 않습니다.');
    let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!reg.test(inputState.password))
      return alert(
        '비밀번호는 하나 이상의 문자, 숫자, 특수 문자가 필요합니다.'
      );
    if (!inputState.name && !inputState.phone_number && !inputState.address)
      return alert('정보를 입력하세요.');
    return true;
  };
  // catch(), 리절트 이용할 방법 생각
  const signUp = () => {
    if (isValid()) {
      fetch('http://10.58.5.10:8000/users/signup', {
        method: 'POST',
        body: JSON.stringify({ ...inputState }),
      })
        .then(res => res.json())
        .then(console.log);
    }
  };

  return (
    <div className="signupform">
      <p className="kikeafamily-title">KIKEA Family에 가입하시겠어요?</p>
      <div className="signupform-radio">
        <input
          type="radio"
          value="isFamily"
          name="family"
          onChange={changeRadio}
          checked={radioGroup.isFamily}
          className="radioBtn"
        />
        &nbsp;&nbsp;
        <p>예, IKEA Family의 다양한 혜택 및 할인을 즐기고 싶습니다! </p>
        <p>IKEA Family 혜택</p>
      </div>
      <div className="signupform-radio">
        <br />
        <input
          type="radio"
          value="isNotFamily"
          name="notFamily"
          onChange={changeRadio}
          checked={radioGroup.isNotFamily}
          className="radioBtn"
        />
        &nbsp;&nbsp;
        <p>아니요, 추가 혜택 없이 온라인 몰만 가입하고 싶습니다. </p>
        <p>IKEA Online shop 혜택</p>
      </div>
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
            name="phone_number"
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
  );
};

export default SignUpForm;
