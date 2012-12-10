/*!
 * Haml Template Engine for Knockout
 * http://github.com/centralway/ko.haml.js
 *
 * Copyright Centralway (http://www.centralway.com) / Martin Naumann
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
 
ko.hamlEngine = function() {};
ko.hamlEngine.prototype = ko.utils.extend(new ko.templateEngine(), {
    renderTemplateSource: function(templateSrc, bindingCtx, options) {
        var tplElement = templateSrc.i;
        
        var renderVars = {};
        for(placeholder in options.data) {
            renderVars[placeholder] = options.data[placeholder]();
        }        
        
        var renderedMarkup = haml.compileHaml({sourceUrl: tplElement.src })(renderVars);
        return ko.utils.parseHtmlFragment(renderedMarkup);
    },
    
    version: '0.1'
});