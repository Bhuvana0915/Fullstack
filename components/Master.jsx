import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Laptops from "./Laptops";
import Mobiles from "./Mobiles";
import Headphones from "./Headphones";
import Error from "./Error";
import DetailedProduct from "./DetailedProduct";
import Footer from "./Footer";
import { CartProvider } from "../context/CartContext";
import Invoice from "./Invoice";
CartProvider
const Master = ()=>{
    return(
        <>
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login></Login>}></Route>
                        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
                            <Route index element={<Laptops></Laptops>}></Route>
                            <Route path="dashboard/mobiles" element={<Mobiles></Mobiles>}></Route>
                            <Route path="dashboard/headphones" element={<Headphones></Headphones>}></Route>
                        </Route>
                        <Route path="/error" element={<Error></Error>}></Route>
                        <Route path="/detailed" element={<DetailedProduct></DetailedProduct>}></Route>
                        <Route path="/invoice" element={<Invoice />} />
                    </Routes>

                    <Footer></Footer>
                </BrowserRouter>
            </CartProvider>
        </>
    )
}
export default Master;