document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".button");
    let clickCount = 0; 

    button.addEventListener("click", function() {
        clickCount++; 

        if (clickCount === 1) {
            const newText1 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(165, 165, 100)"; 
            newText1.textContent = "Joy has found its way into my life.";
            newText1.style.position = "absolute";
            newText1.style.top = "50px";
            newText1.style.left = "200px";
            newText1.style.fontFamily = "Lobster";
            newText1.style.fontSize = "35px";
            newText1.style.color = "white";

            document.body.appendChild(newText1);
        } else if (clickCount === 2) {
            const newText2 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(100, 165, 134)"; 
            newText2.textContent = "It comes in unexpected moments.";
            newText2.style.position = "absolute";
            newText2.style.top = "500px";
            newText2.style.left = "250px"; 
            newText2.style.fontFamily = "Lobster";
            newText2.style.fontSize = "50px";
            newText2.style.color = "white";

            document.body.appendChild(newText2);
        } else if (clickCount === 3) {
            const newText3 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(100, 138, 165)"; 
            newText3.textContent = "A small smile or a ray of warm sunlight.";
            newText3.style.position = "absolute";
            newText3.style.top = "200px"; 
            newText3.style.left = "100px"; 
            newText3.style.fontFamily = "Lobster";
            newText3.style.fontSize = "50px";
            newText3.style.color = "white";

            document.body.appendChild(newText3);
        } else if (clickCount === 4) {
            const newText4 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(141, 100, 165)"; 
            newText4.textContent = "This joy fills my heart.";
            newText4.style.position = "absolute";
            newText4.style.top = "100px";
            newText4.style.left = "1000px";
            newText4.style.fontFamily = "Lobster";
            newText4.style.fontSize = "40px";
            newText4.style.color = "white";

            document.body.appendChild(newText4);
        } else if (clickCount === 5) {
            const newText5 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(117, 165, 100)"; 
            newText5.textContent = "It adds wonder to ordinary days.";
            newText5.style.position = "absolute";
            newText5.style.top = "700px";
            newText5.style.left = "800px";
            newText5.style.fontFamily = "Lobster";
            newText5.style.fontSize = "35px";
            newText5.style.color = "white";

            document.body.appendChild(newText5);
        } else if (clickCount === 6) {
            const newText5 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(165, 110, 100)"; 
            newText5.textContent = "Joy has come into my life.";
            newText5.style.position = "absolute";
            newText5.style.top = "350px";
            newText5.style.left = "1000px";
            newText5.style.fontFamily = "Lobster";
            newText5.style.fontSize = "40px";
            newText5.style.color = "white";

            document.body.appendChild(newText5);
        } else if (clickCount === 7) {
            const newText7 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(90, 180, 120)"; 
            newText7.textContent = "Contentment surrounds my day.";
            newText7.style.position = "absolute";
            newText7.style.top = "150px";
            newText7.style.left = "500px";
            newText7.style.fontFamily = "Lobster";
            newText7.style.fontSize = "45px";
            newText7.style.color = "white";

            document.body.appendChild(newText7);
        } else if (clickCount === 8) {
            const newText8 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(200, 150, 100)"; 
            newText8.textContent = "Every moment feels magical.";
            newText8.style.position = "absolute";
            newText8.style.top = "700px";
            newText8.style.left = "150px";
            newText8.style.fontFamily = "Lobster";
            newText8.style.fontSize = "28px";
            newText8.style.color = "white";

            document.body.appendChild(newText8);
        } else if (clickCount === 9) {
            const newText9 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(150, 100, 150)"; 
            newText9.textContent = "A gentle laugh brings delight.";
            newText9.style.position = "absolute";
            newText9.style.top = "250px"; 
            newText9.style.left = "700px"; 
            newText9.style.fontFamily = "Lobster";
            newText9.style.fontSize = "20px";
            newText9.style.color = "white";
        
            document.body.appendChild(newText9);
        } else if (clickCount === 10) {
            const newText10 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(180, 120, 190)"; 
            newText10.textContent = "Warmth spreads from a joyful thought.";
            newText10.style.position = "absolute";
            newText10.style.top = "50px";
            newText10.style.left = "700px";
            newText10.style.fontFamily = "Lobster";
            newText10.style.fontSize = "30px";
            newText10.style.color = "white";

            document.body.appendChild(newText10);
        } else if (clickCount === 11) {
            const newText11 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(120, 140, 200)"; 
            newText11.textContent = "Serenity whispers softly.";
            newText11.style.position = "absolute";
            newText11.style.top = "300px"; 
            newText11.style.left = "750px"; 
            newText11.style.fontFamily = "Lobster";
            newText11.style.fontSize = "40px";
            newText11.style.color = "white";
        
            document.body.appendChild(newText11);
        } else if (clickCount === 12) {
            const newText12 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(170, 110, 140)"; 
            newText12.textContent = "Hope blossoms in each sunrise.";
            newText12.style.position = "absolute";
            newText12.style.top = "300px";
            newText12.style.left = "800px";
            newText12.style.fontFamily = "Lobster";
            newText12.style.fontSize = "35px";
            newText12.style.color = "white";

            document.body.appendChild(newText12);
        } else if (clickCount === 13) {
            const newText13 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(100, 200, 180)"; 
            newText13.textContent = "My spirit soars with excitement.";
            newText13.style.position = "absolute";
            newText13.style.top = "600px";
            newText13.style.left = "300px";
            newText13.style.fontFamily = "Lobster";
            newText13.style.fontSize = "50px";
            newText13.style.color = "white";

            document.body.appendChild(newText13);
        } else if (clickCount === 14) {
            const newText14 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(140, 170, 80)"; 
            newText14.textContent = "Love enriches the simplest moments.";
            newText14.style.position = "absolute";
            newText14.style.top = "500px";
            newText14.style.left = "50px";
            newText14.style.fontFamily = "Lobster";
            newText14.style.fontSize = "25px";
            newText14.style.color = "white";

            document.body.appendChild(newText14);
        } else if (clickCount === 15) {
            const newText15 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(160, 80, 190)"; 
            newText15.textContent = "Bright days follow me around.";
            newText15.style.position = "absolute";
            newText15.style.top = "700px";
            newText15.style.left = "600px";
            newText15.style.fontFamily = "Lobster";
            newText15.style.fontSize = "30px";
            newText15.style.color = "white";

            document.body.appendChild(newText15);
        } else if (clickCount === 16) {
            const newText16 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(210, 130, 90)"; 
            newText16.textContent = "Gratitude overflows from my heart.";
            newText16.style.position = "absolute";
            newText16.style.top = "100px";
            newText16.style.left = "50px";
            newText16.style.fontFamily = "Lobster";
            newText16.style.fontSize = "35px";
            newText16.style.color = "white";
        
            document.body.appendChild(newText16);
        } else if (clickCount === 17) {
            const newText17 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(180, 190, 90)"; 
            newText17.textContent = "Smiles light up every room.";
            newText17.style.position = "absolute";
            newText17.style.top = "500px";
            newText17.style.left = "1200px";
            newText17.style.fontFamily = "Lobster";
            newText17.style.fontSize = "45px";
            newText17.style.color = "white";
        
            document.body.appendChild(newText17);
        } else if (clickCount === 18) {
            const newText18 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(120, 150, 100)"; 
            newText18.textContent = "Peace wraps me in its embrace.";
            newText18.style.position = "absolute";
            newText18.style.top = "300px";
            newText18.style.left = "100px";
            newText18.style.fontFamily = "Lobster";
            newText18.style.fontSize = "30px";
            newText18.style.color = "white";
        
            document.body.appendChild(newText18);
        } else if (clickCount === 19) {
            const newText19 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(130, 100, 180)"; 
            newText19.textContent = "Every breath brings joy.";
            newText19.style.position = "absolute";
            newText19.style.top = "350px";
            newText19.style.left = "600px";
            newText19.style.fontFamily = "Lobster";
            newText19.style.fontSize = "40px";
            newText19.style.color = "white";
        
            document.body.appendChild(newText19);
        } else if (clickCount === 20) {
            const newText20 = document.createElement("div");
            document.body.style.backgroundColor = "rgb(90, 160, 140)"; 
            newText20.textContent = "Life is a series of beautiful moments.";
            newText20.style.position = "absolute";
            newText20.style.top = "400px";
            newText20.style.left = "300px";
            newText20.style.fontFamily = "Lobster";
            newText20.style.fontSize = "35px";
            newText20.style.color = "white";
        
            document.body.appendChild(newText20);
        }
       
    });
});