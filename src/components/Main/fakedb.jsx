
const getStorData = () =>{
    let saveStorData = {};
    const getData = localStorage.getItem('cart');
    if (getData) {
        saveStorData = JSON.parse(getData);
    }
    return saveStorData;

}

const setData = (id) =>{
    const getData = getStorData();
    const quantity = getData[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        getData[id] = newQuantity;
    }else{
        getData[id] = 1;
    }
    
    localStorage.setItem('cart',JSON.stringify(getData));

}

const deleteStorData = () =>{
    localStorage.removeItem('cart');
}

export {getStorData,setData,deleteStorData}