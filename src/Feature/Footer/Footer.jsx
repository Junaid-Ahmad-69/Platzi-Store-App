import React from 'react'
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import {LiaAngleRightSolid} from "react-icons/lia";

const Footer = () => {
  return (
    <>
        <footer className="footer bg-slate-700 relative text-gray-200 ">
            <div className="container mx-auto relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="py-[60px] px-0">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                                <div className="lg:col-span-3 md:col-span-12">
                                    <ul className="list-none mt-6">
                                        <li className="inline px-2"><a href="#" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><AiFillLinkedin/></a></li>
                                        <li className="inline px-2"><a href="#" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><AiFillFacebook/></a></li>
                                        <li className="inline px-2"><a href="#" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border-gray-800 rounded-md border hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><AiFillInstagram/></a></li>
                                    </ul>
                                </div>

                                <div className="lg:col-span-6 md:col-span-12">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Shopping &amp; Clothes</h5>

                                    <div className="grid md:grid-cols-12 grid-cols-1">
                                        <div className="md:col-span-4">
                                            <ul className="list-none footer-list mt-6">
                                                <li><a href="" className=" flex items-center gap-1 text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/> Men</a></li>
                                                <li className="mt-[10px]"><a href="" className=" flex items-center text-gray-300 gap-1 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/> Jackets &amp; Coats </a></li>
                                                <li className="mt-[10px]"><a href="" className=" flex items-center text-gray-300 gap-1 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/> Jeans </a></li>
                                                <li className="mt-[10px]"><a href="" className=" flex items-center text-gray-300 gap-1 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/>  Loungewear </a></li>
                                                <li className="mt-[10px]"><a href="" className=" flex items-center text-gray-300 gap-1 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/> Polo shirts </a></li>
                                                <li className="mt-[10px]"><a href="" className=" flex items-center text-gray-300 gap-1 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/> Shirts</a></li>
                                            </ul>
                                        </div>

                                        <div className="md:col-span-4">
                                            <ul className="list-none footer-list mt-6">
                                                <li><a href="" className="flex items-center gap-1 text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/> Shorts </a></li>
                                                <li className="mt-[10px] "><a href="" className="flex items-center gap-1 text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/> Suits Swimwear </a></li>
                                                <li className="mt-[10px]"><a href="" className="flex items-center gap-1 text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/> T-shirts </a></li>
                                                <li className="mt-[10px]"><a href="" className="flex items-center gap-1 text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/> Tracksuits </a></li>
                                                <li className="mt-[10px]"><a href="" className="flex items-center gap-1 text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/> Trousers</a></li>
                                                <li className="mt-[10px]"><a href="" className="flex items-center gap-1 text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/> Shirts</a></li>
                                            </ul>
                                        </div>

                                        <div className="md:col-span-4">
                                            <ul className="list-none footer-list mt-6">
                                                <li><a href="" className="flex items-center gap-1 text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/> My account </a></li>
                                                <li className="mt-[10px]"><a href="" className=" flex items-center gap-1 text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/> Order History </a></li>
                                                <li className="mt-[10px]"><a href="" className=" flex items-center gap-1 text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/> Wish List </a></li>
                                                <li className="mt-[10px]"><a href="" className=" flex items-center gap-1 text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/> Newsletter</a></li>
                                                <li className="mt-[10px]"><a href="" className=" flex items-center gap-1 text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/> Affiliate</a></li>
                                                <li className="mt-[10px]"><a href="" className=" flex items-center gap-1 text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><LiaAngleRightSolid/> Returns</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-3 md:col-span-4">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Newsletter</h5>
                                    <p className="mt-6">Sign up and receive the latest tips via email.</p>
                                    <form>
                                        <div className="grid grid-cols-1">
                                            <div className="my-3">
                                                <label className="form-label">Write your email <span className="text-red-600">*</span></label>
                                                <div className="form-icon relative mt-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail w-4 h-4 absolute top-3 start-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                    <input type="email" className="form-input ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200" placeholder="Email" name="email" required=""/>
                                                </div>
                                            </div>

                                            <button type="submit" id="submitsubscribe" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container mx-auto relative text-center">
                    <div className="grid md:grid-cols-2 items-center">
                        <div className="md:text-start text-center">
                            <p className="mb-0">© copyright <script>document.write(new Date().getFullYear())</script>2023. Design by Junaid.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
