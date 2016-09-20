var React= require('react');
var ChildSearch=require('./ChildSearch')
var ChildMain=require('./ChildMain')


var MovieBox=React.createClass({

 getInitialState: function(){
   return({text: "hello", movieArr:[], url: "http://omdbapi.com/?s="})

 },

 handleClick:function(data){
   $.ajax({
        url: this.state.url+data,
        dataType: 'json',
        cache: true,
        success: function(data) {
          console.log(data.Search);
          this.setState({movieArr:data.Search});
          console.log(this.state.movieArr);
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.state.url, status, err.toString());
        }.bind(this)
      });
 },

 render: function() {
   return (
     <div>

     <ChildSearch click={this.handleClick}/>
     <ChildMain sdata={this.state.text}   movieArr={this.state.movieArr}/>

     </div>
   )
 }

})

module.exports = MovieBox;
