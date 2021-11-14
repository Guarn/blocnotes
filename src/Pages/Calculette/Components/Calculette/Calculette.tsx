import { useState } from 'react';
import * as A from './Calculette.styled';
import { Chiffre, Operateur } from './interfaces';
import Touche from './Touche';
import { calcul } from './utils';

let tempNum1: Chiffre = null;
let tempNum2: Chiffre = null;
let tempOpe: Operateur = null;
let result = 0;

const reset = () => {
  tempNum1 = null;
  tempNum2 = null;
  tempOpe = null;
};

const Calculette = () => {
  const [val, setVal] = useState(0);

  const operateur = (op: Operateur) => {
    if (tempOpe) egal('=');
    tempOpe = op;
    tempNum1 = result;
  };
  const egal = (op: string) => {
    if (op === '=') {
      setVal(calcul(tempNum1, tempNum2, tempOpe) || 0);
      reset();
    }
  };

  const raz = () => {
    reset();
    setVal(0);
  };

  const operation = (nbr: number) => {
    if (!tempOpe) {
      if (!tempNum1) tempNum1 = nbr;
      else tempNum1 = parseInt(`${val}${nbr}`, 10);
      result = tempNum1;
    }
    if (tempOpe) {
      if (!tempNum2) tempNum2 = nbr;
      else tempNum2 = parseInt(`${val}${nbr}`, 10);
      result = tempNum2;
    }
    setVal(result);
  };

  return (
    <A.Content>
      <A.Affichage>{val}</A.Affichage>
      <A.Row col={4}>
        <Touche onClick={raz}>AC</Touche>
        <Touche onClick={() => null}>+/-</Touche>
        <Touche onClick={() => null}>%</Touche>
        <Touche onClick={() => operateur('/')}>/</Touche>
      </A.Row>
      <A.Row col={4}>
        <Touche onClick={() => operation(7)}>7</Touche>
        <Touche onClick={() => operation(8)}>8</Touche>
        <Touche onClick={() => operation(9)}>9</Touche>
        <Touche onClick={() => operateur('*')}>x</Touche>
      </A.Row>
      <A.Row col={4}>
        <Touche onClick={() => operation(4)}>4</Touche>
        <Touche onClick={() => operation(5)}>5</Touche>
        <Touche onClick={() => operation(6)}>6</Touche>
        <Touche onClick={() => operateur('-')}>-</Touche>
      </A.Row>
      <A.Row col={4}>
        <Touche onClick={() => operation(1)}>1</Touche>
        <Touche onClick={() => operation(2)}>2</Touche>
        <Touche onClick={() => operation(3)}>3</Touche>
        <Touche onClick={() => operateur('+')}>+</Touche>
      </A.Row>
      <A.Row col={4}>
        <Touche onClick={() => operation(0)} taille={2}>
          0
        </Touche>
        <Touche onClick={() => null}>,</Touche>
        <Touche onClick={() => egal('=')}>=</Touche>
      </A.Row>
    </A.Content>
  );
};

export default Calculette;
