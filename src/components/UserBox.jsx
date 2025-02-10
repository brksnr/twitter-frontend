import md5 from 'md5';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export function UserBox() {
    const user = useSelector(state => state.user);
    console.log(user.user.token);

    const getGravatarUrl = (email) => {
        const emailHash = md5(email.trim().toLowerCase());
        return `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;
      };

      const handleLogOut = () => {
        localStorage.setItem("token", null);
        localStorage.setItem("username", null);
        window.location.reload();
      };

    if (user.user.token && user.user.email) {
        return (
            <>
                <button className="flex items-center justify-between w-full rounded-full mt-12 px-2 py-7 h-12 hover:bg-gray-700 text-xl font-medium">
                    <div className="flex items-center gap-1">
                        <img src={getGravatarUrl(user.user.email)} className="w-9 h-9 rounded-full" alt="Profile" />
                        <div className="text-start">
                            <p className="font-bold text-base">{user.user.email}</p>
                            <p className="text-base text-darkgray">@{user.user.email.split('@')[0]}</p>
                        </div>
                    </div>
                    <div>
                        <button
                        onClick={handleLogOut}
                        ><i className="text-red-700 fa-solid fa-arrow-right-from-bracket hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center"></i></button>
                    </div>
                </button>
            </>
        );
    }
    return (
        <div className="flex justify-center items-center mt-12">
            <Link to="/login" className="text-xl font-medium text-blue-500 mr-4">Login</Link>
            <Link to="/register" className="text-xl font-medium text-blue-500">Register</Link>
        </div>
    );
}
