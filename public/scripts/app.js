'use strict';

console.log('Toggle Visibility.js is running');
var app = {
  title: 'Visibility Toggle',
  visibility: false
};

var onToggle = function onToggle() {

  app.visibility = !app.visibility;
  console.log('clicked');
  renderToggleVisibility();
};

var renderToggleVisibility = function renderToggleVisibility() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: onToggle },
      app.visibility === false ? 'Show' : 'Hide'
    ),
    React.createElement(
      'p',
      null,
      app.visibility === false ? '' : 'Details here'
    )
  );

  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderToggleVisibility();
