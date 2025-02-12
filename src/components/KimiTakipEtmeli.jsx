import { useEffect, useState } from "react";
import { getAllUsers } from "../api";

export function KimiTakipEtmeli(){

        const [users , setUsers] = useState([]);
    
        useEffect(() => {
                const fetchUsers = async () => {
                  try {
                    const data = await getAllUsers();
                    setUsers(data);
                    console.log( "bakalım:", data);
                  } catch (err) {
                    console.error(err);
                  } finally {
                  }
                };
                fetchUsers();
              }, []);
    return(
        <>
        <div className="border border-gray-700 rounded-xl flex flex-col text-white gap-4 py-4">
                <h1 className="px-2 text-xl font-bold">Kimi takip etmeli</h1>
                <button className="hover:bg-gray-700 px-2 py-2 flex gap-2 justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <img src="images/berksener.jpg" className="w-10 h-9 rounded-full">{/* profil gG */}</img>
                        <div className="flex flex-col">
                            <p>Username</p>
                            <p className="text-darkgray">@Username</p>
                        </div>
                    </div>
                    <div className="flex text-darkgray">
                    <button className="bg-white text-black flex items-center justify-center gap-5 rounded-full w-24 h-8 text- font-semibold"><p className="hidden xl:flex">Takip et</p></button>

                    </div>
                </button>
                <button className="hover:bg-gray-700 px-2 py-2 flex gap-2 justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <img src="images/berksener.jpg" className="w-10 h-9 rounded-full">{/* profil gG */}</img>
                        <div className="flex flex-col">
                            <p>Username</p>
                            <p className="text-darkgray">@Username</p>
                        </div>
                    </div>
                    <div className="flex text-darkgray">
                    <button className="bg-white text-black flex items-center justify-center gap-5 rounded-full w-24 h-8 text- font-semibold"><p className="hidden xl:flex">Takip et</p></button>

                    </div>
                </button>
                <button className="hover:bg-gray-700 px-2 py-2 flex gap-2 justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <img src="images/berksener.jpg" className="w-10 h-9 rounded-full">{/* profil gG */}</img>
                        <div className="flex flex-col">
                            <p>Username</p>
                            <p className="text-darkgray">@Username</p>
                        </div>
                    </div>
                    <div className="flex text-darkgray">
                    <button className="bg-white text-black flex items-center justify-center gap-5 rounded-full w-24 h-8 text- font-semibold"><p className="hidden xl:flex">Takip et</p></button>

                    </div>
                </button>
                <button className="hover:bg-gray-700 px-2 py-2 flex gap-2 justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <img src="images/berksener.jpg" className="w-10 h-9 rounded-full">{/* profil gG */}</img>
                        <div className="flex flex-col">
                            <p>Username</p>
                            <p className="text-darkgray">@Username</p>
                        </div>
                    </div>
                    <div className="flex text-darkgray">
                    <button className="bg-white text-black flex items-center justify-center gap-5 rounded-full w-24 h-8 text- font-semibold"><p className="hidden xl:flex">Takip et</p></button>

                    </div>
                </button>
            </div>
        </>
    )
}