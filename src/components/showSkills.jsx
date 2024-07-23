import { useState } from "react";

function DisplaySkills({skil , supprimer ,index, maj}) {
    return (
        <>  
            <input type="text"  value={skil} onChange={(e)=>{maj(index ,e.target.value)}} />
            <input type="button" value="Supprimer" onClick={()=>{supprimer(index)}}/>
        </>
    )
}

export default function AfficherSkills ({annuler , skills , maj}){
    const [skillsDispo , setSkillsDispo] = useState(skills)

    const majSkil =(index , update)=>{
        setSkillsDispo(()=>{
            const tempSkills = [...skillsDispo]
            tempSkills[index] = update
            return tempSkills
        })
    }
    const supSkil =(index)=>{
        setSkillsDispo(()=>{
            return [...skillsDispo].filter((_,i)=> i != index)
        })
    } 
    const ajouterSkil =()=>{
        setSkillsDispo(()=>{
            if ([...skillsDispo].length > 7) {
                return skillsDispo
            } else {
                return [...skillsDispo, ""]
            }
        })
    }

    return(
        <>  
            {skillsDispo.map((sk,index)=>(
                <DisplaySkills key={index} skil={sk} index={index} supprimer={supSkil} maj={majSkil}/>
            ))}
            <button onClick={()=>{ajouterSkil(); maj(skillsDispo)}}>Ajouter</button>
            <button onClick={()=>{maj(skillsDispo); annuler(false)}}>Confirmer</button>
            <button onClick={()=>{ annuler(false)}}>Annuler</button>
        </>
    )
}