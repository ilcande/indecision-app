console.log('Toggle Visibility.js is running');
let app = {
  title: 'Visibility Toggle',
  visibility: false
}

const onToggle = () => {

  app.visibility = !app.visibility;
  console.log('clicked');
  renderToggleVisibility();
};

const renderToggleVisibility = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onToggle}>{app.visibility === false ? 'Show' : 'Hide'}</button>
      <p>{app.visibility === false ? '' : 'Details here'}</p>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
renderToggleVisibility();
