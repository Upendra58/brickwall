document.getElementsByTagName("h1")[0].style.fontSize = "3vw";

function getRandomColor()
{
  var randomColor = Math.floor(Math.random()*16777).toString(16);
  randomColor = "#"+randomColor;
  return randomColor;
}

function getAllDivAttributes(){
  var allDivElements = document.getElementsByTagName("div");
  console.log(allDivElements.size);
  var allDivAttribs = new Array(allDivElements.size);
  var style = null;
  for(i=0; i<allDivElements.size; i++)
  {
    style = getComputedStyle(allDivElements[i]);
    console.log(style);
    allDivAttribs.add(style);
  } 
 // return allDivAttribs;
}

function changeColorofBlocks(blocks, changeColor){
  for(i=0; i<blocks.length; i++)
    {
      blocks[i].style.backgroundColor = changeColor;
    }
}

function getRowColumnStartEnd(block){
  const attribs = getComputedStyle(block);
  var m = new Map();
  m.set('RS',attribs.getPropertyValue('grid-row-start'));
  m.set('RE',attribs.getPropertyValue('grid-row-end'));
  m.set('CS',attribs.getPropertyValue('grid-column-start'));
  m.set('CE',attribs.getPropertyValue('grid-column-end'));
  return m;
}

function getDimension(block){
  const attribs = getComputedStyle(block);
  var m = new Map();
  m.set('width',attribs.getPropertyValue('width'));
  m.set('height',attribs.getPropertyValue('height'));
  return m;
}

function checkLeftRight(){
  
}

function checkTopBottom(){
  
}

function checkForWhiteBlock(block)
{
  var x = document.getElementById(block.id);
  
  //Obtaining Row Column Start and End
  var RCSEMap = getRowColumnStartEnd(block);
  
  //get the height and width
  var dimensionMap = getDimension(block);
  
  getAllDivAttributes();
  
  //Check adjacent blocks
  //Check Right and Left 
 // checkLeftRight();
  //checkTopBottom();
  
}

function onMouseClickRed(block){
  var redBlocks = document.getElementsByName("colorRed");
  var changeColor = getRandomColor();
  
  //Check for adjacent white blocks
  checkForWhiteBlock(block);
  
  //Change Color of the blocks
  changeColorofBlocks(redBlocks,changeColor);
    
}

function onMouseClickPurple(){
  var purpleBlocks = document.getElementsByName("colorPurple");
  var changeColor = getRandomColor();
  for(i=0; i<purpleBlocks.length; i++)
    {
      purpleBlocks[i].style.backgroundColor = changeColor;
    }
}

function onMouseClickOrange(){
  var orangeBlocks = document.getElementsByName("colorOrange");
  var changeColor = getRandomColor();
  for(i=0; i<orangeBlocks.length; i++)
    {
      orangeBlocks[i].style.backgroundColor = changeColor;
    }
  
}

function onMouseClickBlue(){
  var blueBlocks = document.getElementsByName("colorBlue");
  var changeColor = getRandomColor();
  for(i=0; i<blueBlocks.length; i++)
    {
      blueBlocks[i].style.backgroundColor = changeColor;
    }
}