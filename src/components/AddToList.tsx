import React, { useState } from "react";
import { InitState as Props } from "../App";

interface InitProps {
    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<InitProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const [inputError, setInputError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })

    }

    const handleClick = ():void => {

        if(!input.name || !input || !input.img || !input.note) {
            setInputError('Please complete all input fields.');
            return
        } else setInputError('');

        if(!inputError) {
            setPeople([
                ...people,
                {
                    name: input.name,
                    age: parseInt(input.age),
                    url: input.img,
                    note: input.note
                }
            ])
            setInput({
                name: "",
                age: "",
                note: "",
                img: ""
            })
        } else return


    }

    return (
        <div className="AddToList">
            <p className="error" >
                {inputError}
            </p>
            <input
                type="text"
                placeholder="Name"
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <input
                type="text"
                placeholder="Age"
                className="AddToList-input"
                value={input.age}
                onChange={handleChange}
                name="age"
            />
            <input
                type="text"
                placeholder="Image"
                className="AddToList-input"
                value={input.img}
                onChange={handleChange}
                name="img"
            />
            <textarea
                placeholder="Notes"
                className="AddToList-input"
                value={input.note}
                onChange={handleChange}
                name="note"
            />
            <button
                className="AddToList-btn"
                onClick={handleClick}
            >Add to list</button>
        </div>
    )
}

export default AddToList