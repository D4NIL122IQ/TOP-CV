import {useState} from 'react'

function AfficherProfil({annuler, variab ,majvariab}) {
  const [infoperso , setinfoperso] = useState(variab)

  return (
    <div className='personel'>
      <h1>INFORMATIONS</h1>
      <div className='perso'>
      <div>
      <label htmlFor="fname">Nom et Prénom : </label>
      <input
        type='text'
        id='fname'
        value={infoperso.fullname}
        onChange={(e) => setinfoperso({...infoperso , fullname:e.target.value})}
      />
      </div>
       <div>
      <label htmlFor="function">Statut : </label>
      <input
        type='text'
        id='function'
        value={infoperso.func}
        onChange={(e) => setinfoperso({...infoperso , func:e.target.value})}
      />
      </div>
      <div>
      <label htmlFor="phone">Téléphone : </label>
      <input
        type='tel'
        id='phone'
        value={infoperso.phone}
        onChange={(e) => setinfoperso({...infoperso , phone: e.target.value})}
      />
      </div>
      <div>
      <label htmlFor="mail">E-mail : </label>
      <input
        type='email'
        id='mail'
        value={infoperso.mail}
        onChange={(e) => setinfoperso({...infoperso , mail: e.target.value})}
      />
      </div>
      <div>
      <label htmlFor="adrs">Adresse : </label>
      <input
        type='text'
        id='adrs'
        value={infoperso.adrs}
        onChange={(e) => setinfoperso({...infoperso , adrs:e.target.value})}
      />
      </div>
      <div id='btn'>
        <button onClick={()=>{majvariab(infoperso);annuler(false)}} id='confirmation'>Confirmer</button>
        <button onClick={()=>{annuler(false)}} id='annulation'>Annuler</button>
      </div>
      </div>
    </div>)
}


  export default AfficherProfil