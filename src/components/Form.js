import React, { useState } from "react";

const Form = (props) =>{
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
        
    }

    const handleClick = (event) =>{
        if(Card.cardName === ""){
            alert("Enter A Name!")
        } else if(Card.cardGender !== ("Male" || "Female" || "male" || "female")){
            alert("Please Enter A Valid Gender - Male or Female")
        } else if(Card.cardImgUrl ===""){
            alert("Enter a Valid URL.")
        } else{
            props.onAdd(Card);
        }
        event.preventDefault();
    }

    return(
        <form>
            <div className="inputData">
                <label>Enter Card Name:</label>
                <input type="text" name="cardName" onChange={handleChange} />
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