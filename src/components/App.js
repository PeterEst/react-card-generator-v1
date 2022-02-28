import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Card from "./Card";

const App = () =>{
  const [importedName, setImportedName] = useState();
  const [importedGender, setImportedGender] = useState();
  const [importedDOB, setImportedDOB] = useState();
  const [importedURL, setImportedURL] = useState();
  const sendToCard = (cardName, cardGender, cardDOB, cardImgUrl) =>{
    setImportedName(cardName);
    setImportedGender(cardGender);
    setImportedDOB(cardDOB);
    setImportedURL(cardImgUrl);
  }

  return (
    <div>
      <Header />
      <div className="container">
        <Form 
          onAdd={sendToCard}
        />
      </div>
      <div className="displayCards">
        <Card 
          cardName={importedName}
          cardGender={importedGender}
          cardImgUrl={importedURL}
          cardDOB={importedDOB}
        />
      </div>
    </div>
  )
};

export default App;