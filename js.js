if  (!String.prototype.repeatt   ){
    
     String.prototype.repeatt = function(count) { 

 		var text = ""; // zmienna tekst odpowiada pustemu polu, w które będziemy wpisywać tekst

 		for (i=0; i < count; i++) { 
 			text += " " + this; 
 		}
 		return text;
	};
    
    
}