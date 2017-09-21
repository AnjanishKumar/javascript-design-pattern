function CarDoor( options ) {
  this.color = options.color || 'red';
  this.side = options.side || 'right';
  this.hasPowerWindows = options.hasPowerWindows || true;
}

function CarSeat( options ) {
  this.color = options.color || 'gray';
  this.material = options.material || 'leather';
  this.isReclinable = options.isReclinable || true;
}

function CarPartFactory() {}

CarPartFactory.prototype.createPart = function createCarPart( options ) {
  var parentClass = null;
  
  if( options.partType === 'door' ) {
    parentClass = CarDoor;
  } else if( options.partType === 'seat' ) {
    parentClass = CarSeat;
  }
  
  if( parentClass === null ) {
    return false;
  }
  
  return new parentClass( options );
}

// example usage
var myPartFactory = new CarPartFactory();
var seat = myPartFactory.createPart( {
  partType : 'seat',
  material : 'leather',
  color : 'blue',
  isReclinable : false
} );

// create a door with deault option
var door = myPartFactory.createPart({partType:'door'});

console.log( seat instanceof CarSeat ); // logs 'true

//logs a CarSeat object with material "leather", color "blue", isReclinable "false"
console.log( seat );

console.log(door instanceof CarDoor); //logs 'true'
//logs a CarDoor object with color "red", side "right", hasPowerWindows "true"
console.log(door);

