import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";
const Mobiles = ()=>{
    const navigate = useNavigate();
    const [mobiles,setMobiles] = useState([]);
    const get_mobiles = async ()=>{
        const {data} = await axios.get("http://localhost:8000/mobiles");
        setMobiles(data);
    }
    useEffect(()=>{
        get_mobiles();
    },[]);
    const detailed_product = (product)=>{
        navigate("/detailed",{state:product});
    }
    return(
        <>
            <div className="products-container">
                {
                    mobiles.map((mobile,index)=>{
                        return(<div className="product-card" onClick={()=>detailed_product(mobile)}>
                            <img src={mobile.image}></img>
                            <h2>{mobile.name}</h2>
                            <h3>{mobile.cost}</h3>
                        </div>)
                    })
                }
            </div>
        </>
    )
}
export default Mobiles;