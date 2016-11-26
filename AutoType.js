/*
*   Created by Johan Sundman.
*   Syntax: bool autoType( object DomTarget, string Text, int Delay );
*/

function autoType(target = document.body, text = "", delay = 150) {
    var offset = 0; // The current char index
    
    // Check if element exist
    if(target == null){ return false } // Stop execution if element dosn't exist
    
    // The printing of each char
    function print() {
        // Check for the need to exit
        if (offset == text.length || typeof text[offset] == "undefined") {
             clearInterval(interval); // Remove the interval
             return true; // Exit the function
        }
        
        // Add the actual text
        target.innerHTML += text[offset]; // Add a char at a time
        offset++; // Increment to the next char
    }
  
    // The call interval
    var interval = setInterval(print, delay);
    
    // No caught error occured
    return true;
}