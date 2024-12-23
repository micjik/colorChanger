document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });

  function doSomething() {
    console.info("DOM loaded");
  }
  
  if (document.readyState === "loading") {
    // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", doSomething);
  } else {
    // `DOMContentLoaded` has already fired
    doSomething();
  } 

  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");
 
   
  


      changeColorBtn.addEventListener('click', ()=> {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        colorBox.style.backgroundColor = color;
    
      })
  