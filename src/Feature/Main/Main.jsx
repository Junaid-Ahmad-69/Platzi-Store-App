import Header from "../Header/Header";
import Overview from "../Overview/Overview";
import Card from "./Card/Card";
import Modal from "./Modal/Modal";
import {useStore} from "../../Context/Context";


const Main = () => {
    const {isOpen} = useStore()
    return (
        <>
            <Header/>
            <Overview/>
            <Card/>
            {isOpen && <Modal/>}
        </>
    )
}

export default Main
