var checkDescription = function(){
  return "We have " + checkInventory() + " in stock";
}

var checkInventory = function(){
  console.log( 'in checkInventory' );
  var size = document.getElementById('sizeIn').value;
  var color = document.getElementById('colorIn').value;

  if( size == 'small'){
    if ( color == 'blue' ) {
      return 'a sapphire stone';
    }
    else if ( color == 'green' ) {
      return 'a pea';
    }
    else if ( color == 'red' ) {
      return 'vial of blood';
    }
    else {
      return 'other small items, but nothing ' + color;
    }
  }// end small
  else if( size == 'medium'){
    if ( color == 'green' ) {
      return 'a pine tree';
    }
    else if ( color == 'red' ) {
      return 'nothing medium in red';
    }
    else {
      return 'other medium items, but nothing ' + color;
    }
  } // end medium
  else if( size == 'large'){
    if( color == 'blue' ){
      return 'an ocean';
    }
    else if ( color == 'red' ) {
      return 'a giant tub of tomato soup';
    }
    else {
      return 'other large items, but nothing ' + color;
    }
  } // end large
  else{
    return 'nothing that size';
  }
}
