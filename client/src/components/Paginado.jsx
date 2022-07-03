import React from "react";
import style from './Paginate.module.css';
import { Link } from "react-router-dom";

export default function Paginado({ dogsPerPage, allDogs, paginado }) {
  const pageNumber = [];
  
  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumber.push(i);
  }
 
  return (
    <>
    <nav>
      <ul>
        {pageNumber &&
          pageNumber.map(number => (
            <li key={number}
            className={style.paginado}>
              <Link to='#'onClick={() => paginado(number)}>{number} </Link>
            </li>
          ))}
      </ul>
    </nav> 
    </>
  );
}
