export function filterdata(searchText, restaurants) {
  const filterdata = restaurants.filter((restaurant) => {
    restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase());
  });
  return filterdata;
}
