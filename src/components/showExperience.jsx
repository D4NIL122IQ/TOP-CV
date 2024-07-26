import {useState} from 'react'

function DisplayExp({ex , index , supprimer , maj}) {
    return (
        <div className='expp'>
            <div>
                <label htmlFor="company">Companie : </label>
                <input type="text" id="company" value={ex.company} onChange={(e)=>{maj(index ,{...ex , company:e.target.value})}} />
            </div>
            <div>
                <label htmlFor="fonction">Fonction : </label>
                <input type="text" id="fonction" value={ex.fonction} onChange={(e)=>{maj(index ,{...ex , fonction:e.target.value})}}/>
            </div>
            <div>
                <label htmlFor="location">Localisation : </label>
                <input type="text" id="location" value={ex.location} onChange={(e)=>{maj(index ,{...ex , location:e.target.value})}}/>
            </div>
            <div>
                <label htmlFor="start">Debut : </label>
                <input type="text" id="start" value={ex.start} onChange={(e)=>{maj(index ,{...ex , start:e.target.value})}}/>
            </div>
            <div>
                <label htmlFor="end">Fin : </label>
                <input type="text" id="end" value={ex.end} onChange={(e)=>{maj(index ,{...ex , end:e.target.value})}}/>
            </div>
            <div>
                <label htmlFor="description">Description : </label>
                <input type="text"  id="description" value={ex.description} onChange={(e)=>{maj(index ,{...ex , description:e.target.value})}}/>
            </div>
            <button onClick={()=>{supprimer(index)}} id='supprimer'>Supprimer</button>
        </div>
    )
}

export default function AfficherExerience({exp ,annuler , maj}) {
    const [xp , setXp] =  useState(exp)
    const majXp = (index , update)=>{
        setXp(()=>{
            const temp = [...xp]
            temp[index]= update
            return temp
        })
    }
    const supXp = (index)=>{
        setXp(()=>{
            return [...xp].filter((_,i) => i!=index)
        })
    }
    const ajouterXp = ()=>{
        setXp(()=>{
            if([...xp].length >5){
                return [...xp]
            }else{
                return [...xp , {company:"",fonction:"",location: "", description: "" , start:"", end:""}]
            }

        })
    }

    return (
        <div className='experience'>
            <h1>Experience</h1>
            <div>
            {xp.map((exp , index)=>(
                <DisplayExp ex ={exp} index={index} supprimer={supXp} maj={majXp} key={index} />
            ))}
            </div>
            <div className='btn'>
                <button onClick={()=>{ajouterXp(); maj(xp)}} id='ajouter'>Ajouter</button>
                <button onClick={()=>{maj(xp); annuler(false)}} id="confirmation">Confirmer</button>
                <button onClick={()=>{annuler(false)}} id="annulation">Annuler</button>
            </div>
        </div>
    )
}