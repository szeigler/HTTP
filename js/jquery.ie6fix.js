/** IE6Fix
   @version 1.0
   @author Gabriele Romanato <www.css-zibaldone.com - gabriele.romanato@gmail.com>
   @note Fixes CSS rendering inconsistencies of Internet Explorer 6.
         For further reading see http://www.satzansatz.de/cssd/onhavinglayout.html */



(function($){

    /** @param jQuery's element set
              @note  This method fixes the overwhelming majority of IE6 bugs by setting the hasLayout property to true
                                                                                                                                                                                        */
        
    $.gainLayout = function(element) {
    
        element = $(element);
	
	if(element.css('display') == 'block') {
	   element.css('height', '1%');
	} else if(element.css('display') == 'inline') {
	   element.css('zoom', '1');
	}
    
    
    };
    
    /** @param jQuery's element set
              @note This method fixes the doubled-margin bug with floats */

    
    $.fixDoubledMargin = function(element) {
    
        element = $(element);
	if(element.css('float') !== 'none') {
	
	    if(element.css('marginLeft') > '0' || element.css('marginRight') > '0') {
	       element.css('display', 'inline');
	    }
	
	}
    
    
    
    
    
    };
    
    /** @param jQuery's element set
               @note This method fixes the italic bug */
    
    $.fixItalicBug = function(element) {
    
        element = $(element);
	if(element.css('fontStyle') == 'italic') {
	
	    element.css({'overflow': 'visible', 'height': '1%'});
	
	
	}
    
    };
    
    
    /** @param jQuery's element set
              @note This method fixes the 3-pixels text jog bug */
    
    
    $.fix3PixelsTextJog = function(element, floating) {
    
        element = $(element);
	floating = $(floating);
	
	if(floating.css('float') == 'left') {
	    if(element.css('marginLeft') >= floating.width()) {
	        element.css('marginLeft', '-3px');
	    }
	} else if(floating.css('float') == 'right') {
	
	   if(element.css('marginRight') >= floating.width()) {
	   
	       element.css('marginRight', '-3px');
	   
	   }
	
	}
    
    
    };
    
    
    /** @param jQuery's element set
             @note This method fixes the line-height bug */
    
    
    $.fixLineHeightBug = function (element) {
        
	element = $(element);
    
        element.find('img').each(function() {
	
	    var $img = $(this);
	    
	    if($img.css('display') == 'inline') {
	    
	        var imgHeight = $img.height();
		
		$img.css({
		    'marginTop': imgHeight / 3,
		    'marginBottom': imgHeight / 3,
		    'vertical-align': 'middle'
		});
		
		
		
	    
	    }
	
	
	});
    
    
    };
    
    /** @param jQuery's element set
              @note This method gives clearance to an element and sets the hasLayout property to true */
    
    $.clearFix = function(element) {
    
        element = $(element);
	
	element.css({'overflow': 'hidden', 'height': '1%'});
    
    
    };
    


})(jQuery);