import styles from './App.module.scss';
import logo from './assets/image/logo.png';

function App() {
  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <img src={logo} />
        <h1>Выберите ваш город:</h1>
        <div className={styles.inputSearch}>
          <input
            className={styles.textFieldInput}
            type="text"
            placeholder="Поиск..."
          />
        </div>
        <div className={styles.rootCity}>
          <h1>Москва</h1>
          <h1>Санкт-Питербург</h1>
        </div>
      </div>
      <div className={styles.cities}>
        <div className={styles.item}>
          <h2>А</h2>
          <p>Абакан</p>
          <p>Абинск</p>
          <p>Адлер</p>
          <p>Азов</p>
          <p>Аксай</p>
          <p>Александров</p>
          <p>Альметьевск</p>
          <p>Анапа</p>
          <p>Ангарск</p>
          <p>Апатиты</p>
          <p>Апрелевка</p>
          <p>Апрелевка</p>
          <p>Апрелевка</p>
          <p>Апрелевка</p>
          <p>Апрелевка</p>
        </div>
      </div>
    </div>
  );
}

export default App;
