import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './List.scss';

const TypeList = () => {
  const [category, setCategory] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://10.58.5.10:8000/products/category')
      .then(response => response.json())
      .then(result => {
        setCategory(result.categories);
      });
  }, []);

  const openType = object => {
    object.target.nextElementSibling.style.display =
      object.target.nextElementSibling.style.display === 'block'
        ? 'none'
        : 'block';
  };

  const goType = id => {
    console.log('digh');
    console.log(id);
    navigate(`/products?subcategory=${id}`);
  };

  return (
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
                  <li
                    className="type-list-items"
                    key={type.id}
                    onClick={() => goType(type.id)}
                  >
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
