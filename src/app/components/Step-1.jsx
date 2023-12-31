import Parfume from "./Parfume"

export default function Step1(props) {
// let genders = ["men","women","unisex"];
let genders = [{title:"men", emoji:"🕺",dansk:"Mand"}, {title:"women", emoji:"💃",dansk:"Kvinde"},{title:"unisex", emoji:"👩‍❤️‍👨",dansk:"Unisex"}];
    return(
        <section className=" grid gap-10 ">
        <h1 className="text-center">Hvem er det til ?</h1>
         <div className="flex justify-around items-center  gap-7 m-8 flex-wrap"> 
        {genders.map((gender)=>(
            <Parfume key={gender} setFinalId={ props.setFinalId} type={props.type} setType={props.setType} gender={gender}/> 
        ))}
         </div> 
        </section>

    )

    }