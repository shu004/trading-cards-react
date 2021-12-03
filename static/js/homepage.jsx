'use strict';

function Homepage() {
  return (
    <div>
      Hello! Hope you have fun on my site!
      <p> <a href="/cards">Look at my cards!</a> </p>
      <img src="/static/img/balloonicorn.jpg"></img>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
