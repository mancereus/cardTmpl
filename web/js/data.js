﻿ var Request = {	
 	parameter: function(name) {
 		return this.parameters()[name];
 	},
 	
 	parameters: function() {
 		var result = {};
 		var url = window.location.href;
 		var parameters = url.slice(url.indexOf('?') + 1).split('&');
 		
 		for(var i = 0;  i < parameters.length; i++) {
 			var parameter = parameters[i].split('=');
 			result[parameter[0]] = parameter[1];
 		}
 		return result;
 	}
 };
 



function publish(templ, jsonstr, target) {
	var html, json, template;
    template = $(templ).html();
    json = $.parseJSON(jsonstr);
    html = Mustache.to_html(template, json).replace(/^\s*/mg, '');
    $(target).html(html).show();
    $(".pagebreak").css("page-break-before", "always");
	
}

$(document).ready( function() {
	publish('#template', overviewstr, '#content');
});

