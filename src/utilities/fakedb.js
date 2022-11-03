const addToDb = (name) => {
    const quantity = localStorage.getItem(name);
    if (quantity) {
        console.log("Already Exits", name);
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(name, newQuantity);
    }
    else {
        console.log('New Iteams', name);
        localStorage.setItem(name, 1);
    }

}
export { addToDb };