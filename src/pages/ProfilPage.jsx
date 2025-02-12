import { Aside } from "../components/Aside";
import { Profile } from "../components/Profile";
import { Rightside } from "../components/Rightside";

export function ProfilPage(){
    return(
        <>
        <div className="bg-black flex">
        <Aside/>
        <Profile/>
        <Rightside/>
        </div>
        </>
    )
}