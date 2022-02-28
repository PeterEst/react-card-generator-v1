import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Card from "./Card";

const App = () =>{
  // const [importedName, setImportedName] = useState();
  // const [importedGender, setImportedGender] = useState();
  // const [importedDOB, setImportedDOB] = useState();
  // const [importedURL, setImportedURL] = useState();
  // const sendToCard = (cardName, cardGender, cardDOB, cardImgUrl) =>{
  //   setImportedName(cardName);
  //   setImportedGender(cardGender);
  //   setImportedDOB(cardDOB);
  //   setImportedURL(cardImgUrl);
  // }
  const [Cards, setCards] = useState([]);

  const addCard = (newCard) =>{
    setCards(prev =>{
      return [...prev,newCard]
    });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Form 
          onAdd={addCard}
        />
      </div>
      <div className="displayCards">
        {Cards.map((cardItem, index)=>{
            return (
              <Card 
                key={index}
                cardName={cardItem.cardName}
                cardGender={cardItem.cardGender}
                cardImgUrl={cardItem.cardImgUrl}
                cardDOB={cardItem.cardDOB}
              />
            )
          }
        )}
        {/* <Card 
          cardName={importedName}
          cardGender={importedGender}
          cardImgUrl={importedURL}
          cardDOB={importedDOB}
        /> */}
      </div>
    </div>
  )
};

export default App;