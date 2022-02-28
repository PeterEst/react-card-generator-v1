import React, { useState } from "react";

const Form = (props) =>{
    // const [cardName , setCardName] = useState()
    // const [cardGender , setcardGender] = useState()
    // const [cardDOB , setcardDOB] = useState()
    // const [cardImgUrl , setcardImgUrl] = useState()
    const [Card, setCard] = useState({
        cardName:"",
        cardGender:"",
        cardDOB:"",
        cardImgUrl:""
    });

    const handleChange = (event) =>{
        const {name , value} = event.target

        setCard(prev =>{
            return {
                ...prev,
                [name] : value
            }
        });

        // if(name === "cardName"){
        //     setCardName(value);
        // } else if(name === "cardGender"){
        //     setcardGender(value);
        // } else if(name === "cardDOB"){
        //     setcardDOB(value);
        // } else {
        //     setcardImgUrl(value);
        // }
    }

    const handleClick = (event) =>{
        // props.onAdd(cardName, cardGender, cardDOB, cardImgUrl);
        props.onAdd(Card);
        event.preventDefault();
    }

    return(
        <form>
            <div className="inputData">
                <label>Enter Card Name:</label>
                <input type="text" name="cardName" onChange={handleChange}/>
            </div>
            <div className="inputData">
                <label>Enter Gender:</label>
                <input type="text" name="cardGender" onChange={handleChange}/>
            </div>
            <div className="inputData">
                <label>Enter Date Of Birth:</label>
                <input type="date" name="cardDOB" onChange={handleChange}/>
            </div>
            <div className="inputData">
                <label>Profile Image URL:</label>
                <input type="url" name="cardImgUrl" onChange={handleChange}/>
            </div>
            <div className="submitData">
                <input type="submit" name="submit" onClick={handleClick}/>
            </div>
        </form>
    )
};

export default Form;