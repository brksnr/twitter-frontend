export function Posts(){
    return (
        <>
        <button className="flex border-b border-gray-700 pb-3 hover:bg-gray-800">
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
            </button>
        </>
    )
}