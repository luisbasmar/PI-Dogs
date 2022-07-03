import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../action";
import s from './SearchBar.module.css'

export const SearchBar = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  
  
  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(name === ""){
      return alert("Should not be empty!")
    }
    dispatch(searchByName(name));
    setName('')
  }
  
  return (
    <div className={s.conteiner}>
      <input
        className={s.search}
        value={name}
        type="text"
        placeholder="Search Dog"
        onChange={ e => handleInputChange(e)}
      />
     
      <button
      className={s.btn}
      type="submit"
      onClick={ e => handleSubmit(e)}
      >Search</button> 
    </div>
  );
}
