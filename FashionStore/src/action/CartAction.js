export const TYPE = {
  ADD_ITEM:"ADD_ITEM",
  DELETE_ITEM:"DELETE_ITEM",
  CHANGEQUANTITY:"CHANGEQUANTITY",
}

export const addToCart = (params)=>(
{
  type: TYPE.ADD_ITEM,
  data: params
}
);

export const deleteItem = (item)=>(
{
  type: TYPE.DELETE_ITEM,
  item: item
}
);


  export const changeQuantity = (menthod,key)=>(
 {
      type: TYPE.CHANGEQUANTITY,
      menthod:menthod,
      key:key
}
);
     
