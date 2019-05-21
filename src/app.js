console.log('App.js is running');

// JSX - Javascript XML
const app = {
  title: 'Indecision App',
  subtitle: 'A simple TODO list built in React',
  options: ['One', 'Two']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'these are your available options' : 'No options available'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count -= 1;
  renderCounterApp();
};
const resetCounter = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateThree = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );

  ReactDOM.render(templateThree, appRoot);
};

renderCounterApp();

// const user = {
//   name: 'Luca',
//   age: 31,
//   location: 'Foggia'
// };

// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }

// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );


