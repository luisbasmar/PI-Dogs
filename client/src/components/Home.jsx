import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDogs,
  filterByValue,
  filterByTemperament,
  filterCreated,
  reloadFiltered,
  getTemperaments,
} from '../action';
import { SearchBar } from './SearchBar';
import { Card } from './Card';
import { Nav } from './Nav';
import Paginado from './Paginado.jsx';
import s from './Home.module.css';

export const Home = () => {
  const dispatch = useDispatch();

  const allDogs = useSelector(state => state.dogs);
  const temperaments = useSelector(state => state.temperaments);

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage /*setDogsPage*/] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  const [, /*orden*/ setOrden] = useState('');

  const paginado = pageNumber => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    //dispatch(getTemperaments());
    //dispatch(getDogs());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(getDogs());
  }

  function handleFilterValue(e) {
    dispatch(filterByValue(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
    document.getElementById('selectOrder').value = 'selectedOrder';
  }

  const handleFilterTemperament = e => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterByTemperament(e.target.value));
  };

  function handleFrom(e) {
    setCurrentPage(1);
    dispatch(filterCreated(e.target.value));
    document.getElementById('selectedFilter').value = 'selectedFilter';
  }
  function handleReloadFilter(dogs) {
    dispatch(reloadFiltered(dogs));
  }

  return (
    <>
      <div>
        <Nav />
      </div>
      {typeof allDogs[allDogs.length - 1] === 'string' ? (
        <div className={s.error}>
          {allDogs[allDogs.length - 1]}
          <button onClick={() => handleReloadFilter(allDogs)}>
            Reload the list!
          </button>
        </div>
      ) : typeof currentDogs[0] === 'string' ? (
        <div className={s.error}>
          {currentDogs[0]}
          <button onClick={e => handleClick(e)}>Reload the list!</button>
        </div>
      ) : (
        <div className={s.containerPhader}>
          <div className={s.variosSele}>
            <label>Sort from: </label>
            <select
              id="selectOrder"
              className={s.sele}
              onChange={e => handleFilterValue(e)}
            >
              <option value="selectedOrder" hidden>
                Sort
              </option>
              <option value="AZ">A to Z</option>
              <option value="ZA">Z to A</option>
              <option value="LESS">Less weight</option>
              <option value="HIGH">Higher weight</option>
            </select>

            <label>Filter By: </label>
            <select
              id="selectedFilter"
              className={s.sele}
              onChange={e => handleFrom(e)}
            >
              <option value="selectedFilter" hidden>
                Filter
              </option>
              <option value="ALL">All</option>
              <option value="CREATED">Created</option>
              <option value="API">API</option>
            </select>

            <label>Filter By Temperament: </label>
            <select
              className={s.sele}
              onChange={e => handleFilterTemperament(e)}
            >
              <option key={0} value="all">
                All
              </option>
              {temperaments
                ?.sort(function (a, b) {
                  if (a.name < b.name) return -1;
                  if (a.name > b.name) return 1;
                  return 0;
                })
                .map(el => {
                  return (
                    <option value={el.name} key={el.id}>
                      {el.name}
                    </option>
                  );
                })}
            </select>

            <SearchBar />
          </div>

          <Paginado
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            paginado={paginado}
          />

          <div className={s.containerCards}>
            {currentDogs.map(el => {
              return (
                <Card
                  name={el.name}
                  image={el.image}
                  temperament={el.temperament}
                  temperaments={el.temperaments}
                  id={el.id}
                  weight={el.weight}
                  className={s.cardiana}
                  key={el.id}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
