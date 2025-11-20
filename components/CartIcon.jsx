// src/components/CartIcon.jsx
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import './CartIcon.css';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
    const { cart } = useCart();
    const navigate = useNavigate();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const goToInvoice = () => {
        navigate("/invoice");
    };

    return (
        <div className="cart-icon" onClick={goToInvoice}>
            <FaShoppingCart size={24} />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </div>
    );
};

export default CartIcon;
