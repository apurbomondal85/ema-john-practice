

import React from 'react'

function SaveProduct({cart}) {

  let totalPrice = 0;
  let totalShipping = 0;
  let totalQuantity = 0;
  for (let product of cart) {
    // const newQuantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }
  const totalTax = totalPrice * 7 / 100;
  const totalGrand = totalPrice + totalShipping + totalTax;

  return (
    <>
      <h1>Order Summary</h1>
            <div style={{marginTop: '2rem',fontSize: '.9rem',color: "#2A414F"}}>
                <p>Selected Items:
                  {totalQuantity}
                </p>
                <p>Total Price: $
                  {totalPrice}
                </p>
                <p>Total Shipping Charge: $
                  {totalShipping}
                </p>
                <p>Tax: $
                  {totalTax}
                </p>
            </div>
            <p>Grand Total: $
              {totalGrand.toFixed(2)}
            </p>
    </>
  )
}

export default SaveProduct
