import React, { useEffect, useState } from 'react';
import './List.scss';

const TypeList = () => {
  const [furnitureListVisible, setFurnitureListVisible] = useState(false);
  const [lightsListVisible, setLightsListVisible] = useState(false);
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetch('http://10.58.5.10:8000/products/category')
      .then(response => response.json())
      .then(result => {
        setCategory(result.categories);
      });
  }, []);

  const openType = object => {
    console.log(object);
  };

  return (
    // <ul className="menu-list">
    //   <li
    //     className="menu-items"
    //     onClick={() => {
    //       setFurnitureListVisible(!furnitureListVisible);
    //     }}
    //   >
    //     가구
    //   </li>
    //   {furnitureListVisible && <FurnitureList />}
    //   <li
    //     className="menu-items"
    //     onClick={() => {
    //       setLightsListVisible(!lightsListVisible);
    //     }}
    //   >
    //     조명
    //   </li>
    //   {lightsListVisible && <LightsList />}
    // </ul>

    <ul className="menu-list">
      {category &&
        category.map(category => (
          <>
            <li
              key={category.id}
              className="menu-items"
              onClick={object => {
                openType(object);
              }}
            >
              {category.name}
            </li>
            <ul className="type-list">
              {category.subcategory_list &&
                category.subcategory_list.map(type => (
                  <li className="type-list-items" key={type.id}>
                    {type.name}
                  </li>
                ))}
            </ul>
          </>
        ))}
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
