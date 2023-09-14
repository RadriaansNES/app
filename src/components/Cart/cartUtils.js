export const addItemToCart = (addToCart, setAlertMessage, combo) => {
    addToCart({
      id: combo.id,
      name: combo.name,
      quantity: 1,
      description: combo.cdescrip,
      price: combo.price,
    });
  
    setAlertMessage(`${combo.name} successfully added to cart!`);
  };