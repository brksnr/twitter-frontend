import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setUser } from "../actions/userAction";
import { loginUser } from "../api";

export function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccessMessage(null);
        try {
            const result = await loginUser(formData.email, formData.password);
            setSuccessMessage("Login successful!");
            console.log(result);
            localStorage.setItem("token", JSON.stringify(result.token));
            localStorage.setItem("email", result.email);
            localStorage.setItem("id", result.id);
            dispatch(setUser(result.email, result.token, result.id));
            history.push("/home");
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    };
    

    return (
        <div className="flex min-h-screen w-full items-center justify-center px-4 py-12">
            <div className="mx-auto w-full max-w-lg border rounded-xl p-4">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <p className="mb-6">Login</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="block">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue text-white px-4 py-2 rounded" disabled={isLoading}>
                        {isLoading ? "Loading..." : "Login"}
                    </button>
                    
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    {successMessage && <p className="text-sm text-green-500">{successMessage}</p>}
                </form>
            </div>
        </div>
    );
}
