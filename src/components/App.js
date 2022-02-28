import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Card from "./Card";

const App = () =>{
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
      </div>
    </div>
  )
};

export default App;