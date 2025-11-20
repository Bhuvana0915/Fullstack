import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";
const Headphones = ()=>{
    const navigate = useNavigate();
    const [headphones,setHeadphones] = useState([]);
    const get_headphones = async ()=>{
        const {data} = await axios.get("http://localhost:8000/headphones");
        setHeadphones(data);
    }
    useEffect(()=>{
        get_headphones();
    },[]);
    const detailed_product = (product)=>{
        navigate("/detailed",{state:product});
    }
    return(
        <>
            <div className="products-container">
                {
                    headphones.map((headphone,index)=>{
                        return(<div  className="product-card" onClick={()=>detailed_product(headphone)}>
                            <img src={headphone.image}></img>
                            <h2>{headphone.name}</h2>
                            <h3>{headphone.cost}</h3>
                        </div>)
                    })
                }
            </div>
        </>
    )
}
export default Headphones;