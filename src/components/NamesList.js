import React from 'react'



const NamesList = (props) => {
  const { data } = props;
  
  const nameslist = data.map((name) => {
    return (
      <li key={name.id} className={name.sex}>
        {name.name}
      </li>
    );
  });

  

  return (
    <div className="App">
      {nameslist}
    </div>
  );
}

export default NamesList