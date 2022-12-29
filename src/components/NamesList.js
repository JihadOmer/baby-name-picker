import React from "react";

const NamesList = (props) => {
  const { data, filterText } = props;

  

  const nameslist = data
  // remove the names that do not match the search text

    .filter((name) => {
      return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
    })

    .map((name) => {

      return (

        <li key={name.id} className={name.sex}>
          {name.name}
        </li>
      );
    });





  return <div className="App">{nameslist}</div>;

};


export default NamesList;
