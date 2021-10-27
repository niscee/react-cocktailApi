import React, { useRef, useState, useContext } from "react";
import "./searchbar.css";
import { MyContext } from "../../context/CoinState";

const Searchbar = () => {
  const input_ref = useRef();
  const [text, setText] = useState("");

  const context = useContext(MyContext);
  const { changeTerm } = context;

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    changeTerm(text);
    setText("");
    input_ref.current.focus();
  };

  return (
    <section className="searchbar-container">
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={text}
            ref={input_ref}
            placeholder="Enter Coin Id"
            onChange={changeHandler}
          ></input>
          <button type="submit">submit</button>
        </form>
      </div>
    </section>
    
  );
};

export default Searchbar;
