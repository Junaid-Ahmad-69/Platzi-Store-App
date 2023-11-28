import Hoodie from '../../assets/img/hoodie.jpg'
import Beanie from '../../assets/img/beanie.jpg'
import Glasses from '../../assets/img/glasses.jpg'

const Overview = () => {
    return (
        <>
            <section className="container mx-auto relative py-16">
                <div className="grid grid-cols-2 relative overflow-hidden mx-auto mt-4">

                    <div className="p-3 ml-auto">
                        <div className=" group relative overflow-hidden rounded-md">
                            <img src={Hoodie} className=" group-hover:scale-110 duration-500 w-full" alt=" Hoodie"/>
                            <div className=" absolute bottom-4 start-4">
                                <span className="text-xl font-semibold">Hoodies</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center flex-col">
                        <div className="p-3 mr-auto">
                            <div className="group relative overflow-hidden rounded-md">
                                <img src={Beanie} className="group-hover:scale-110 duration-500 w-full" alt="Beanie"/>
                                <div className="absolute bottom-4 start-4">
                                    <span className="text-xl font-semibold">Beanies
                                        for Man & Women</span>
                                </div>
                            </div>
                            <ul className="font-medium text-amber-400 list-none">
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                <li className="inline"><i className="mdi mdi-star"></i></li>
                            </ul>
                        </div>

                        <div
                            className="p-3 mr-auto">
                            <div className="group relative overflow-hidden rounded-md">
                                <img src={Glasses} className="group-hover:scale-110 duration-500 w-full" alt="Glasses"/>
                                <div className="absolute bottom-4 start-4">
                                    <span className="text-xl font-semibold">Glasses</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Overview
