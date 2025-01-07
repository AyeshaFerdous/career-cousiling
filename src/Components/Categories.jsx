import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        <div role="tablist" className="tabs tabs-boxed tabs-lg w-11/12 mx-auto px-5 md:px-10">
      {categories.map(category => (
      <NavLink key={category.category}
       to={`/category/${category.category}`}
       role="tab"
       className={({isActive}) => `tab text-2xl font-semibold  ${isActive?'tab-active bg-gradient-to-r from-orange-400 to-orange-200' : ''}`}>
        {category.category}
      </NavLink>
      
    ))}
     
    </div>
    );
};

export default Categories;