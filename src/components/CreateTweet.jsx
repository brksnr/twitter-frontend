import md5 from "md5";
import { useSelector } from "react-redux";

export function CreateTweet(){
    const user = useSelector(state => state.user);

    const getGravatarUrl = (email) => {
            const emailHash = md5(email.trim().toLowerCase());
            return `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;
          };
    return(
        <>
        <div className="flex border-b border-gray-700 pb-3">
                <div className="pl-3  pt-4">
                    <img src={getGravatarUrl(user.user.email)} className="w-9 h-9 rounded-full">{/* profil gG */}</img>
                </div>
                <div className="flex flex-col w-full">
                    <div className="w-full">
                        <textarea
                        placeholder="Neler Oluyor"
                        className="max-h-20 min-h-20 w-full bg-black px-3 pt-5 text-xl resize-none"/>
                    </div>
                    <div className="flex justify-between text-blue">
                        <div className="flex items-center gap-2">
                                <button className="hover:bg-darkgray w-7 h-7 rounded-full"><i className="fa-regular fa-image"></i></button>
                                <button className="hover:bg-darkgray w-7 h-7 rounded-full"><i className="fa-solid fa-person-walking"></i></button>
                                <button className="hover:bg-darkgray w-7 h-7 rounded-full"><i className="fa-solid fa-hand-holding-heart"></i></button>
                                <button className="hover:bg-darkgray w-7 h-7 rounded-full"><i className="fa-solid fa-square-poll-horizontal"></i></button>
                                <button className="hover:bg-darkgray w-7 h-7 rounded-full"><i className="fa-regular fa-face-smile"></i></button>
                                <button className="hover:bg-darkgray w-7 h-7 rounded-full hidden"><i className="fa-solid fa-calendar-days"></i></button>
                                <button className="hover:bg-darkgray w-7 h-7 rounded-full"><i className="fa-solid fa-location-dot"></i></button>
                        </div>
                        <div className="pr-5">
                        <button className="bg-white text-black flex items-center justify-center gap-5 rounded-full w-36 h-9 text-md font-medium"><p>Gönderi yayınla</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}