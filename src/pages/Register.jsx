import React, { useState } from "react";
import { registerUser } from "../api";
import { useHistory } from "react-router-dom"

export function Register() {
    const [formData, setFormData] = useState({ userName: "", email: "", password: "" });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccessMessage(null);

        try {
            const result = await registerUser(formData.userName, formData.email, formData.password);
            setSuccessMessage("Registration successful!");
            history.push("/home");
        } catch (error) {
            setError(error.message);
        }
        
        setIsLoading(false);
    };

    return (
        <div className="flex min-h-screen w-full items-center justify-center px-4 py-12">
            <div className="mx-auto w-full max-w-lg border rounded-xl p-4">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <p className="mb-6">Create your account</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="userName" className="block">Username</label>
                        <input
                            id="userName"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>

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
                        {isLoading ? "Loading..." : "Sign Up"}
                    </button>
                    
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    {successMessage && <p className="text-sm text-green-500">{successMessage}</p>}
                </form>
            </div>
        </div>
    );
}
