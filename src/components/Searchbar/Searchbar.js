import React, { useRef, useState, useContext } from 'react';
import { MyContext } from '../../context/CocktailState';
import './Searchbar.css';

const Searchbar = () => {
    const input_ref = useRef();
    const [text, setText] = useState("")

    const context = useContext(MyContext);
    const { changeTerm } = context;

    const changeHandler = (e) => {
        setText(e.target.value);
        changeTerm(text);
        input_ref.current.focus();
    }

    return (
        <div className="searchbar-container">
            <input type="text" ref={input_ref}  placeholder="Enter Product Names...." onChange={changeHandler}></input>
        </div>
    )
}

export default Searchbar
