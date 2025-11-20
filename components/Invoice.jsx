// src/components/Invoice.jsx
import { useCart } from '../context/CartContext';
import './Invoice.css';
import { useNavigate } from 'react-router-dom';

    const Invoice = () => {
    const navigate = useNavigate();
    const { cart } = useCart();
    const total = cart.reduce((sum, item) => sum + item.cost * item.quantity, 0);

   const handlePayment = async () => {
    const options = {
        key: "rzp_live_0CAWJFt3q8oaUX", // Replace with your Razorpay Key ID
        amount: total * 100, // in paisa
        currency: "INR",
        name: "ExcelR",
        description: "Product Purchase",
        image: "https://your-logo-url.com/logo.png", // optional
        handler: function (response) {
            alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
            // You can clear the cart or save order in DB here
             clearCart();
            navigate('/dashboard'); // Redirect to home or order confirmation page
        },
        prefill: {
            name: "ExcelR",
            email: "hr@email.com",
            contact: "9999999999"
        },
        theme: {
            color: "#3399cc"
        }
    };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div className="invoice-page">
            <h2>Invoice</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, idx) => (
                        <tr key={idx}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>₹{item.cost}</td>
                            <td>₹{item.cost * item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Total: ₹{total}</h3>
            <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
        </div>
    );
};

export default Invoice;
