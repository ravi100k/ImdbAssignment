var React=require('react');
var ChildMain=require('./ChildMain');
var Allmovies=require('./Allmovies');

var AllMovie=React.createClass({

    getInitialState: function ()
    {
    return({data:[]})
    },

    componentDidMount:function() {

  $.ajax({
    url: 'http://localhost:8080/movie/display',
    dataType: "json",
    type:'GET',
    success: function(data1) {
        console.log("data received"+data1);
        this.setState({data:data1});
        console.log('display movies');
    }.bind(this),
    error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
    }.bind(this),
  });
},

render:function(){
   console.log('State data in AllMovie'+this.state.data);
   var allmoviemap=this.state.data.map(function(arr) {
   return (

              <Allmovies allData={arr} imdbID={arr.imdbID} Type={arr.Type} Title={arr.Title} Poster={arr.Poster}/>

          );
  })

  return(
      <div>
          {allmoviemap}
      </div>
);
}
});

module.exports=AllMovie;
