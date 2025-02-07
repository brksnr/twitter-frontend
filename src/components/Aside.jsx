export function Aside(){
    return (
        <>
        <div className="bg-black">
        <ul className="border text-white max-w-Aside items-end max-h-screen flex flex-col gap-10">
            <div className="border flex flex-col gap-12 min-w-64">
            <li><button className="border rounded-full w-40 h-12"><i class="fa-solid fa-x"></i> Ana Sayfa</button></li>
            <li><button className="border"><i class="fa-solid fa-house"></i> Ana Sayfa</button></li>
            <li><i class="fa-solid fa-magnifying-glass"></i>Keşfet</li>
            <li><button><i class="fa-regular fa-bell"></i>Bildirimler</button></li>
            <li><button><i class="fa-regular fa-envelope"></i>Mesajlar</button></li>
            <li><button>Grok</button></li>
            <li><button><i class="fa-regular fa-bookmark"></i>Yer İşaretleri</button></li>
            <li><button><i class="fa-solid fa-briefcase"></i>İşler</button></li>
            <li><button><i class="fa-solid fa-user-group"></i>Topluluklar</button></li>
            <li><button><i class="fa-regular fa-circle-check"></i>Premium</button></li>
            <li><button><i class="fa-solid fa-cloud-bolt"></i>Onaylı Kuruluşlar</button></li>
            <li><button><i class="fa-regular fa-user"></i>Profil</button></li>
            <li><button><i class="fa-regular fa-user"></i>Profil</button></li>
            <li><button>Gönderi yayınla</button></li>
            </div>
        </ul>
        </div>
        </>
    )
}