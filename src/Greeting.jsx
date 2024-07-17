function ListItem(props) {
    return <li>{props.animal}</li>
  }
  
  function List(props) {
    return (
      <ul>
        {props.animals.map((animal) => {
          return <ListItem key={animal} animal={animal} />;
        })}
      </ul>
    );
}

    
function Greeting(){
    function ListItem(props) {
        return <li>{props.animal}</li>
      }
      
      function List(props) {
        return (
          <ul>
            {props.animals.map((animal) => {
              return <ListItem key={animal} animal={animal} />;
            })}
          </ul>
        );
    
        
    
}
}

export default Greeting