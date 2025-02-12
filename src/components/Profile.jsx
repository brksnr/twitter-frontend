import md5 from "md5";
import { UserTweets } from "./UserTweets";

export function Profile(){
    const userEmail = localStorage.getItem("email");

    const getGravatarUrl = (email) => {
              const emailHash = md5(email.trim().toLowerCase());
              return `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;
            };


    const handleGoBack = () => {
        window.history.back();
    }
    return (
        <>
        <div className="border border-gray-700 sm:w-middle w-full flex flex-col text-white">
            {/* KULLANICI İSMİ */}
            <button className="text-left flex items-center gap-5 pl-5 h-16">
                <i onClick={handleGoBack} className="fa-solid fa-arrow-left hover:bg-gray-700 rounded-full w-10 h-10 items-center justify-center flex"></i>
                <p className="font-bold text-xl">{userEmail}</p>
            </button> 

            {/* PROFILE BANNER */}
            <div>
                <div className="bg-blue h-48 relative">
                </div>

                <div className=" flex flex-col gap-4 ">
                    <div className="px-4 flex justify-between items-center max-h-16">
                        <img
                        className="h-32 w-32 rounded-full transform -translate-y-9 border-2 border-black"
                        src={getGravatarUrl(userEmail)}/>
                        <button className="h-10 w-fit px-3 rounded-full border border-white font-bold">Porfili düzenle</button>
                    </div>
                    <div className="px-4">
                        <p className="font-bold text-sm sm:text-base">{userEmail}</p>
                        <p className="font-base text-darkgray text-sm sm:text-base">@{userEmail}</p>
                    </div>
                    <div className="px-4">
                        <p className="font-base text-darkgray text-sm sm:text-base"><i class="fa-solid fa-cake-candles"></i> Created At</p>
                        <p className="font-base text-darkgray text-sm sm:text-base"><i class="fa-regular fa-calendar-days"></i> BirthDay</p>
                    </div>
                    <div className="flex gap-3 px-4">
                        <div className="flex gap-1">
                            <p className="font-bold text-sm">441</p>
                            <p className="font-base text-darkgray text-sm">Takip edilen</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="font-bold text-sm">415</p>
                            <p className="font-base text-darkgray text-sm">Takipçi</p>
                        </div>
                    </div>
                    <div className="flex border-b border-gray-700">
                        <button className="h-16 px-3 w-full rounded-sm hover:bg-gray-700 ">Gönderiler</button>
                        <button className="h-16 px-3 w-full rounded-sm hover:bg-gray-700">Yanıtlar</button>
                        <button className="h-16 px-3 min-w-32 rounded-sm hover:bg-gray-700">Önce Çıkanlar</button>
                        <button className="h-16 px-3 w-full rounded-sm hover:bg-gray-700">Makaleler</button>
                        <button className="h-16 px-3 w-full rounded-sm hover:bg-gray-700 hidden sm:block">Medya</button>
                        <button className="h-16 px-3 w-full rounded-sm hover:bg-gray-700 hidden md:block">Beğeni</button>
                    </div>

                </div>

            </div>
            <UserTweets/>
        </div>
        </>
    )
}