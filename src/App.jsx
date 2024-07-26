import { useState } from 'react'
import './App.css'
import Modal from 'react-modal'
import "./style/style.css"
import { FaGithub } from "react-icons/fa";
import AfficherProfil from './components/showPersonnalForm';
import  AddingNewEducation from './components/showEducation.jsx'
import AfficherTech from './components/showTechnical.jsx';
import AfficherSkills from './components/showSkills.jsx';
import AfficherExerience from './components/showExperience.jsx';

import AfficherPreview from './components/pdfPreview.jsx';



function App() {
  const [profil , setprofil] = useState(false)
  const [education , seteducation] = useState(false)
  const [exp , setExp] = useState(false)
  const [tech , settech] = useState(false)
  const [skill , setskill] = useState(false) 

  const [infoperso, majInfoperson] =useState({
    fullname:"Hatake Kakashi",
    func:"Enseignant",
    mail:"kakashi@exemple.com",
    adrs:"12 rue jsp, Konoha",
    phone: "+1 123-456-789"})
   
  const [formation ,setFormation] =useState([{
    school: "abderahmane mira",
    degree: "Licence",
    start: "2022",
    end: "2025",
    location: "bejaia"
    }])

  const [experience , setExperience] = useState([{
    company:"Dawasushi",
    fonction:"Devloppeur web",
    location: "Bejaia",
    description: "je me suis occuper de frontend de leurs site presentation",
    start:"Juin 2024",
    end: "Maintenant"
  }])
  const [techSkillDispo , settechSkillDispo] = useState([
    {title:"Language" ,description:"HTML, CSS, JavaScript"},
    {title:"framework", description:"React, NodeJs"}])

  const [skills , setSkills] = useState([
    "talenteux", "Sportif" ,"Creatif"
  ])
  
  let widthModal
  if(window.innerWidth > 600){
      widthModal = "500px"
  }else if(window.innerWidth > 320){
      widthModal = "350px"
  }
  const styleModal ={
    content: {
      color: 'black',
      width: widthModal,
      padding: '20px',
      borderRadius: '10px',
      margin: '0px auto',
      dispay: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      textAlign:"center"
    },
  }
  

  

  return (
    <>
    <section>
      {/* buttons pour choisir une section */}
    <div className='choixButton'>
      <button onClick={()=>{ setprofil(!profil) }}> Profil </button>

      <button onClick={()=>{ seteducation(!education)}}> Ajouter Education</button>

      <button onClick={()=>{ setExp(!exp)}}>Experience</button>

      <button onClick={()=>{ setskill(!skill)}}> Skills </button>

      <button onClick={()=>{ settech(!tech)}}> Technical Skills </button>
    </div>

    {/* modal de chaque section */}

    <Modal isOpen={profil} onRequestClose={() => setprofil(false)} style={styleModal} ariaHideApp={false}>
      <AfficherProfil annuler={setprofil} variab={infoperso} majvariab={majInfoperson}/> 
    </Modal>
    

    <Modal isOpen={education} onRequestClose={() => seteducation(false)} style={styleModal} ariaHideApp={false}>
      <AddingNewEducation annuler={seteducation} formation={formation} maj={setFormation} />
    </Modal>

    <Modal isOpen={exp}  onRequestClose={() => setExp(false)} style={styleModal} ariaHideApp={false}>
      <AfficherExerience annuler={setExp} exp={experience} maj={setExperience} />
    </Modal>

    <Modal isOpen={skill} onRequestClose={() => setskill(false)} style={styleModal} ariaHideApp={false}>
      <AfficherSkills annuler={setskill} skills={skills} maj={setSkills}/>
    </Modal>

    <Modal isOpen={tech} onRequestClose={() => settech(false)} style={styleModal} ariaHideApp={false}>
      <AfficherTech annuler={settech} tabTechSkill={techSkillDispo} maj={settechSkillDispo}/>
    </Modal>

    <div className='preview'>
      <AfficherPreview infoPerso={infoperso} infoFormation={formation} infoPro={experience} infoSkills={skills} infoTechSkills={techSkillDispo} />
     </div>
    </section>
    <footer>
      <a href="http://github.com/D4NIL122IQ" target="_blank" rel="noopener noreferrer"><FaGithub/>By Danil gdj</a>    
    </footer>
    </>
  )
}

export default App
