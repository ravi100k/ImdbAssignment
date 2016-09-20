var React= require('react');
var ReactDOM=require('react-dom');
var {hasHistory, Route,Router,IndexRoute}=require('react-router');
var MovieBox=require("./component/MovieBox");
var Home=require("./component/Home");
var AllMovie=require("./component/AllMovie");
var AboutUs=require("./component/AboutUs");
var NavBar=require("./component/NavBar");
var RouterMain=React.createClass({

  render: function() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    )
  }

})

ReactDOM.render(
<Router history={hasHistory}>
  <Route path="/" component={RouterMain}>
    <IndexRoute component={Home}/>
    <Route path="/Home" component={Home}/>
    <Route path="/Allmovies" component={AllMovie}/>
    <Route path="/MovieBox" component={MovieBox}/>
  </Route>
</Router>,document.getElementById('app2'));
