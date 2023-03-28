

import React, { useEffect, useState } from 'react'
import Cart from './Cart';
import './container.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import SaveProduct from './SaveProduct';
import { deleteStorData, getStorData, setData } from './fakedb';

function Container() {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(() =>{
        const getData = getStorData()
        const storData = []
        for (let id in getData) {
            const selectData = products.find(product => product.id === id);
            if (selectData) {
                selectData.quantity = getData[id]
                storData.push(selectData);
            }
        }
        setCart(storData);
    },[products])

    const handleCartBtn = (product) =>{
        // setCart([...cart,product])
        let newAddData = []
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newAddData = [...cart, product]
        }else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newAddData = [...remaining, exists];
        }
        setCart(newAddData);
        getStorData();
        setData(product.id)
    }
    const deleteData = () => {
        console.log('hello');
        deleteStorData();
        setCart([]);
    }
  return (
    <main className='container'>
        <div className='cart-section'>
            {products.slice(0,6).map(product => <Cart 
            key={product.id} 
            product={product}
            handleCartBtn={() => handleCartBtn(product)}
            />)}
        </div>
        <div className='order-summary'>
            <SaveProduct cart={cart}/>
            <button className='delete' onClick={deleteData}>
                Clear Cart
            <FontAwesomeIcon style={{marginLeft: ".8rem"}} icon={faTrash} />
            </button>
        </div>
    </main>
  )
}

export default Container
