
import {useState} from 'react'


function AfficherFormation({education ,index , maj , sup}) {
    return (
        <>
        <h2>{index+1} _</h2>
        <label htmlFor="degree">Niveau</label>
        <input type='text' name='degree' onChange={(e)=>{maj(index,{...education , degree: e.target.value})}} value={education.degree}/>
        <label htmlFor="school">Etablissement</label>
        <input type='text' name='school'onChange={(e)=>{maj(index,{...education , school: e.target.value})}} value={education.school}/>
        <label htmlFor="start">Annee d'entrer</label>
        <input type="number" name='start' onChange={(e)=>{maj(index,{...education , start: e.target.value})}} value={education.start}/>
        <label htmlFor="end">Annee de sortie</label>
        <input type="number" name='end' onChange={(e)=>{maj(index,{...education , end: e.target.value})}} value={education.end}/>
        <label htmlFor="loc">Localisation</label>
        <input type='text' name='loc' onChange={(e)=>{maj(index,{...education , location: e.target.value})}} value={education.location}/>
        <input type="button" value="supprimer" onClick={()=>{sup(index)}} />
        </>
    )
}

export default function AddingNewEducation({annuler , formation , maj}) {
    const [education , setEducation] = useState(formation)
    const majEduc =(index , update)=>{
        setEducation(()=>{
            const temp = [...education];
            temp[index] = update;
            return temp;
        })
    }
    const supEduc =(index)=>{
        setEducation (()=>{
            return [...education].filter((_,i)=> i != index)
        })
    }
    const ajouterEduc =()=>{
        setEducation(()=>{
            return [...education , {school: "", degree: "", start: "", end: "", location: ""}]
        })
    }
    return (
        <>
            <h1>Information Educative</h1>
            {education.map((educ,index)=>(
                <AfficherFormation key={index} education={educ} index={index} maj={majEduc} sup={supEduc}/>
            ))}
            <input type="button" value="Ajouter" onClick={()=>{ajouterEduc(), maj(education)}}/>
            <input type="button" value="Confirmer" onClick={()=>{maj(education); annuler(false)}}/>
            <input type="button" value="Annuler" onClick={()=>{annuler(false)}}/>
        </>
    )
    
}