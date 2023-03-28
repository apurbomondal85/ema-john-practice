
import React from 'react'
import './cart.css'

function Cart(props) {
    const {name,img,price,ratings,seller} = props.product;
  return (
    <div className='cart'>
      <img src={img} className='cart-img' alt="" />
      <div className='body'>
        <h3 style={{fontSize:'1.4rem'}}>{name}</h3>
        <p>Price: ${price}</p>
        <span style={{marginTop: '2rem',marginBottom: '.8rem'}}>Manufacturer: {seller}</span>
        <span>Rating: {ratings} star</span>
        <button className='btn' onClick={() => props.handleCartBtn(props.product)}>Add Cast</button>
      </div>
    </div>
  )
}

export default Cart
