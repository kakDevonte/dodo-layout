import './App.scss';
import logo from './assets/image/logo.png';

const cityArray = [
  {letter: 'А', cities: ['Абакан', 'Абинск', 'Адлер', 'Азов', 'Аксай', 'Александров', 'Альметьевск','Анапа', 'Ангарск', 'Апатиты']},
  {letter: 'Б', cities: ['Ббакан', 'Ббинск', 'Бдлер', 'Бзов', 'Бксай', 'Блександров', 'Бльметьевск','Бнапа', 'Бнгарск', 'Бпатиты']},
  {letter: 'В', cities: ['Вбакан', 'Вбинск', 'Вдлер', 'Взов', 'Всай', 'Влександров', 'Вльметьевск','Внапа', 'Внгарск', 'Впатиты']},
  {letter: 'Г', cities: ['Гбакан', 'Гбинск', 'Гдлер', 'Гзов', 'Гсай', 'Глександров', 'Гльметьевск','Гнапа', 'Гнгарск', 'Гпатиты']},
  {letter: 'Д', cities: ['Дбакан', 'Дбинск', 'Ддлер', 'Дзов', 'Дсай', 'Длександров', 'Дльметьевск','Днапа', 'Днгарск', 'Дпатиты']},
  {letter: 'Е', cities: ['Ебакан', 'Ебинск', 'Едлер', 'Езов', 'Есай', 'Елександров', 'Ельметьевск','Енапа', 'Енгарск', 'Епатиты']}
];

function App() {
  return (
    <div className="root dark">
      <div className="search dark">
        <img src={logo} />
        <h1>Выберите ваш город:</h1>
        <div className="inputSearch dark">
          <input
            className="textFieldInput dark"
            type="text"
            placeholder="Поиск..."
          />
        </div>
        <div className="city-container dark">
          <h2>Москва</h2>
          <h2>Санкт-Питербург</h2>
        </div>
      </div>
      <div className="cities dark">
          { cityArray.map((item) =>
            <div className="item dark">
            <h2>{item.letter}</h2>
              {item.cities.map((city) =>
                <p key={city}>{city}</p>
              )}
            </div>)
          }
      </div>
    </div>
  );
}

export default App;

