var React= require('react');

var ChildSearch=React.createClass({

 getInitialState: function(){
   return({data: ""})
 },

 handleChange: function(event){
   return(
     this.setState({data:event.target.value})
   )},

 sendToParent: function(){
     this.props.click(this.state.data)
 },

 render: function(){
   return (
     <div className="jumbotron">
     <h2 id='heading'>Welcome to the world of Movies..</h2>
      <div>
      <input type="text" className="form-control" placeholder='Search Movies here....' id='searchBox' value={this.state.data}  onChange={this.handleChange}/>
      <input type='submit' href="#" id='searchButton' onClick={this.sendToParent} value='Search'/>
     </div>
     </div>
   )
 }
})

module.exports=ChildSearch;
