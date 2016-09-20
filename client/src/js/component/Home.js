var React=require("React");

 var Home=React.createClass({

   render: function() {
     return (
       <div>
       <div className="container">
 	<div className="row">
 		<div className="col-md-12">
 			<div className="carousel slide" id="carousel-80861">
 				<ol className="carousel-indicators">
 					<li data-slide-to="0" data-target="#carousel-80861">
 					</li>
 					<li data-slide-to="1" data-target="#carousel-80861" className="active">
 					</li>
 					<li data-slide-to="2" data-target="#carousel-80861">
 					</li>
 				</ol>
 				<div className="carousel-inner">
 					<div className="item">
 						<img alt="Carousel Bootstrap First" src="http://lorempixel.com/output/sports-q-c-1600-500-1.jpg" />
 						<div className="carousel-caption">
 							<h4>
 								First Thumbnail label
 							</h4>
 							<p>
 								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
 							</p>
 						</div>
 					</div>
 					<div className="item active">
 						<img alt="Carousel Bootstrap Second" src="http://lorempixel.com/output/sports-q-c-1600-500-2.jpg" />
 						<div className="carousel-caption">
 							<h4>
 								Second Thumbnail label
 							</h4>
 							<p>
 								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
 							</p>
 						</div>
 					</div>
 					<div className="item">
 						<img alt="Carousel Bootstrap Third" src="http://lorempixel.com/output/sports-q-c-1600-500-3.jpg" />
 						<div className="carousel-caption">
 							<h4>
 								Third Thumbnail label
 							</h4>
 							<p>
 								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
 							</p>
 						</div>
 					</div>
 				</div> <a className="left carousel-control" href="#carousel-80861" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a> <a className="right carousel-control" href="#carousel-80861" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
 			</div>
 			<div className="jumbotron">
 				<h2>
 					Hello, world!
 				</h2>
 				<p>
 					This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
 				</p>
 				<p>
 					<a className="btn btn-primary btn-large" href="#">Learn more</a>
 				</p>
 			</div>
 		</div>
 	</div>
 	<div className="row">
 		<div className="col-md-4">
 			<h2>
 				Heading
 			</h2>
 			<p>
 				Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
 			</p>
 			<p>
 				<a className="btn" href="#">View details »</a>
 			</p>
 		</div>
 		<div className="col-md-4">
 			<h2>
 				Heading
 			</h2>
 			<p>
 				Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
 			</p>
 			<p>
 				<a className="btn" href="#">View details »</a>
 			</p>
 		</div>
 		<div className="col-md-4">
 			<h2>
 				Heading
 			</h2>
 			<p>
 				Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
 			</p>
 			<p>
 				<a className="btn" href="#">View details »</a>
 			</p>
 		</div>
 	</div>
 </div>
       </div>
     )
   }
 });
 module.exports = Home;
