import React from 'react';
import './Member.scss';
import MemberSide from './MemberSide/MemberSide';
import SignUpForm from './SignUpForm/SignUpForm';

const Member = () => {
  return (
    <div className="member-wrapper">
      <MemberSide />
      <SignUpForm />
    </div>
  );
};

export default Member;
