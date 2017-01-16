require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片的相关信息
let imageDatas = require('../data/imageDatas.json');


//自执行函数，将图片信息转成图片URL路径信息
imageDatas = (function genImageUrl(imageArr) {
    for (var i = 0; i < imageArr.length; i++) {
        var image = imageArr[i];
        image.imageUrl = require('../images/' + image.fileName);
        imageArr[i] = image;
    }
    return imageArr;
})(imageDatas);
console.log(imageDatas);

var ImgFigure = React.createClass({
    render: function() {
        return ( <figure className="img-figure">
            <img src={this.props.data.imageUrl} alt={this.props.data.title}/>
            <figcaption>
            <h2 className="img-title">{this.props.data.desc} </h2> </figcaption> </figure>
        );
    }
});

var GalleryByReactApp = React.createClass({

    render: function() {
        var controllerUnits = [];
        var imgFigures = [];

        imageDatas.forEach(function(item) {
        	imgFigures.push( <ImgFigure data = {item} />);
        });
        return (
        	<section className = "stage">
        		<section className = "img-sec">{imgFigures}</section>
            	<nav className = "controller-nav">{controllerUnits}</nav>
            </section>
        );
    }

});

GalleryByReactApp.defaultProps = {};

export default GalleryByReactApp;
