import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";

const Laptops = () => {
    const navigate = useNavigate();
    const [laptops, setLaptops] = useState([]);

    const get_laptops = async () => {
        const { data } = await axios.get("http://localhost:8000/laptops");
        setLaptops(data);
    };

    useEffect(() => {
        get_laptops();
    }, []);

    const details_product = (product) => {
        navigate("/detailed", { state: product });
    };

    return (
        <div className="products-container">
            {laptops.map((laptop, index) => (
                <div
                    className="product-card"
                    onClick={() => details_product(laptop)}
                    key={index}
                >
                    <img src={laptop.image} alt={laptop.pname} />
                    <h2>{laptop.name}</h2>
                    <h3>₹{laptop.cost}</h3>
                </div>
            ))}
        </div>
    );
};

export default Laptops;










// import axios from "axios";
// import { useState,useEffect } from "react";
// import "./products.css";
// import { useNavigate } from "react-router-dom";
// const Laptops = ()=>{
    
//     const navigate = useNavigate();
    
//     const [laptops,setLaptops] = useState([]);
//     const get_laptops = async ()=>{
//         const {data} = await axios.get("http://localhost:8000/laptops");
//         setLaptops(data);
//     }
//     useEffect(()=>{
//         get_laptops();
//     },[]);

//     const details_product = (product)=>{
//         navigate("/detailed" , {state:product});
//     }

//     return(
//         <>
//             <div className="parent">
//                 {
//                     laptops.map((laptop,index)=>{
//                         return(<div className="child" onClick={()=>details_product(laptop)} key={index}>
//                             <img src={laptop.pimage}></img>
//                             <h2>{laptop.pname}</h2>
//                             <h3>{laptop.pcost}</h3>
//                         </div>)
//                     })
//                 }
//             </div>
//         </>
//     )
// }
// export default Laptops;