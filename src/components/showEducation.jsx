
import {useState} from 'react'


export default function AddingNewEducation({annuler}) {
    const [education , setEducation] = useState({
        school: "abderahmane mira",
        degree: "Licence",
        start: "2022",
        end: "2025",
        location: "bejaia"
    })
    return <div className='Add'>
        <h1>Information Educative</h1>
        <label htmlFor="degree">Niveau</label>
        <input type='text' name='degree' onChange={(e)=>{setEducation({...education , degree: e.target.value})}} value={education.degree}/>
        <label htmlFor="school">Etablissement</label>
        <input type='text' name='school'onChange={(e)=>{setEducation({...education , school: e.target.value})}} value={education.school}/>
        <label htmlFor="start">Annee d'entrer</label>
        <input type="number" name='start' onChange={(e)=>{setEducation({...education , start: e.target.value})}} value={education.start}/>
        <label htmlFor="end">Annee de sortie</label>
        <input type="number" name='end' onChange={(e)=>{setEducation({...education , end: e.target.value})}} value={education.end}/>
        <label htmlFor="loc">Localisation</label>
        <input type='text' name='loc' onChange={(e)=>{setEducation({...education , location: e.target.value})}} value={education.location}/>
        <input type="button" value="Ajouter"/>
        <input type="button" value="Annuler" onClick={()=>{annuler(false)}}/>
    </div> 
    
}