//Random Links

//I want to have four links chosen at random

//function relatedLinks
function relatedLinks() {
  //set labelLink
  const setLabel = document.querySelectorAll('.labelLink');

  //create an result array
  let result =[];

  //first set display to none using for loop
  for(let i=0; i<setLabel.length; i++) {
    setLabel[i].style.display = 'none';
  }

  //use a while loop to display labels random
  for (let j=0; j<6; j++) {
    //create random number variable
    let randomNumber = Math.floor(Math.random()*setLabel.length);
    //if current index has already been selected it cannot be selected 
    if (result.includes(setLabel[randomNumber]) === false)  {
      result.push(setLabel[randomNumber]);
      j++
    }
  }

 for (let k =0; k<result.length; k++) {
  result[k].style.display = 'block';
 }
}

relatedLinks();