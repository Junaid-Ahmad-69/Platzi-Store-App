import {useStore} from "../../../Context/Context";

export const CardPagination = () => {
    const {offset, productAllData, limit, dispatch, activeButton} = useStore();
    const mapButtons = Math.ceil(productAllData / limit);
    console.log(activeButton)


    return (
        <>
            <div className=" flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                    <a href="#"
                       className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                    <a href="#"
                       className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                </div>
                <div className=" hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing
                            <span className="font-medium"> {offset + 1} </span>
                            to
                            <span className="font-medium"> {(limit + offset)} </span>
                            of
                            <span className="font-medium"> {productAllData} </span>
                            results
                        </p>
                    </div>
                    <div>
                        {Array.from({length: mapButtons}, (_, i) => (
                            <button
                                className={`py-1 px-3  border disabled:hover:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-black  hover:bg-blue-600 hover:text-white transition-all duration-300
                                 // ${(activeButton === i) ? "bg-blue-600 text-white" : "bg-transparent"}`}
                                onClick={() => dispatch({type: "offsetPaginate", payload: i})}
                                key={i}>{(i + 1)}</button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
