export function Aside(){
        const button = "flex items-center gap-5 rounded-full w-fit pr-5 pl-2 h-12 hover:bg-darkgray text-xl font-medium"
    return (
        <>
        <div className="bg-black pt-2">
        <ul className="text-white w-12 sm:w-12 md:w-60 lg:w-96 xl:w-Aside lg:items-end h-screen flex flex-col gap-10">
            <div className="flex flex-col gap-3 min-w-64">
            <button className="flex items-center gap-5 rounded-full w-fit p-2 h-10 hover:bg-darkgray text-3xl font-bold"><i class="fa-solid fa-x"></i></button>
            <button className={button}>
                <i class="fa-solid fa-house"></i>
                <p className="hidden md:flex">Anasayfa</p>
            </button>
            <button className={button}>
                <i class="fa-solid fa-magnifying-glass"></i>
                <p className="hidden md:flex">Keşfet</p>
            </button>
            <button className={button}><i className="fa-regular fa-bell"></i><p className="hidden md:flex">Bildirimler</p></button>
            <button className={button}><i className="fa-regular fa-envelope"></i><p className="hidden md:flex">Mesajlar</p></button>
            <button className={button}><i className="fa-solid fa-hand-holding-heart"></i><p className="hidden md:flex">Grok</p></button>
            <button className={button}><i className="fa-regular fa-bookmark"></i><p className="hidden md:flex">Yer İşaretleri</p></button>
            <button className={button}><i className="fa-solid fa-briefcase"></i><p className="hidden md:flex">İşler</p></button>
            <button className={button}><i className="fa-solid fa-user-group"></i><p className="hidden md:flex">Topluluklar</p></button>
            <button className={button}><i className="fa-regular fa-circle-check"></i><p className="hidden md:flex">Premium</p></button>
            <button className={button}><i className="fa-solid fa-poo-storm"></i><p className="hidden md:flex">Onaylı Kuruluşlar</p></button>
            <button className={button}><i className="fa-regular fa-user"></i><p className="hidden md:flex">Profil</p></button>
            <button className={button}><i className="fa-solid fa-ellipsis"></i><p className="hidden md:flex">Daha Fazla</p></button>
            <button className="sm:flex bg-white text-black flex items-center justify-center gap-5 rounded-full w-10 h-10 md:w-56 md:h-12 text-xl font-medium">
                <p className="hidden md:flex">Gönderi yayınla</p>
                <i className="fa-solid fa-circle-plus md:hidden"></i>
                </button>
            </div>
        </ul>
        </div>
        </>
    )
}