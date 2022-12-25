import { useSelector } from "react-redux"


const Header = () => {
  const result = useSelector((state)=>state.cartData)
  console.warn("redux header data" , result)
  return (
    <div className="header">
        <div className="cart-div">
            <span>{result.length}</span>
            <img src = "./images/cart.jpg " alt=" "/>
        </div>
    </div>
  )
}

export default Header
