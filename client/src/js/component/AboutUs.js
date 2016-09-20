var React=require("React");

 var AboutUs=React.createClass({

   render: function() {
     return (
       <div>
       <h2>{this.props.params.id}</h2>
       </div>
     )
   }
 });
 module.exports = AboutUs;
