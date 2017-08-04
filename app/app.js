// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");


ReactDOM.render(
  <div className="main-container">
    <div className="jumbotron">
      <h1>New York Times Article Scrubber</h1>
      <p>Search for and Annotate articles of the internet.</p>
      </div>

    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Panel title</h3>
      </div>
      <div className="panel-body">
        Panel content
      </div>
    </div>

    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Panel title</h3>
      </div>
      <div className="panel-body">
        Panel content
      </div>
    </div>
  </div>,
  document.getElementById("app")
);
