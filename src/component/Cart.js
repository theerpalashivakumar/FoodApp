// import React from 'react'
// import ResList from './ResList'
// import { useSelector } from 'react-redux'

// const Cart = () => {
//   const cartItems = useSelector((store)=>store.cart.items)
//   console.log(cartItems)
//   return (
//     <div className='m-3 p-3'>
//        <h1 className='font-bold text-center'>Cart</h1>
//        {/* <ResList data={cartItems}/> */}
//        <div>
//         {cartItems.map((item, index) => (
//           <ResList key={index} data={item} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Cart
import React from 'react';
import ResList from './ResList';
import { useDispatch, useSelector } from 'react-redux';
import { clearItem } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("Cart Items:", cartItems);
 const dispatch = useDispatch()
const handleChange =()=>{
   dispatch(clearItem())
}
  return (
    <div className='m-3 p-3'>
      <h1 className='font-bold text-center'>Cart</h1>
      <button 
       className='bg-black text-white rounded-md p-2' onClick={handleChange}>clarCart</button>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <ResList key={index} data={item} />
          ))
        ) : (
          <p className="text-center">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;

