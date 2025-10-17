// src/App.js
import React from "react";

function App() {
  // 1. Змінна з іменем
  const myName = "Іван";

  // 2. Об'єкт улюбленого сайту
  const favoriteSite = {
    name: "Google",
    url: "https://www.google.com/"
  };

  // 3. Дві змінні з числами
  const number1 = 7;
  const number2 = 13;
  const sum = number1 + number2;

  // 4. Масив кольорів
  const colors = ["Червоний", "Синій", "Зелений"];

  // 5. URL і alt для зображення
  const imageUrl = "https://via.placeholder.com/150";
  const imageAlt = "Приклад зображення";

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Виведення імені */}
      <h1>{myName}</h1>

      {/* Привітальне повідомлення */}
      <p>Ласкаво просимо до нашого сайту!</p>

      {/* Зображення */}
      <img src={imageUrl} alt={imageAlt} style={{ margin: "10px 0" }} />

      {/* Посилання на улюблений сайт */}
      <p>
        Улюблений сайт: <a href={favoriteSite.url}>{favoriteSite.name}</a>
      </p>

      {/* Сума чисел */}
      <p>Сума чисел {number1} + {number2} = {sum}</p>

      {/* Список кольорів */}
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
