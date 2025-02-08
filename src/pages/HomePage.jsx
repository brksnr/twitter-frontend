import { Aside } from "../components/Aside";
import { Middleside } from "../components/Middleside";
import { Rightside } from "../components/Rightside";

export function HomePage(){
    return (
        <>
        <div className="flex bg-black">
        <Aside/>
        <Middleside/>
        <Rightside/>
        </div>
        </>
    )
}