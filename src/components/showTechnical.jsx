import "../style/generalStyleForForm.css"
import { useState } from "react";

function SetSkills({info, maj, index , sup}){
    return (
    <div className="tech">
        <label htmlFor={`title-${index}`}>Titre : </label>
        <input type="text" id={`title-${index}`} value={info.title} onChange={(e)=>{maj(index,{...info, title: e.target.value})}}/>
        <label htmlFor={`description-${index}`} > Contenue : </label>
        <input type="text" id={`description-${index}`} value={info.description}  onChange={(e)=>{maj(index, {...info, description: e.target.value})}}/>
        <div>
        <button onClick={()=>{sup(index)}} id="supprimer">Supprimer</button>
        </div>
   </div>)
}

export default function AfficherTech ({annuler , tabTechSkill , maj}){
    const [teckskilDispo , setteckskilDispo] = useState(tabTechSkill)
    
    const majTechSkill = (index, updatedSkill) => {
        setteckskilDispo(() => {
            const newTechSkills = [...teckskilDispo];
            newTechSkills[index] = updatedSkill;
            return newTechSkills;
        });
        };
    const supTechSkill=(index)=>{
        setteckskilDispo(()=>{
            return [...teckskilDispo].filter((_,i)=>i!=index)
        })
    }
    const ajouterLigneTabTechSkill = ()=>{
        setteckskilDispo(()=>{
            if(teckskilDispo.length >10){return teckskilDispo}
            return [...teckskilDispo, {title:"",description:""}]
        })
    }
    return (
        <div className="technique">
            <h1>Compétence Technique</h1>
            <div>
                {teckskilDispo.map((sk,index)=>{
                   return <SetSkills info={sk} index={index} maj={majTechSkill} key={index} sup={supTechSkill}/>
                })}
            </div>
            <div className="btn">
            <button type="button" onClick={()=>{ajouterLigneTabTechSkill(); maj(teckskilDispo)}} id="ajouter">Ajouter</button>
            <button type="button" onClick={()=>{maj(teckskilDispo);annuler(false)}} id="confirmation">Confirmer</button>
            <button type="button" onClick={()=>{annuler(false)}} id="annulation">Annuler</button>
            </div>
        </div>
    )
}