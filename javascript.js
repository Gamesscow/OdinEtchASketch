function genDivs(v){ 
    let e = document.body; // whatever you want to append the rows to: 
    for(let i = 0; i < v; i++){ 
      let row = document.createElement("div"); 
      row.className = "row"; 
      for(let x = 1; x <= v; x++){ 
          let cell = document.createElement("div"); 
          cell.className = "gridsquare"; 
          cell.style.height = 800/v + "px";
          cell.style.width = 800/v + "px";
          row.appendChild(cell); 
      } 
      e.appendChild(row); 
    }
  }
  let gridSize = 16;
  let squares;
  function changeGridSize(){
    
    if (squares){
        squares.forEach(square => square.remove());
    }
    gridSize = prompt("Enter the desired grid size", 16);
    genDivs(gridSize);
    squares = document.querySelectorAll(".gridsquare");
    sizeBtn = document.querySelector(".sizeSelector");
    squares.forEach(square => square.addEventListener('mouseover', hoverEvent));
  }
 
  function hoverEvent(e){
    target = e.target;
    target.style.backgroundColor = "black";
  }
  changeGridSize();
  



  
  sizeBtn.addEventListener('click', function (e){
    changeGridSize();
    
    
  });