import '../style/generalStyleForForm.css'

export default function AfficherProfil({istrue}) {
    return istrue && <div className='formu'>
      <h1>Inforamtion Personnel</h1>
      <label htmlFor="fname">Nom et Prenom</label>
      <input type='text' id='fname' value='Hatake Kakashi' onChange={(e)=>{console.log(e.target.value)}}/>
      <label htmlFor="function">Statue</label>
      <input type='text' id='function' value='Enseignent' onChange={(e)=>{console.log(e.target.value)}}/>
      <label htmlFor="phone">Telephone</label>
      <input type='tel' id='phone' value='+1 123-456-789' onChange={(e)=>{console.log(e.target.value)}}/>
      <label htmlFor="mail">E-mail</label>
      <input type='email' id='mail' value='kakashi@exemple.com' onChange={(e)=>{console.log(e.target.value)}}/>
      <label htmlFor="adrs">Adresse</label>
      <input type='text' id='adrs' value='12 rue je sais pas, konoha' onChange={(e)=>{console.log(e.target.value)}}/>
    </div>
  }