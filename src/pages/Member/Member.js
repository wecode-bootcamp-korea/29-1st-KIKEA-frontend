import React from 'react';
import './Member.scss';
import MemberSide from './MemberSide/MemberSide';
import SignUpForm from './SignUpForm/SignUpForm';

const Member = () => {
  return (
    <div className="member">
      <MemberSide />
      <SignUpForm />
    </div>
  );
};

export default Member;
