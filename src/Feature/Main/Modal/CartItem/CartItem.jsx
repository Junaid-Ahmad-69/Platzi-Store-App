import "./CartItems.css"
import {useStore} from "../../../../Context/Context";

const CartItem = () => {
    const {item, dispatch, totalAmount} = useStore()
    return (
        <>
            {item.map((item) => {
                const disabledItem = item.quantity === 1;
                return (
                    <div className="flex items-center justify-between cart-container relative" key={item.id}>
                        <img src={item?.image} alt={item.title} width={60} height={60} className="object-contain"/>
                        <div className="w-75 ms-auto">
                            <h6 className="fw-bold cart-title">{item.title}</h6>
                            <p> {item.price} * {item.quantity} = $ {(item.total).toFixed(2)} </p>
                            <div className="flex items-center gap-4 my-2">
                                <button
                                    className={disabledItem ? 'btn-quantity cursor-not-allowed' : 'btn-quantity hover:bg-[#705ef5] hover:text-white hover:border-1 hover:border-[#705ef5]'}
                                    disabled={disabledItem}
                                    onClick={() => dispatch({type: "decreaseProduct", payload: item.id})}>-
                                </button>
                                <button
                                    className="btn-quantity hover:bg-[#705ef5] hover:text-white hover:border-1 hover:border-[#705ef5]"
                                    onClick={() => dispatch({type: "increaseProduct", payload: item.id})}>+
                                </button>
                            </div>
                        </div>
                        <button onClick={() => dispatch({type: "removeProduct", payload: item.id})}
                                className="absolute top-1 right-3 hover:text-blue-900 transition-all duration-200 text-xl">x
                        </button>
                    </div>
                )
            })}
            <hr/>
            <div className="flex items-center justify-between p-3">
                <h6>Total Amount</h6>
                <strong className="text-green-600">$ {(totalAmount).toFixed(2)}</strong>
            </div>

        </>
    )
}

export default CartItem
