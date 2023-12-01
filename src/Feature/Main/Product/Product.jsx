import {Link} from "react-router-dom";
import {useStore} from "../../../Context/Context";
import Spinner from "../../Spinner/Spinner";
import NavTab from "../../NavTab/NavTab";

const Product = () => {
    const {isLoading, productData, dispatch} = useStore()
    const firstImage = productData && productData.images && productData.images.length > 0
        ? productData.images[0] : null;
    return (
        <>
            {isLoading ? <Spinner/> :
                <div>
                    <section className="relative table w-full py-20 lg:py-24 bg-gray-100">
                        <div className="container mx-auto relative">
                            <div className="grid grid-cols-1 mt-14">
                                <h3 className="text-3xl leading-normal font-semibold">Product / {productData.title}</h3>
                            </div>
                            <div className="relative mt-3">
                                <ul className="tracking-[0.5px] mb-0 inline-block">
                                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
                                        <Link to=""></Link>
                                    </li>
                                    <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                                        <i className="uil uil-angle-right-b"></i></li>
                                    <li className="inline-block uppercase text-[13px] font-bold text-indigo-600"
                                        aria-current="page">Item Detail
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="relative md:py-24 py-16">
                        <div className="container mx-auto">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] items-center">
                                <div className="lg:col-span-5 md:col-span-6">
                                    <div className="tns-outer" id="tns1-ow">
                                        <div id="tns1-mw" className="tns-ovh">
                                            <div className="tns-inner" id="tns1-iw">
                                                <div
                                                    className="tiny-single-item  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                                                    id="tns1">
                                                    <div className="tiny-slide tns-item tns-slide-active"
                                                         id="tns1-item0">
                                                        <img src={firstImage} className="rounded-md "
                                                             alt={productData.title}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-7 md:col-span-6">
                                    <div className="lg:ms-6">
                                        <h5 className="text-2xl font-semibold">{productData.title}</h5>
                                        <div className="mt-2">
                                            <span
                                                className="text-slate-400 font-semibold me-1">${productData.price}.00</span>
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="text-lg font-semibold">Overview :</h5>
                                            <p className="text-slate-400 mt-2">{productData.description}</p>

                                            <ul className="list-none text-slate-400 mt-4">
                                                <li className="mb-1 flex"><i
                                                    className="uil uil-check-circle text-indigo-600 text-xl me-2"></i> Digital
                                                    Marketing Solutions for Tomorrow
                                                </li>
                                                <li className="mb-1 flex"><i
                                                    className="uil uil-check-circle text-indigo-600 text-xl me-2"></i> Our
                                                    Talented &amp; Experienced Marketing Agency
                                                </li>
                                                <li className="mb-1 flex"><i
                                                    className="uil uil-check-circle text-indigo-600 text-xl me-2"></i> Create
                                                    your own skin to match your brand
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] mt-4">
                                            <div className="flex items-center">
                                                <h5 className="text-lg font-semibold me-2">Size:</h5>
                                                <div className="">
                                                    <Link to=""
                                                          className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">S</Link>
                                                    <Link to=""
                                                          className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">M</Link>
                                                    <Link to=""
                                                          className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">L</Link>
                                                    <Link to=""
                                                          className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">XL</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                onClick={() => dispatch({
                                                    type: "itemData",
                                                    payload: productData.id
                                                })}
                                                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white mt-2">Add
                                                to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <NavTab/>
                        </div>
                    </section>
                </div>
            }
        </>
    )
}

export default Product
