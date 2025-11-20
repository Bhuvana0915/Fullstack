import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Importing styles
const Login = () => {
    const uname = useRef(null);
    const upwd = useRef(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const login = async () => {
        const username = uname.current.value.trim();
        const password = upwd.current.value.trim();

        if (!username || !password) {
            setError("Username and Password are required.");
            return;
        }

        try {
            let { data } = await axios.post("http://localhost:8000/login", {
                username,
                password
            });

            data === "Login Success"
                ? navigate("/dashboard")
                : navigate("/error");
        } catch (err) {
            setError("An error occurred while logging in.");
        }
    };

    return (
        <div className="login-container">
            <fieldset className="login-box">
                <legend className="login-legend">LOGIN</legend>
                <input
                    type="text"
                    ref={uname}
                    placeholder="Enter username"
                    className="login-input"
                />
                <input
                    type="password"
                    ref={upwd}
                    placeholder="Enter password"
                    className="login-input"
                />
                {error && <p className="login-error">{error}</p>}
                <button onClick={login} className="login-button">Login</button>
            </fieldset>
        </div>
    );
};
export default Login;
