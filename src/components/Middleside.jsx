import md5 from "md5";
import { useSelector } from "react-redux";
import { Posts } from "./Posts";
import { CreateTweet } from "./createTweet";

export function Middleside(){


    return (
        <>
        <div className="border border-gray-700 sm:w-middle flex flex-col text-white">
            {/*SANA OZEL*/}
            <div className="flex justify-between">
                    <button className="border-b border-gray-700 w-full flex items-center justify-center h-14 hover:bg-darkgray">
                    Sana özel
                    </button>
                    <button className="border-b border-gray-700 w-full flex items-center justify-center h-14 hover:bg-darkgray">
                        Takip
                    </button>
            </div>
            {/*GÖNDERİ OLUŞTUR*/}
            <CreateTweet/>
            {/*GÖNDERİLER*/}
            <Posts/>
        </div>
        </>
    )
}