import React from "react";
import Scrollbar from "./components/Scrollbar/Scrollbar";
import logo from "./assets/image/logo.png";
import "./App.scss";

const cityArray = [
  {
    letter: "А",
    cities: [
      "Абакан",
      "Абинск",
      "Адлер",
      "Азов",
      "Аксай",
      "Александров",
      "Альметьевск",
      "Анапа",
      "Ангарск",
      "Апатиты",
    ],
  },
  {
    letter: "Б",
    cities: [
      "Ббакан",
      "Ббинск",
      "Бдлер",
      "Бзов",
      "Бксай",
      "Блександров",
      "Бльметьевск",
      "Бнапа",
      "Бнгарск",
      "Бпатиты",
    ],
  },
  {
    letter: "В",
    cities: [
      "Вбакан",
      "Вбинск",
      "Вдлер",
      "Взов",
      "Всай",
      "Влександров",
      "Вльметьевск",
      "Внапа",
      "Внгарск",
      "Впатиты",
    ],
  },
  {
    letter: "Г",
    cities: [
      "Гбакан",
      "Гбинск",
      "Гдлер",
      "Гзов",
      "Гсай",
      "Глександров",
      "Гльметьевск",
      "Гнапа",
      "Гнгарск",
      "Гпатиты",
    ],
  },
  {
    letter: "Д",
    cities: [
      "Дбакан",
      "Дбинск",
      "Ддлер",
      "Дзов",
      "Дсай",
      "Длександров",
      "Дльметьевск",
      "Днапа",
      "Днгарск",
      "Дпатиты",
    ],
  },
  {
    letter: "Е",
    cities: [
      "Ебакан",
      "Ебинск",
      "Едлер",
      "Езов",
      "Есай",
      "Елександров",
      "Ельметьевск",
      "Енапа",
      "Енгарск",
      "Епатиты",
    ],
  },
  {
    letter: "Ж",
    cities: [
      "Жбакан",
      "Жбинск",
      "Ждлер",
      "Жзов",
      "Жсай",
      "Жлександров",
      "Жльметьевск",
      "Жнапа",
      "Жнгарск",
      "Жпатиты",
    ],
  },
  {
    letter: "З",
    cities: [
      "Збакан",
      "Збинск",
      "Здлер",
      "Ззов",
      "Зсай",
      "Злександров",
      "Зльметьевск",
      "Знапа",
      "Знгарск",
      "Зпатиты",
    ],
  },
  {
    letter: "И",
    cities: [
      "Ибакан",
      "Ибинск",
      "Идлер",
      "Изов",
      "Исай",
      "Илександров",
      "Ильметьевск",
      "Инапа",
      "Ингарск",
      "Ипатиты",
    ],
  },
];

function App() {
  return (
    <div className="root white">
      <div className="search white">
        <img src={logo} alt={"logo"} />
        <h1>Выберите ваш город:</h1>
        <div className="inputSearch white">
          <input
            className="textFieldInput white"
            type="text"
            placeholder="Поиск..."
          />
        </div>
        <div className="city-container white">
          <h2>Москва</h2>
          <h2>Санкт-Питербург</h2>
        </div>
      </div>
      <div className="cities white">
        <Scrollbar>
          {cityArray.map((item) => (
            <div key={item.letter} className="item white">
              <h2>{item.letter}</h2>
              {item.cities.map((city) => (
                <p key={city}>{city}</p>
              ))}
            </div>
          ))}
        </Scrollbar>
      </div>
    </div>
  );
}

export default App;
