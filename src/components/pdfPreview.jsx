import { useRef } from "react"
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import svgPhone from '../assets/phone.svg'
import svgLocation from '../assets/location.svg'
import svgEmail from '../assets/email.svg'

function AfficherFormation ({formation}){
    return (
        <div id="education">
            <div>
            <h3 id="titre">-{formation.degree}</h3>
            <h4 id="localisation">{formation.school}</h4>
            </div>
            <h5>{formation.start} - {formation.end}</h5>
        </div>
    )
}

function AfficherExperience({exp}){
    console.log(exp)
    return (
        <div id="experience">
            <div>
                <h3>-{exp.fonction}</h3>
                <p>{exp.start} - {exp.end}</p>
            </div>
            <h4>{exp.company}</h4>
            <h4>{exp.location}</h4>
            <p>{exp.description}</p>
        </div>
    )
}

export default function AfficherPreview({infoPerso ,infoFormation , infoPro , infoSkills ,infoTechSkills}) {
    const cvRef = useRef()

    const handelTelechargerPdf = async ()=>{
        const element = cvRef.current;
    

        const canvas = await html2canvas(element, { scale: 2, useCORS: true });
        const imgData = canvas.toDataURL('image/png');
    
        // Détermine la largeur de la fenêtre en pixels
        const windowWidthPx = window.innerWidth;
    
        // Calcule 70vw en pixels
        const elementWidthPx = windowWidthPx * 0.70;
    
        // Convertit les pixels en millimètres
        const elementWidthMm = elementWidthPx * 0.264583; // 1 pixel = 0.264583 mm
    
        // Hauteur en millimètres (297mm)
        const elementHeightMm = 297;
    
        // Crée un nouveau document PDF avec jsPDF
        const pdf = new jsPDF('p', 'mm', 'a4'); // Mode portrait, unités en mm, format A4
    
        // Ajuste les dimensions de l'image pour l'adapter à la page A4
        const imgWidth = 210; // Largeur en mm pour A4
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Ajustement de la hauteur pour maintenir le ratio
    
        // Ajoute l'image capturée au PDF
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
    
        // Sauvegarde le PDF
        pdf.save('cv.pdf');
    }
    return(
        <>
        <div ref={cvRef} className="cvpdf">
            <div id="aside">
                <div>
                    <h2>Contacte</h2>
                    <div id="info">
                        <img src={svgLocation} alt="Location Logo" width="25px" />
                        <h4>{infoPerso.adrs}</h4>
                    </div>
                    <div id="info">
                        <img src={svgPhone} alt="Phone Logo" width="25px"/>
                        <h4>{infoPerso.phone}</h4>
                    </div>
                    <div id="info">
                        <img src={svgEmail} alt="Email Logo" width="25px"/>
                        <h4>{infoPerso.mail}</h4>
                    </div>
                </div>
                <div>
                    <h2>Competence</h2>
                    <ul>
                        {infoSkills.map((skill,i)=>{
                            return <li key={i}>{skill}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <h2>Competence Technique</h2>
                    {infoTechSkills.map((tsk,i)=>{
                        return (
                            <div id="tsk" key={i}>
                                <h3>{tsk.title} : </h3>
                                <p>{tsk.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div id="article">
                <div id="head">
                    <h1>{infoPerso.fullname}</h1>
                    <p>{infoPerso.func}</p>
                </div>
                <hr />
                <div id="formation">
                    <h2>Formation</h2>
                    {infoFormation.map((forma,i)=>{
                        return <AfficherFormation formation={forma} key={i} />
                    })}
                </div>
                <hr />
                <div id="Exp">
                    <h2>Experience</h2>
                    {infoPro.map((pro,i)=>{
                        return <AfficherExperience exp={pro} key={i} />
                    })}
                </div>
            </div>
            
        </div>
        <button onClick={handelTelechargerPdf}>Telecharger</button>
        </>
    )
}

