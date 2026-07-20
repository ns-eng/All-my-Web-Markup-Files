let v1 = 3;
let v2 = 4;  // added ';' to the end of this statement
//alert("3 times 4" + equals + v1 * v2");
alert("3 * 4 = " + v1 * v2); // added the alert call from the comment above but modified it 
 // Sets the customisation for the styling section tag unsing .style
            let section = document.getElementById("s1") // Removed "s" from .getElementsById
            section.style.width = "50%"
            section.style.textAlign = "center"
            section.style.fontFamily = "arial, serif"
            section.style.fontWeight = "bold" // Fixed the spelling of 'style' in section.style
            section.style.fontStyle = "italic"
            section.style.fontSize = "20px"

            // Sets the customisation for each individual colour/div tag
            // RED
			//.innerHTML use it to set or change elements' innerHTML content.
            const red = document.getElementById("red") // Capatilized the 'E' in .getelementById
            red.innerHTML = "RED"
            red.style.backgroundColor = "red"

            // ORANGE
            const orange = document.getElementById("orange")
            orange.innerHTML = "ORANGE" // Capatiled the 'HTML' in .innerhtml
            orange.style.backgroundColor = "orange"

            // YELLOW
            const yellow = document.getElementById("yellow")
            yellow.innerHTML = "YELLOW"
            yellow.style.backgroundColor = "yellow"

            // GREEN
            const green = document.getElementById("green") // Replaced 'const purple' with 'const green'
            green.innerHTML = "GREEN"
            green.style.backgroundColor = "green"

            // INDIGO
            const indigo = document.getElementById("indigo")
            indigo.innerHTML = "INDIGO"
            indigo.style.backgroundColor = "indigo"

            // PURPLE
            const violet = document.getElementById("violet")
            violet.innerHTML = "VIOLET"
            violet.style.backgroundColor = "violet"