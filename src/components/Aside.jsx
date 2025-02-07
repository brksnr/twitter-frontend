export function Aside(){
    return (
        <>
        <div className="bg-black pt-2">
        <ul className="text-white max-w-Aside items-end h-screen flex flex-col gap-10">
            <div className="flex flex-col gap-3 min-w-64">
            <li><button className="flex items-center gap-5 rounded-full w-42 p-2 h-10 hover:bg-darkgray text-3xl font-bold"><i class="fa-solid fa-x"></i></button></li>
            <li><button className="flex items-center gap-5 rounded-full w-42 pr-5 pl-2 h-12 hover:bg-darkgray text-xl font-medium"><i class="fa-solid fa-house"></i> Ana Sayfa</button></li>
            <li><button className="flex items-center gap-5 rounded-full w-42 pr-5 pl-2 h-12 hover:bg-gray-500 text-xl font-medium"><i class="fa-solid fa-magnifying-glass"></i>Keşfet</button></li>
            <li><button className="flex items-center gap-5 rounded-full w-42 pr-5 pl-2 h-12 hover:bg-gray-500 text-xl font-medium"><i class="fa-regular fa-bell"></i>Bildirimler</button></li>
            <li><button className="flex items-center gap-5 rounded-full w-42 pr-5 pl-2 h-12 hover:bg-gray-500 text-xl font-medium"><i class="fa-regular fa-envelope"></i>Mesajlar</button></li>
            <li><button className="flex items-center gap-5 rounded-full w-42 pr-5 pl-2 h-12 hover:bg-gray-500 text-xl font-medium"><i class="fa-solid fa-hand-holding-heart"></i>Grok</button></li>
            <li><button className="flex items-center gap-5 rounded-full w-42 pr-5 pl-2 h-12 hover:bg-gray-500 text-xl font-medium"><i class="fa-regular fa-bookmark"></i>Yer İşaretleri</button></li>
            <li><button className="flex items-center gap-5 rounded-full w-42 pr-5 pl-2 h-12 hover:bg-gray-500 text-xl font-medium"><i class="fa-solid fa-briefcase"></i>İşler</button></li>
            <li><button className="flex items-center gap-5 rounded-full w-42 pr-5 pl-2 h-12 hover:bg-gray-500 text-xl font-medium"><i class="fa-solid fa-user-group"></i>Topluluklar</button></li>
            <li><button className="flex items-center gap-5 rounded-full w-42 pr-5 pl-2 h-12 hover:bg-gray-500 text-xl font-medium"><i class="fa-regular fa-circle-check"></i>Premium</button></li>
            <li><button className="flex items-center gap-5 rounded-full w-42 pr-5 pl-2 h-12 hover:bg-gray-500 text-xl font-medium"><i class="fa-solid fa-poo-storm"></i>Onaylı Kuruluşlar</button></li>
            <li><button className="flex items-center gap-5 rounded-full w-42 pr-5 pl-2 h-12 hover:bg-gray-500 text-xl font-medium"><i class="fa-regular fa-user"></i>Profil</button></li>
            <li><button className="flex items-center gap-5 rounded-full w-42 pr-5 pl-2 h-12 hover:bg-gray-500 text-xl font-medium"><i class="fa-solid fa-ellipsis"></i>Daha Fazla</button></li>
            <li><button className="bg-white text-black flex items-center justify-center gap-5 rounded-full w-full h-12 text-xl font-medium">Gönderi yayınla</button></li>
            </div>
        </ul>
        </div>
        </>
    )
}