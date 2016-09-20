var React=require('react')
var Gc=React.createClass({

getInitialState:function(){
  return ({url:'http://localhost:8080/movie/add'})
},
send :function () {
console.log(this.props.allData);
  $.ajax({
       url: "http://localhost:8080/movie/add",
       type:"POST",
       data: this.props.allData,
       success: function()
       {
        console.log("data sent");
        }.bind(this),
       error: function(xhr, status, err) {
         console.error("http://localhost:8080/movie/add", status, err.toString());
       }.bind(this)
     });
},


  render: function(){
   return (
     <div>
     <div className="row">
       <div className="col-lg-4" id="left">
         <img src={this.props.allData.Poster}/>
       </div>
       <div className="col-lg-8" id="right">
         <h3>{this.props.allData.Title}</h3>
         <h3>{this.props.allData.Year}</h3>
         <h3>{this.props.allData.Type}</h3>
         <input type="button" value="Add Favoiurite Movie"  className="btn btn-primary btn-medium" onClick={this.send}/>
          &nbsp;&nbsp;&nbsp;
          <input type="button" value="Add Favoiurite Movie"  className="btn btn-primary btn-medium" onClick={this.s}/>
       </div>
       </div>
     </div>
   )
 }
});
module.exports=Gc;
