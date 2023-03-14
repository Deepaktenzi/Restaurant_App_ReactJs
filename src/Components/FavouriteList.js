import React, { useState, useContext } from 'react';
import FavContext from '../utils/FavContext';

import { Link } from 'react-router-dom';
import FavCard from './FavCard';
import Nodatafound from './Nodatfound';
const FavouriteList = () => {
  const { card } = useContext(FavContext);

  return (
    <div className="favourite-list mt-3 ">
      {card.length == 0 ? (
        <Nodatafound />
      ) : (
        card.map((data) => {
          return (
            <Link to={'/resturant/' + data.id}>
              <FavCard {...data} key={data.id} />
            </Link>
          );
        })
      )}
    </div>
  );
};

export default FavouriteList;
