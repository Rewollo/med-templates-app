import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [style, setStyle] = useState({ color: 'black' });
  const [size, setSize] = useState(14);
  const [line, setLine] = useState(1);

  const changeStyle = (color) => {
    setStyle({ color });
  };

  const changeSize = (newSize, newLine) => {
    setSize(newSize / 2);
    setLine(newLine / 2);
  };

  const reset = () => {
    setStyle({ color: 'black' });
    setSize(14);
    setLine(1);
  };

  return (
    <div className="App">
      <div style={{ ...style, fontSize: `${size}px`, lineHeight: line}}>
        <div className="container" id="content">
          <h1>Обязательное медицинское освидетельствование</h1>
          <div className="info">
            <p><span className="label">ФИО:</span>
              </p><div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>, 35 лет
            <p></p>
            <p><span className="label">Должность:</span> Системный администратор</p>
            <h2>Жалобы: Из анамнеза:</h2>
            <ul>
              <li>наследственность по психическому заболеванию: не отягощена</li>
              <li>служба в армии: служил</li>
              <li>образование: высшее</li>
              <li>специальность: Информационные технологии</li>
              <li>травмы головы: <div className="cell"></div></li>
              <li>инфекционные заболевания в тяжелой степени: <div className="cell"></div></li>
              <li>Общая анестезия: <div className="cell"></div></li>
              <li>судорожные и необычные состояния: <div className="cell"></div></li>
              <li>психотравмы: <div className="cell"></div></li>
            </ul>
            <h2>Психостатус:</h2>
            <p>Ориентирован в месте, во времени, в собственной личности полностью</p>
            <h2>Настроение:</h2>
            <p>Ровное</p>
            <h2>Эмоциональный фон:</h2>
            <p>Ровный</p>
            <p>Поведение соответствует случаю</p>
            <h2>Мышление:</h2>
            <p>Логичное, последовательное</p>
            <h2>Память:</h2>
            <p>Сохранена</p>
            <p>Критика к состоянию: сохранена</p>
            <h2>Заключение:</h2>
            <p>Психической патологии не выявлено</p>
            <p className="date">Дата: 08.05.2024</p>
          </div>
          <div className="doctors">
            <p>Врач-психиатр: А.В. Григорьев</p>
            <p>Врач-психиатр: С.Б. Грабиненко</p>
            <p>Врач-психиатр: В.Д. Федоров</p>
          </div>
          <div className='buttonBlock'>
            <button onClick={() => changeStyle('blue')}>Сменить цвет на синий</button>
            <button onClick={() => changeSize(size, line)}>Уменьшить размер</button>
            <button onClick={reset}>Сбросить стили</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;