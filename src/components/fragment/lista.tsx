import React from 'react';
import Item from '../item/item';
function Lista() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Tesla" ano_lançamento={2023}/>
        <Item marca="Renault" ano_lançamento={2015}/>
        <Item/>
      </ul>
    </>
  );
}

export default Lista;
