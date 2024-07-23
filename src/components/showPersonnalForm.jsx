import '../style/generalStyleForForm.css'
import {useState} from 'react'

function AfficherProfil({annuler, variab ,majvariab}) {
  const [infoperso , setinfoperso] = useState(variab)

  return (
    <div>
      <h1>INFORMATIONS</h1>
      <label htmlFor="fname">Nom et Prénom</label>
      <input
        type='text'
        id='fname'
        value={infoperso.fullname}
        onChange={(e) => setinfoperso({...infoperso , fullname:e.target.value})}
      />
      <label htmlFor="function">Statut</label>
      <input
        type='text'
        id='function'
        value={infoperso.func}
        onChange={(e) => setinfoperso({...infoperso , func:e.target.value})}
      />
      <label htmlFor="phone">Téléphone</label>
      <input
        type='tel'
        id='phone'
        value={infoperso.phone}
        onChange={(e) => setinfoperso({...infoperso , phone: e.target.value})}
      />
      <label htmlFor="mail">E-mail</label>
      <input
        type='email'
        id='mail'
        value={infoperso.mail}
        onChange={(e) => setinfoperso({...infoperso , mail: e.target.value})}
      />
      <label htmlFor="adrs">Adresse</label>
      <input
        type='text'
        id='adrs'
        value={infoperso.adrs}
        onChange={(e) => setinfoperso({...infoperso , adrs:e.target.value})}
      />
      <input type="button" value="Sauvgarder" onClick={()=>{majvariab(infoperso);{/*maj dans le pdf*/};annuler(false)}}/>
      <input type="button" value="Annuler" onClick={()=>{annuler(false)}} />
    </div>)
}


  export default AfficherProfil