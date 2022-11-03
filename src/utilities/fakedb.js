const addToDb = (name) => {

    let shoppingCart = {};

    const quantity = shoppingCart[name];
    if (quantity) {

        const newQuantity = quantity + 1;
        shoppingCart[name] = newQuantity;
        // localStorage.setItem(name, newQuantity);
    }
    else {
        shoppingCart[name] = 1;

        // localStorage.setItem(name, 1);
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}
export { addToDb };