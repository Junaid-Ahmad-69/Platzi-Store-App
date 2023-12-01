import {useStore} from "../../../Context/Context";
import Spinner from "../../Spinner/Spinner";
import CardProduct from "./CardProduct/CardProduct";
const Card = () => {
    const {isLoading, storeData, dispatch, filterCategory } = useStore();

    return (
        <>
            {isLoading ? <Spinner/> :

                <div className="container mx-auto relative my-16">
                    <div className="grid md:grid-cols-12 lg:grid-cols-1 grid-cols-1 items-center">
                        <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                            <h3 className="text-2xl leading-normal font-semibold">Most Viewed Products</h3>
                            <div className="flex items-center justify-between w-full">
                                <div className="my-4 flex items-center justify-between gap-10">
                                    <button
                                        className={`${filterCategory === "" && "active-data"} border hover:bg-[#4546e5] transition-all duration-500 rounded hover:text-white hover:border-[#4546e5] py-2 px-4`}
                                        onClick={() => dispatch({ type: 'productCategory', payload: "" })}>All Products
                                    </button>
                                    <button
                                        className={`${filterCategory === "?categoryId=1" ? "active-data" : ""} border hover:bg-[#4546e5] transition-all duration-500 rounded hover:text-white hover:border-[#4546e5] py-2 px-4`}
                                        onClick={() => dispatch({type: "productCategory", payload: "?categoryId=1"})}>Clothing
                                    </button>
                                    <button
                                        className={`${filterCategory === "?categoryId=2" ? "active-data" : ""} border hover:bg-[#4546e5] transition-all duration-500 rounded hover:text-white hover:border-[#4546e5] py-2 px-4`}
                                        onClick={() => dispatch({type: "productCategory", payload: "?categoryId=2"})}>Electronic
                                    </button>
                                    <button
                                        className={`${filterCategory === "?categoryId=3" ? "active-data" : ""} border hover:bg-[#4546e5] transition-all duration-500 rounded hover:text-white hover:border-[#4546e5] py-2 px-4`}
                                        onClick={() => dispatch({type: "productCategory", payload: "?categoryId=3"})}>Furniture
                                    </button>
                                    <button
                                        className={`${filterCategory === "?categoryId=4" ? "active-data" : ""} border hover:bg-[#4546e5] transition-all duration-500 rounded hover:text-white hover:border-[#4546e5] py-2 px-4`}

                                        onClick={() => dispatch({type: "productCategory", payload: "?categoryId=4"})}>Shoes
                                    </button>
                                </div>
                                <button onClick={() => dispatch({ type: 'productCategory', payload: ""})} disabled={filterCategory === ""}
                                    className="disabled:cursor-not-allowed disabled:hover:text-black  transition-all duration-500 rounded hover:text-[#4546e5] hover:border-[#4546e5] py-2 px-4">Reset
                                    Filter
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {storeData.map((product) => <CardProduct key={product.id} product={product}/>)}
                    </div>
                </div>
            }
        </>
    )
}

export default Card
