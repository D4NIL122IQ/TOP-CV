import '../style/generalStyleForForm.css'
import {useState} from 'react'

function AfficherProfil({annuler}) {
  const [nom, setNom] = useState('Hatake Kakashi');
  const [statut, setStatut] = useState('Enseignant');
  const [telephone, setTelephone] = useState('+1 123-456-789');
  const [email, setEmail] = useState('kakashi@exemple.com');
  const [adresse, setAdresse] = useState('12 rue je sais pas, konoha');

  return (
    <div>
      <h1>Information Personnel</h1>
      <label htmlFor="fname">Nom et Prénom</label>
      <input
        type='text'
        id='fname'
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <label htmlFor="function">Statut</label>
      <input
        type='text'
        id='function'
        value={statut}
        onChange={(e) => setStatut(e.target.value)}
      />
      <label htmlFor="phone">Téléphone</label>
      <input
        type='tel'
        id='phone'
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
      />
      <label htmlFor="mail">E-mail</label>
      <input
        type='email'
        id='mail'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="adrs">Adresse</label>
      <input
        type='text'
        id='adrs'
        value={adresse}
        onChange={(e) => setAdresse(e.target.value)}
      />
      <input type="button" value="Sauvgarder" />
      <input type="button" value="Annuler" onClick={()=>{annuler(false)}} />
    </div>)
}


  export default AfficherProfil