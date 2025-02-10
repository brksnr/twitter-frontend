export function UserBox(){
    return (
        <>
        <button className="flex items-center justify-between w-full rounded-full mt-12 px-2 py-7  h-12 hover:bg-gray-700 text-xl font-medium">
            <div className="flex items-center gap-1">
                <img src="images/berksener.jpg" className="w-9 h-9 rounded-full">{/* profil gG */}</img>
                <div>
                <p className="font-bold text-base">Username</p>
                <p className="text-base text-darkgray">@username</p>
            </div>
            </div>
            <div>
                <button><i className="text-white fa-solid fa-ellipsis hover:bg-blue w-7 h-7 rounded-full flex justify-center items-center"></i></button>
            </div>
        </button>
        </>
    )
}