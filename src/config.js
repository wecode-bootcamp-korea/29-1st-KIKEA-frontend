const BASE_URL = 'http://10.58.7.174:8000/';

export const END_POINT = {
  recommendItem: `${BASE_URL}products/product?type=1`,
  category: `${BASE_URL}products/category`,
  allItem: `${BASE_URL}products`,
  selectCategory: `${BASE_URL}products?category=`,
  signIn: `${BASE_URL}users/signin`,
  signUp: `${BASE_URL}users/signup`,
  selectDetail: `${BASE_URL}products?product=`,
};