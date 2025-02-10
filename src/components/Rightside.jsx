import { KimiTakipEtmeli } from "./KimiTakipEtmeli";
import { NelerOluyor } from "./NelerOluyor";

export function Rightside(){
    return (
        <>
        <div className="pl-6 pt-2 flex-col gap-4 hidden 2xl:flex">
        {/* SEARCH BAR */}
        <div>
            <input
             type="search" 
             placeholder="Ara..."
             className="bg-black border border-gray-700 rounded-full w-80 h-12"
             />
        </div>
        {/* GÜNDEM */}
        <div className="flex flex-col gap-4">
            <NelerOluyor/>
            <div>
            <KimiTakipEtmeli/>
            </div>
        </div>
        </div>
        </>
    )
}