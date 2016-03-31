(function(window) {
    'use strict';
    function define_d(){
        var d = {
            //Simple functions
            getId: function(id){
                return document.getElementById(id);
            },

            //Functions where you set variables
            setTColour: function(colour,id) {
                d.getId(id).style.color = colour;
            },
            setTColor: function(colour,id) {
                d.getId(id).style.color = colour;
            },
            setSize: function(height,width,id) {
                d.getId(id).style.height = height;
                d.getId(id).style.width = width;
            },
            setBackground: function(type, data, settings, id) {
                var x = d.getId(id);
                if(type == "color" || type == "colour") {
                    x.style.background = data + " " + settings;
                } else if (type == "image") {
                    var c = "url(\"" + data + "\")";
                    x.style.background = c + " " + settings;
                }
            },

            //Functions where you add or remove data
            replaceText: function(text,id) {
                d.getId(id).innerHTML = text;
            },
            addText: function(text,id) {
                d.getId(id).innerHTML += text;
            },
            clearText: function(id) {
                d.getId(id).innerHTML = "";
            },
        }
        return d;
    }
    if(typeof(d) === 'undefined'){
        window.d = define_d();
    } else {
        alert("The name d is already in use.")
    }
})(window);
