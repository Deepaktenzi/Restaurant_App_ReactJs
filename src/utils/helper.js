export function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}

export function deliveryTimeSort(restaurants) {
  function compare(a, b) {
    if (a.data.deliveryTime < b.data.deliveryTime) {
      return -1;
    }
    if (a.data.deliveryTime > b.data.deliveryTime) {
      return 1;
    }
    return 0;
  }

  const ratingData = restaurants.sort(compare);
  return ratingData;
}

export function ratingSort(resturants) {
  function compare(a, b) {
    let x = parseFloat(a.data.avgRating);

    let y = parseFloat(b.data.avgRating);

    if (isNaN(x)) {
      x = 0;
    }
    if (isNaN(y)) {
      y = 0;
    }
    console.log(x);
    if (x > y) {
      return -1;
    }
    if (x < y) {
      return 1;
    } else {
      return 0;
    }
  }
  const data = resturants.sort(compare);
  return data;
}

export function lowToHighSort(resturants) {
  const data = resturants.sort((a, b) => {
    return a.data.costForTwo - b.data.costForTwo;
  });

  return data;
}

export function HighToLowSort(resturants) {
  const data = resturants.sort((a, b) => {
    return b.data.costForTwo - a.data.costForTwo;
  });

  return data;
}
