import React from 'react'
import {Route, Routes} from "react-router-dom";
import Navbar from "./Feature/Navbar/Navbar";
import Main from "./Feature/Main/Main";
import {ContextProvider} from "./Context/Context";
import Footer from "./Feature/Footer/Footer";
import Product from "./Feature/Main/Product/Product";
import {PaymentSuccess} from "./Payment/PaymentActions/PaymentSuccess";
import {PaymentCancel} from "./Payment/PaymentActions/PaymentCancel";

const App = () => {
    return (
        <ContextProvider>
            <Navbar/>
            <Routes>
                <Route index element={<Main/>}/>
                <Route path="/products/:id" element={<Product/>}/>
                <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
                <Route path="/paymentcancel" element={<PaymentCancel/>}/>
            </Routes>
            <Footer/>

        </ContextProvider>
    )
}

export default App
