import {NavLink} from "react-router-dom";
import Logo from '../../assets/img/logo-store.png'
import {IoMdCart} from "react-icons/io";
import {useStore} from "../../Context/Context";

const Navbar = () => {
    const {dispatch, item} = useStore()
    return (
        <>
            <nav className="bg-white p-4 flex items-center justify-center h-16 sticky top-0 z-10 ">
                <div className="container mx-auto flex items-center justify-between px-36">
                    <div className="flex items-center">
                        <NavLink to="/">
                            <img src={Logo} alt="Logo" className="w-32"/>
                        </NavLink>
                    </div>

                    <div className="space-x-12">
                        <NavLink to="/"
                                 className="text-black hover:text-[#4f46e5] font-semibold uppercase">Home</NavLink>
                        <NavLink to="#"
                                 className="text-black hover:text-[#4f46e5] font-semibold uppercase">About</NavLink>
                        <NavLink to="#"
                                 className="text-black hover:text-[#4f46e5] font-semibold uppercase">Services</NavLink>
                        <NavLink to="#"
                                 className="text-black hover:text-[#4f46e5] font-semibold uppercase">Contact</NavLink>
                    </div>
                    <div className="relative">
                        <button data-dropdown-toggle="dropdown"
                                className="dropdown-toggle h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
                                type="button" onClick={() => dispatch({type: "toggle"})}>
                            <IoMdCart/>
                        </button>
                        {item.length > 0 && <span className="absolute -top-3 bg-yellow-500 rounded-full -right-2 text-white p-3 w-4 h-4 flex items-center justify-center">{item.length}</span>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
