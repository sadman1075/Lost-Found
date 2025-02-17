import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { useState } from "react";

const Root = () => {
    const [isactive, setactive] = useState({
        cart: true,
        status: "cart",
    })

    const handleisactive = (status) => {
        if (status == "cart") {
            setactive({
                cart: true,
                status: "cart"
            })
        }
        else {
            setactive({
                cart: false,
                status: "selected"
            })
        }

    }
    return (
        <div className="max-w-7xl mx-auto " data-theme={`${isactive.cart?"light":"dark"}`}>
            <Header handleisactive={handleisactive} isactive={isactive} setactive={setactive}></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;