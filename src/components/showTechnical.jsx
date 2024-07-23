import { useState } from "react";

function SetSkills({info, maj, index , sup}){
    console.log(index)
    return (
    <>
        <label htmlFor={`title-${index}`}>Title</label>
        <input type="text" id={`title-${index}`} value={info.title} onChange={(e)=>{maj(index,{...info, title: e.target.value})}}/>
        <label htmlFor={`description-${index}`} >Contenue</label>
        <input type="text" id={`description-${index}`} value={info.description}  onChange={(e)=>{maj(index, {...info, description: e.target.value})}}/>
        <input type="button" value="Supprimer" onClick={()=>{sup(index)}} id="delete"/>
    </>)
}

export default function AfficherTech ({annuler , tabTechSkill , maj}){
    const [skillDispo , setskillDispo] = useState(tabTechSkill)
    
    const majTechSkill = (index, updatedSkill) => {
        setskillDispo(() => {
            const newTechSkills = [...skillDispo];
            newTechSkills[index] = updatedSkill;
            return newTechSkills;
        });
        };
    const supTechSkill=(index)=>{
        setskillDispo(()=>{
            return [...skillDispo].filter((_,i)=>i!=index)
        })
    }
    const ajouterLigneTabTechSkill = ()=>{
        setskillDispo(()=>{
            if(skillDispo.length >10){return skillDispo}
            return [...skillDispo, {title:"",description:""}]
        })
    }
    return (
        <div>
            <div>
                {skillDispo.map((sk,index)=>{
                   return <SetSkills info={sk} index={index} maj={majTechSkill} key={index} sup={supTechSkill}/>
                })}
            </div>
            <button type="button" onClick={()=>{ajouterLigneTabTechSkill(); maj(skillDispo)}} id="add">Ajouter</button>
            <button type="button" onClick={()=>{maj(skillDispo);annuler(false)}} id="submit">Confirmer</button>
            <button type="button" onClick={()=>{annuler(false)}} id="cancel">Annuler</button>
        </div>
    )
}