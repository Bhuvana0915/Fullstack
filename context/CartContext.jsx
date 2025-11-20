import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        setCart(prevCart => {
            const existingIndex = prevCart.findIndex(item => item.id === product.id);
            if (existingIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingIndex] = { ...product, quantity }; // overwrite with latest
                return updatedCart;
            } else {
                return [...prevCart, { ...product, quantity }]; //  first time
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};







// // src/context/CartContext.js
// import { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addToCart = (product, quantity) => {
//         const existing = cart.find(item => item.pid === product.pid);
//         if (existing) {
//             setCart(cart.map(item =>
//                 item.pid === product.pid
//                 ? { ...item, quantity: item.quantity + quantity } // ← WRONG: appending
//                 : item
//             ));
//             }
//  else {
//             setCart([...cart, { ...product, quantity }]);
//         }
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };
