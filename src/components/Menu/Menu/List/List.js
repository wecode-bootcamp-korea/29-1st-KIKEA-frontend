import React, { useEffect, useState } from 'react';
import { END_POINT } from '../../.../../../../config';
import { useNavigate } from 'react-router-dom';
import './List.scss';

const TypeList = closeMenu => {
  const [category, setCategory] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    fetch(END_POINT.category)
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

  const goType = (id, object) => {
    // closeMenu();
    console.log(
      object.target.parentNode.parentNode.parentNode.parentNode.parentNode
    );
    object.target.parentNode.parentNode.parentNode.parentNode.parentNode.style.display =
      'none';
    navigate(`/type?subcategory=${id}`);
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
                    onClick={object => goType(type.id, object)}
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
