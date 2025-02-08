export function Middleside(){
    return (
        <>
        <div className="border border-gray-700 min-w-middle flex flex-col text-white">
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
                    <img src="images/berksener.jpg" className="w-10 h-9 rounded-full">{/* profil gG */}</img>
                </div>
                <div className="flex flex-col w-full">
                    <div className="w-full">
                        <textarea
                        placeholder="Neler Oluyor"
                        className="w-full max-h-20 min-h-20 bg-black px-3 pt-5 text-xl resize-none"/>
                    </div>
                    <div className="flex justify-between text-blue">
                        <div className="flex items-center gap-2">
                                <button className="hover:bg-darkgray w-7 h-7 rounded-full"><i className="fa-regular fa-image"></i></button>
                                <button className="hover:bg-darkgray w-7 h-7 rounded-full"><i className="fa-solid fa-person-walking"></i></button>
                                <button className="hover:bg-darkgray w-7 h-7 rounded-full"><i className="fa-solid fa-hand-holding-heart"></i></button>
                                <button className="hover:bg-darkgray w-7 h-7 rounded-full"><i className="fa-solid fa-square-poll-horizontal"></i></button>
                                <button className="hover:bg-darkgray w-7 h-7 rounded-full"><i className="fa-regular fa-face-smile"></i></button>
                                <button className="hover:bg-darkgray w-7 h-7 rounded-full"><i className="fa-solid fa-calendar-days"></i></button>
                                <button className="hover:bg-darkgray w-7 h-7 rounded-full"><i className="fa-solid fa-location-dot"></i></button>
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