import React, { useState } from 'react';
import './List.scss';

const TypeList = () => {
  const [furnitureListVisible, setFurnitureListVisible] = useState(false);
  const [lightsListVisible, setLightsListVisible] = useState(false);

  return (
    <ul className="menu-list">
      <li
        className="menu-items"
        onClick={() => {
          setFurnitureListVisible(!furnitureListVisible);
        }}
      >
        가구
      </li>
      {furnitureListVisible && <FurnitureList />}
      <li
        className="menu-items"
        onClick={() => {
          setLightsListVisible(!lightsListVisible);
        }}
      >
        조명
      </li>
      {lightsListVisible && <LightsList />}
    </ul>
  );
};

export default TypeList;

const FurnitureList = () => {
  return (
    <ul className="type-list">
      <li className="type-list-items">침대</li>
      <li className="type-list-items">소파</li>
    </ul>
  );
};

const LightsList = () => {
  return (
    <ul className="type-list">
      <li className="type-list-items">일반조명</li>
    </ul>
  );
};
