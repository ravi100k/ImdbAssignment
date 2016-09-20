    var React=require('react');
    var Modal=require('./Modal');
    var Allmovies=React.createClass({

      getInitialState:function()
      {
        return ({data:[],showModal: false,x:""})
      },
      handleHideModal:function()
      {
                this.setState({showModal: false})
      },
      handleShowModal:function(e)
      {
                this.setState({showModal: true})
      },
              //update function///

    updateMovie :function (title, id) {
      console.log(title+" "+id);
        $.ajax({
              url: 'http://localhost:8080/movie/update/'+id+'/'+title,
              type:'PUT',
              cache:false,
              success: function(d)
              {
                this.setState({data: d});
                  console.log('update movies');
              }.bind(this),
              error: function(xhr, status, err) {
                  console.error('http://localhost:8080/movie/update', status, err.toString());
              }.bind(this)
            })
  },

                //Delete Function///
    delete : function () {
    $.ajax({
      url: 'http://localhost:8080/movie/delete',
      type:'DELETE',
      data:this.props.allData,
      success: function() {
        console.log('delete movies');
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });


    },
    render: function(){
      console.log('render of Allmovies');
     return (
       <div>
        <div className="row">
           <div className="col-lg-4" id="left">
            <img src={this.props.Poster}/>
           </div>
           <div className="col-lg-8" id="right">
             <h3>{this.props.Title}</h3>
             <h3>{this.props.Year}</h3>
             <h3>{this.props.Type}</h3>
                <input type="button" value="Delete"  className="btn btn-primary btn-medium" onClick={this.delete}/>
                &nbsp;&nbsp;&nbsp;
                <input type="button" value="Update Movie"  className="btn btn-primary btn-medium" data-toggle="modal" data-target="#myModal" onClick={this.handleShowModal}/>
                {this.state.showModal ? <Modal handleHideModal={this.handleHideModal} result={this.updateMovie} allData={this.props.allData} x={this.state.x}/> : null}
           </div>
        </div>
        </div>


     )
    }

    });
module.exports=Allmovies;
