import ReactDom from "react-dom";
import styles from "./Modal.module.css"
import {useStore} from "../../../Context/Context";
import CartItem from "./CartItem/CartItem";
import EmptyCart from "./EmptyCart/EmptyCart";

const Modal = ({children}) => {
    const {dispatch, item} = useStore();
    return ReactDom.createPortal(
        <>
            <div className={styles.overlay}/>
            <div className={styles.modalStyle}>
                <button className={styles.close} onClick={() => dispatch({type: "closeModal"})}>&times;</button>
                {children}
                {item.length > 0 ?  <CartItem/> : <EmptyCart/>}

            </div>

        </>,
        document.getElementById("portal")
    );
};


export default Modal;
