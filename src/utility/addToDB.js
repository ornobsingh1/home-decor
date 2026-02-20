const getStoredProduct = () => {
  const storedProductSTR = localStorage.getItem("wishlist");

  if (storedProductSTR) {
    const storedProductData = JSON.parse(storedProductSTR);
    return storedProductData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedProductData = getStoredProduct();

  if (storedProductData.includes(id)) {
    alert("Id all ready exist");
  } else {
    storedProductData.push(id);

    const data = JSON.stringify(storedProductData);
    localStorage.setItem("wishlist", data);
  }
};

export { addToStoredDB, getStoredProduct };
