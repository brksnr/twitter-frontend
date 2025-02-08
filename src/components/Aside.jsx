export function Aside(){
        const button = "flex items-center gap-5 rounded-full w-fit pr-5 pl-2 h-12 hover:bg-darkgray text-xl font-medium"
    return (
        <>
        <div className="bg-black pt-2">
        <ul className="text-white xl:min-w-Aside xl:items-end h-screen flex flex-col gap-10">
            <div className="flex flex-col gap-3 min-w-64">
            <button className="flex items-center gap-5 rounded-full w-fit p-2 h-10 hover:bg-darkgray text-3xl font-bold"><i class="fa-solid fa-x"></i></button>
            <button className={button}>
                <i class="fa-solid fa-house"></i>
                <p className="hidden xl:flex">Anasayfa</p>
            </button>
            <button className={button}>
                <i class="fa-solid fa-magnifying-glass"></i>
                <p className="hidden xl:flex">Keşfet</p>
            </button>
            <button className={button}><i className="fa-regular fa-bell"></i><p className="hidden xl:flex">Bildirimler</p></button>
            <button className={button}><i className="fa-regular fa-envelope"></i><p className="hidden xl:flex">Mesajlar</p></button>
            <button className={button}><i className="fa-solid fa-hand-holding-heart"></i><p className="hidden xl:flex">Grok</p></button>
            <button className={button}><i className="fa-regular fa-bookmark"></i><p className="hidden xl:flex">Yer İşaretleri</p></button>
            <button className={button}><i className="fa-solid fa-briefcase"></i><p className="hidden xl:flex">İşler</p></button>
            <button className={button}><i className="fa-solid fa-user-group"></i><p className="hidden xl:flex">Topluluklar</p></button>
            <button className={button}><i className="fa-regular fa-circle-check"></i><p className="hidden xl:flex">Premium</p></button>
            <button className={button}><i className="fa-solid fa-poo-storm"></i><p className="hidden xl:flex">Onaylı Kuruluşlar</p></button>
            <button className={button}><i className="fa-regular fa-user"></i><p className="hidden xl:flex">Profil</p></button>
            <button className={button}><i className="fa-solid fa-ellipsis"></i><p className="hidden xl:flex">Daha Fazla</p></button>
            <button className="bg-white text-black flex items-center justify-center gap-5 rounded-full w-56 h-12 text-xl font-medium"><p className="hidden xl:flex">Gönderi yayınla</p></button>
            </div>
        </ul>
        </div>
        </>
    )
}