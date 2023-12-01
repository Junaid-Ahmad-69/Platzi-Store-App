import {CiShoppingCart} from "react-icons/ci";

const EmptyCart = () => {
    return (
        <div className="flex items-center justify-center h-screen gap-5 flex-col">
            <p className="fs-2 opacity-75">Cart Bucket Empty</p>
            <CiShoppingCart size={300} className="opacity-50"/>
        </div>
    )
}

export default EmptyCart
