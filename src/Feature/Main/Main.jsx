import Header from "../Header/Header";
import Overview from "../Overview/Overview";
import Card from "./Card/Card";
import Modal from "./Modal/Modal";
import {useStore} from "../../Context/Context";
import {CardPagination} from "./CardPagination/CardPagination";


const Main = () => {
    const {isOpen} = useStore()
    return (
        <>
            <Header/>
            <Overview/>
            <Card/>
            <CardPagination/>
            {isOpen && <Modal/>}
        </>
    )
}

export default Main
