

import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { useDispatch } from 'react-redux';


function Main() {
  const dispatch = useDispatch()
  const product = {
    name: "i phone",
    type: "mobile",
    price : 10000,
    color : 'red'
  }
  return (
  
    <div className='buttons-main'>
      
      <button  onClick={()=>{dispatch(addToCart(product))}}>Add to cart </button>
      <button  onClick={()=>{dispatch(removeFromCart(product.name))}}>Remove from cart </button>
      <button  onClick={()=>{dispatch(emptyCart(product))}}>Empty cart </button>
    </div>
      
   
  );
}

export default Main;
