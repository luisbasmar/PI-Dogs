/** @format */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, cleanState, getDogs } from '../action/index';
import { Nav } from './Nav';
import noimg from '../components/imgs/noimg.jpg';
import s from './Detail.module.css';
import { useParams, useNavigate } from 'react-router-dom';

export const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanState('detail'));
    dispatch(getDetail(params.id));
  }, [dispatch, params.id]);

  const detail = useSelector(state => state.detail);

  function handleGoBack() {
    dispatch(getDogs());
    navigate('/home');
  }

  return (
    <>
      <Nav />
      <div className={s.container}>
        {typeof detail === 'string' ? (
          <div className={s.error}>
            {detail}
            <button onClick={handleGoBack}>Reload the list!</button>
          </div>
        ) : detail.length > 0 ? (
          <div className={s.container__card}>
            <div className={s.left}>
              <img
                src={detail[0]?.image ? detail[0]?.image : noimg}
                alt={`dog ${detail[0]?.name}`}
                width="400"
                className={s.fotito}
              />
            </div>
            <div className={s.right}>
              <h1 className={s.title}>{detail[0].name.toUpperCase()}</h1>
              <ul>
                <li>
                  <h4>Height: {detail[0]?.height + ' cm'}</h4>
                </li>
                <li>
                  <h4>Weight: {detail[0]?.weight + ' Kg'}</h4>
                </li>
                <li>
                  <h4>Life span: {detail[0]?.lifeSpan}</h4>
                </li>
                <li>
                  <h4>
                    Temperaments:{' '}
                    {detail[0]?.temperament
                      ? detail[0].temperament.map(elem => elem + ' - ')
                      : detail[0]?.temperaments?.map(elem => elem.name + ' - ')}
                  </h4>

                  <button className={s.goBack} onClick={handleGoBack}>
                    Go Back
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};
