/** @format */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addDog, getTemperaments, getDogs, cleanState } from '../action/index';
import { Nav } from './Nav';
import style from './DogCreate.module.css';
import { validate } from '../helpers';

export const DogCreate = () => {
  const temperaments = useSelector(state => state.temperaments);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    name: '',
    heightMin: '',
    heightMax: '',
    weightMin: '',
    weightMax: '',
    yearsMin: '',
    yearsMax: '',
    image: '',
    temperament: [],
  };

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(cleanState('dogs'));
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleChange = e => {
    e.preventDefault();
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value,
    }));

    setErrors(
      validate({
        ...values,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelect = e => {
    let seleTemps = values.temperament.map(e => e.name);

    if (!seleTemps.includes(e.target.value)) {
      setValues({
        ...values,
        temperament: [...values.temperament, e.target.value],
      });
    }
  };

  function handleGoBack() {
    dispatch(getDogs());
    navigate('/home');
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (
      !Object.getOwnPropertyNames(errors).length &&
      values.name &&
      values.heightMin &&
      values.heightMax &&
      values.weightMin &&
      values.weightMax
    ) {
      let temperamentId = temperaments
        .filter(e => values.temperament.includes(e.name) && e.id)
        .map(e => e.id);
      dispatch(addDog({ ...values, temperament: temperamentId }));
      setErrors({});
      alert('Breed Created!!!!');
      setValues(initialState);
    } else {
      alert('Something went wrong!');
    }
  };

  return (
    <div className={style.container__card}>
      <div>
        <Nav />
      </div>
      <div className={style.title}>
        <h1>Create dog breed</h1>{' '}
      </div>
      <form onSubmit={handleSubmit}>
        <div className={style.otro}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            autoComplete="off"
            placeholder={errors.name && errors.name}
          />
        </div>
        {errors.name && <p className={style.error}>{errors.name}</p>}
        <div className={style.otro}>
          <label>Height min: </label>
          <input
            type="text"
            name="heightMin"
            value={values.heightMin}
            onChange={handleChange}
            autoComplete="off"
            placeholder={errors.heightMin && errors.heightMin}
          />
        </div>
        {errors.heightMin && <p className={style.error}>{errors.heightMin}</p>}

        <div className={style.otro}>
          <label>Height max: </label>
          <input
            type="text"
            name="heightMax"
            value={values.heightMax}
            onChange={handleChange}
            autoComplete="off"
            placeholder={errors.heightMax && errors.heightMax}
          />
        </div>
        {errors.heightMax && <p className={style.error}>{errors.heightMax}</p>}
        <div className={style.row}>
          <label>Weight min: </label>
          <input
            type="text"
            name="weightMin"
            value={values.weightMin}
            onChange={handleChange}
            autoComplete="off"
            placeholder={errors.weightMin && errors.weightMin}
          />
        </div>
        {errors.weightMin && <p className={style.error}>{errors.weightMin}</p>}

        <div className={style.row}>
          <label>Weight max: </label>
          <input
            type="text"
            name="weightMax"
            value={values.weightMax}
            onChange={handleChange}
            autoComplete="off"
            placeholder={errors.weightMax && errors.weightMax}
          />
        </div>
        {errors.weightMax && <p className={style.error}>{errors.weightMax}</p>}

        <div className={style.row}>
          <label>Life Span min: </label>
          <input
            type="text"
            name="yearsMin"
            value={values.yearsMin}
            onChange={handleChange}
            autoComplete="off"
            placeholder={errors.yearsMin && errors.yearsMin}
          />
        </div>
        {errors.yearsMin && <p className={style.error}>{errors.yearsMin}</p>}

        <div className={style.row}>
          <label>Life Span max: </label>
          <input
            type="text"
            name="yearsMax"
            value={values.yearsMax}
            onChange={handleChange}
            autoComplete="off"
            placeholder={errors.yearsMax && errors.yearsMax}
          />
        </div>
        {errors.yearsMax && <p className={style.error}>{errors.yearsMax}</p>}

        <div className={style.row}>
          <label>Image: </label>
          <input
            type="text"
            value={values.image}
            name="image"
            onChange={handleChange}
            autoComplete="off"
            placeholder="Image Url...."
          />
        </div>
        <div className={style.row}>
          <label>Temperaments: </label>
          <select onChange={handleSelect}>
            <option value="all">Todos</option>
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
        </div>
        <div className={style.row}>
          <h3>Selected temperaments: </h3>
          <div>
            {values.temperament.map((el, i) => {
              return (
                <ul key={i} className="allTemps">
                  <li className={style.tempList}>{el}</li>
                </ul>
              );
            })}
          </div>
        </div>

        <div>
          {Object.getOwnPropertyNames(errors).length > 0 ? (
            <button disabled className={style.button} type="submit">
              Create!
            </button>
          ) : (
            <button className={style.button} type="submit">
              Create!
            </button>
          )}
        </div>
        <div className={style.divGoBack}>
          <button className={style.goBack} onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};
