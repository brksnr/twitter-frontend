export function Middleside(){
    return (
        <>
        <div className="border border-gray-700 min-w-middle flex flex-col text-white">
            {/*SANA OZEL*/}
            <div className="flex justify-between">
                <div className="border-b border-gray-700 w-full flex items-center justify-center h-14 hover:bg-darkgray">
                    <button>
                        Sana özel
                    </button>
                </div>
                <div className="border-b border-gray-700 w-full flex items-center justify-center h-14 hover:bg-darkgray">
                    <button>
                        Takip
                    </button>
                </div>
            </div>
            {/*GÖNDERİ OLUŞTUR*/}
            <div className="flex border-b border-gray-700 pb-3">
                <div className="px-3 pt-3">
                    <img src="images/berksener.jpg" className="w-10 h-9 rounded-full">{/* profil gG */}</img>
                </div>
                <div className="flex flex-col w-full">
                    <div className="w-full">
                        <textarea
                        placeholder="Neler Oluyor"
                        className="w-full max-h-20 min-h-20 bg-black px-3 pt-5 "/>
                    </div>
                    <div className="flex justify-between text-blue">
                        <div className="flex items-center gap-6">
                                <i class="fa-regular fa-image"></i>
                                <i class="fa-solid fa-person-walking"></i>
                                <i className="fa-solid fa-hand-holding-heart"></i>
                                <i class="fa-solid fa-square-poll-horizontal"></i>
                                <i class="fa-regular fa-face-smile"></i>
                                <i class="fa-solid fa-calendar-days"></i>
                                <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="pr-5">
                        <button className="bg-white text-black flex items-center justify-center gap-5 rounded-full w-36 h-9 text-md font-medium"><p className="hidden xl:flex">Gönderi yayınla</p></button>
                        </div>
                    </div>
                

                </div>
            </div>
            {/*GÖNDERİLER*/}
            <div></div>
        </div>
        </>
    )
}