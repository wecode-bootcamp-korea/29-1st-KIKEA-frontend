import React, { useState } from 'react';
import './SignUpForm.scss';

const SignUpForm = () => {
  const [inputState, setInputState] = useState({
    email: '',
    password: '',
    name: '',
    address: '',
    phoneNumber: '',
  });

  const [radioGroup, setRadioGroup] = useState({
    isFamily: false,
    isNotFamily: false,
  });

  const changeRadio = event => {
    let obj = {};
    obj[event.target.value] = event.target.checked;
    console.log(obj);
    setRadioGroup(obj);
  };

  const changeInfo = e => {
    const { name, value } = e.target;
    setInputState({
      ...inputState,
      [name]: value,
    });
  };

  const signUp = () => {
    fetch('http://10.58.1.126:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: inputState.email,
        password: inputState.password,
        name: inputState.name,
        //address: inputState.address,
        phone_number: inputState.phoneNumber,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(result => result.access_token);
  };
  return (
    <div className="signupform-wrapper">
      <p>KIKEA Family에 가입하시겠어요?</p>
      <div className="signupform-radio">
        <label htmlFor="asdf">
          <input
            type="radio"
            value="isFamily"
            name="family"
            onChange={changeRadio}
            checked={radioGroup.isFamily}
          />
          예, IKEA Family의 다양한 혜택 및 할인을 즐기고 싶습니다! IKEA Family
          혜택
        </label>
        <br />
        <label htmlFor="asdf">
          <input
            type="radio"
            value="isNotFamily"
            name="notFamily"
            onChange={changeRadio}
            checked={radioGroup.isNotFamily}
          />
          아니요, 추가 혜택 없이 온라인 몰만 가입하고 싶습니다. IKEA Family 혜택
        </label>
      </div>
      <div className="information">
        <input
          className="member-email"
          type="text"
          name="email"
          placeholder="이메일"
          onChange={changeInfo}
        />
        <input
          className="member-password"
          type="password"
          name="password"
          placeholder="패스워드"
          onChange={changeInfo}
        />
        <input
          className="member-name"
          type="text"
          name="name"
          placeholder="이름"
          onChange={changeInfo}
        />
        <input
          className="member-phoneNumber"
          type="text"
          name="phoneNumber"
          placeholder="휴대전화"
          onChange={changeInfo}
        />
        <input
          className="member-address"
          type="text"
          name="address"
          placeholder="주소"
          onChange={changeInfo}
        />
        <button onClick={signUp}>회원가입</button>
      </div>
    </div>
  );
};

export default SignUpForm;
