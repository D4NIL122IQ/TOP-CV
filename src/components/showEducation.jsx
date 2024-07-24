import '../style/generalStyleForForm.css'
import {useState} from 'react'


function AfficherFormation({education ,index , maj , sup}) {
    return (
        <div className='formation'>
        <div>
        <label htmlFor="degree">Niveau : </label>
        <input type='text' name='degree' onChange={(e)=>{maj(index,{...education , degree: e.target.value})}} value={education.degree}/>
        </div>
        <div>
        <label htmlFor="school">Etablissement : </label>
        <input type='text' name='school'onChange={(e)=>{maj(index,{...education , school: e.target.value})}} value={education.school}/>
        </div>
        <div>
        <label htmlFor="start">Annee d'entrer : </label>
        <input type="number" name='start' onChange={(e)=>{maj(index,{...education , start: e.target.value})}} value={education.start}/>
        </div>
        <div>
        <label htmlFor="end">Annee de sortie : </label>
        <input type="number" name='end' onChange={(e)=>{maj(index,{...education , end: e.target.value})}} value={education.end}/>
        </div>
        <div>
        <label htmlFor="loc">Localisation : </label>
        <input type='text' name='loc' onChange={(e)=>{maj(index,{...education , location: e.target.value})}} value={education.location}/>
        </div>
        <button id='supprimer' onClick={()=>{sup(index)}} >Supprimer</button>
        </div>
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
            if([...education].length >4 ){
                return [...education]
            }else{
                return [...education , {school: "", degree: "", start: "", end: "", location: ""}]
            }
        })
    }
    return (
        <div className='educ'>
            <h1>Formation</h1>
            <div>
            {education.map((educ,index)=>(
                <AfficherFormation key={index} education={educ} index={index} maj={majEduc} sup={supEduc}/>
            ))}
            </div>
            <div className='btn'>
                <button onClick={()=>{ajouterEduc(), maj(education)}} id='ajouter'>Ajouter</button>
                <button onClick={()=>{maj(education); annuler(false)}} id='confirmation'>Confirmer</button>
                <button onClick={()=>{annuler(false)}} id='annulation'> Annuler</button>
            </div>
        </div>
    )
    
}