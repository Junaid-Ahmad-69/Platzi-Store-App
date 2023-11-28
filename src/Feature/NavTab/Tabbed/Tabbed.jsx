import {useState} from "react";

const Tabbed = ({content}) => {
    const [activeTab, setActiveTab] = useState(0);
    const tabDetails = ["Description", "Additional Information", "Review"];

    return (
        <>
            <div className="lg:col-span-3 md:col-span-5">
                <div className="tabs w-full inline-flex item-center p-4 flex-col gap-2 shadow rounded mb-6">
                    {tabDetails.map((item, index) => {
                        return (
                            <button className={activeTab === index ? 'tab active' : 'tab'}
                                    onClick={() => setActiveTab(index)}>{item}</button>
                        )
                    })}
                </div>
            </div>
            {activeTab <= 2 &&
                <div className="lg:col-span-9 md:col-span-7" >
                    <div className="p-6 bg-white shadow rounded-md">
                        <h4 className=" text-md mb-5 text-slate-400">{content.at(activeTab).details}</h4>
                    </div>
                </div>
            }
        </>
    )
}

export default Tabbed
