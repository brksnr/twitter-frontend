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
            <div className="flex border-b border-gray-700 pb-3">
                <div className="pl-3  pt-4">
                    <img src="images/berksener.jpg" className="w-9 h-9 rounded-full">{/* profil gG */}</img>
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
            {/*GÖNDERİLER*/}
            <div className="flex border-b border-gray-700 pb-3">
                <div className="pl-3  pt-4">
                    <img src="images/berksener.jpg" className="w-10 h-9 rounded-full">{/* profil gG */}</img>
                </div>
                <div className="w-full pt-5 pl-2 flex flex-col gap-10 pr-2">
                    <div className="flex justify-between w-full">
                        <div className="flex gap-2">
                            <p className="font-bold text-sm">USERNAME</p>
                            <p className="text-sm text-darkgray">@USERNAME</p>
                            <p className="text-sm text-darkgray">50d</p>
                        </div>
                        <div>
                            <button><i className="text-darkgray fa-solid fa-ellipsis hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center"></i></button>
                        </div>
                    </div>
                    <div className="">
                        <p>TWIT İÇERİĞİ</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <button className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center"><i class="fa-regular fa-comment"></i></button>
                            <p>104</p>
                        </div>
                        <div  className="flex items-center">
                            <button className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center"><i class="fa-solid fa-retweet"></i></button>
                            <p>5</p>
                        </div>
                        <div className="flex items-center">
                            <button className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center"><i class="fa-solid fa-heart"></i></button>
                            <p>100</p>
                        </div>
                        <div className="flex items-center">
                            <button className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center"><i class="fa-solid fa-chart-column"></i></button>
                            <p>27B</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center"><i className="fa-regular fa-bookmark"></i></button>
                            <button className="hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center"><i class="fa-solid fa-arrow-up-from-bracket"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}