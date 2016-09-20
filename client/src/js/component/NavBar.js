var React=require("React");
var {Link}=require('react-router');
var Navlink=require('./Navlink')
 var NavBar=React.createClass({

   render: function() {
     return (
       <ul className="topnav">
       <li><Navlink to="/Home">Home</Navlink></li>
       <li><Navlink to ="/MovieBox">MovieBox</Navlink></li>
       <li><Navlink to ="/Allmovies">Favourite Movies</Navlink></li>
       <li className="right"><Navlink to="/Login">Login</Navlink></li>
       </ul>
     )
   }
 });
 module.exports = NavBar;
