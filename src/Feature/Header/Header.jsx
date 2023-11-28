import {NavLink} from "react-router-dom";
import Banner from '../../assets/img/bg.jpg';
import {AiOutlineShoppingCart} from "react-icons/ai";
const Header = () => {
    return (
        <>
            <section className="relative">
                <div className="container-fluid relative">
                    <div className="relative py-48 table w-full shadow-md overflow-hidden">
                        <div className="absolute inset-0 bg-no-repeat bg-top bg-cover" style={{ backgroundImage: `url(${Banner})`}}></div>
                        <div className="absolute inset-0 bg-slate-950/30"></div>
                        <div className="container mx-auto relative">
                            <div className="grid grid-cols-1">
                                <div className="md:text-start text-center">
                                    <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">New
                                        Accessories <br/> Collections</h1>
                                    <p className="text-white/70 text-xl max-w-xl">Start working with Tailwind CSS that
                                        can provide everything you need to generate awareness, drive traffic,
                                        connect.</p>
                                    <div className="mt-6">
                                        <NavLink  to=""
                                           className="py-2 px-5  inline-flex items-center gap-2 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">
                                            <AiOutlineShoppingCart/>
                                            Shop Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
