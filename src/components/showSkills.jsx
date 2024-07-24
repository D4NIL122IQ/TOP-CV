import { useState } from "react";

function DisplaySkills({skil , supprimer ,index, maj}) {
    return (
        <div className="compete">  
            <input type="text"  value={skil} onChange={(e)=>{maj(index ,e.target.value)}} />
            <button onClick={()=>{supprimer(index)}} id="supprimer">Supprimer</button>
        </div>
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
        <div className="skills">  
            <h1>Compétences</h1>
            <div className="competeContainer">
            {skillsDispo.map((sk,index)=>(
                <DisplaySkills key={index} skil={sk} index={index} supprimer={supSkil} maj={majSkil}/>
            ))}
            </div>
            <div className="btn">
            <button onClick={()=>{ajouterSkil(); maj(skillsDispo)}} id="ajouter">Ajouter</button>
            <button onClick={()=>{maj(skillsDispo); annuler(false)}} id="confirmation">Confirmer</button>
            <button onClick={()=>{ annuler(false)}} id="annulation">Annuler</button>
            </div>
        </div>
    )
}