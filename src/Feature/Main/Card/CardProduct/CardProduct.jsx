import {NavLink} from "react-router-dom";
import {AiOutlineHeart} from "react-icons/ai";
import {BsEyeFill} from "react-icons/bs";
import {useStore} from "../../../../Context/Context";

const CardProduct = ({product}) => {
    const {dispatch} = useStore()
    const cartData = {
        id: product.id,
        image: product.images[0],
        title: product.title,
        price: product.price,
        quantity: 1,
        total: product.price * 1
    }
    return (
        <div className="group" id={product.id}>
            <div
                className="relative overflow-hidden shadow shadow-gray-600 rounded-md duration-500 h-[360px]">
                <img src={product.images[0]} alt={product.title} className="h-full w-full"/>

                <div
                    className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                    <button
                            onClick={() => dispatch({type: "itemData", payload: cartData})}
                            className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md">Add
                        to Cart
                    </button>
                </div>

                <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500">
                    <li>
                        <NavLink to="/"
                                 className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white">
                            <AiOutlineHeart/>
                        </NavLink>
                    </li>
                    <li className="mt-1">
                        <NavLink to={`/products/${product.id}`}
                                 className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white">
                            <BsEyeFill/>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <div className="flex justify-between items-center mt-1">
                    <p className="text-green-600">$ {product.price}.00</p>
                </div>
            </div>
        </div>
    )
}

export default CardProduct
