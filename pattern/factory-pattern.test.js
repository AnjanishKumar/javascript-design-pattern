// factory-pattern.test.js
const fs = require('fs');
const path = require('path');

// Import the factory pattern code
// Note: In a real project, you would use proper imports
// This approach is used because we're testing a standalone file
const filePath = path.join(__dirname, 'factory-pattern.js');
eval(fs.readFileSync(filePath, 'utf8'));

describe('Car Parts Factory Pattern', () => {
  describe('CarDoor Constructor', () => {
    test('should create a door with default options', () => {
      const door = new CarDoor({});
      
      expect(door.color).toBe('red');
      expect(door.side).toBe('right');
      expect(door.hasPowerWindows).toBe(true);
    });

    test('should create a door with custom options', () => {
      const door = new CarDoor({
        color: 'blue',
        side: 'left',
        hasPowerWindows: false
      });
      
      expect(door.color).toBe('blue');
      expect(door.side).toBe('left');
      expect(door.hasPowerWindows).toBe(false);
    });

    test('should override only specified options', () => {
      const door = new CarDoor({ color: 'black' });
      
      expect(door.color).toBe('black');
      expect(door.side).toBe('right'); // default
      expect(door.hasPowerWindows).toBe(true); // default
    });
  });

  describe('CarSeat Constructor', () => {
    test('should create a seat with default options', () => {
      const seat = new CarSeat({});
      
      expect(seat.color).toBe('gray');
      expect(seat.material).toBe('leather');
      expect(seat.isReclinable).toBe(true);
    });

    test('should create a seat with custom options', () => {
      const seat = new CarSeat({
        color: 'black',
        material: 'fabric',
        isReclinable: false
      });
      
      expect(seat.color).toBe('black');
      expect(seat.material).toBe('fabric');
      expect(seat.isReclinable).toBe(false);
    });

    test('should override only specified options', () => {
      const seat = new CarSeat({ material: 'vinyl' });
      
      expect(seat.color).toBe('gray'); // default
      expect(seat.material).toBe('vinyl');
      expect(seat.isReclinable).toBe(true); // default
    });
  });

  describe('CarPartFactory', () => {
    let factory;
    
    beforeEach(() => {
      factory = new CarPartFactory();
    });

    test('should create a CarDoor instance when partType is door', () => {
      const door = factory.createPart({ partType: 'door' });
      
      expect(door instanceof CarDoor).toBe(true);
      expect(door.color).toBe('red');
      expect(door.side).toBe('right');
      expect(door.hasPowerWindows).toBe(true);
    });

    test('should create a CarSeat instance when partType is seat', () => {
      const seat = factory.createPart({ partType: 'seat' });
      
      expect(seat instanceof CarSeat).toBe(true);
      expect(seat.color).toBe('gray');
      expect(seat.material).toBe('leather');
      expect(seat.isReclinable).toBe(true);
    });

    test('should create a CarDoor with custom options', () => {
      const door = factory.createPart({
        partType: 'door',
        color: 'green',
        side: 'left',
        hasPowerWindows: false
      });
      
      expect(door instanceof CarDoor).toBe(true);
      expect(door.color).toBe('green');
      expect(door.side).toBe('left');
      expect(door.hasPowerWindows).toBe(false);
    });

    test('should create a CarSeat with custom options', () => {
      const seat = factory.createPart({
        partType: 'seat',
        color: 'brown',
        material: 'suede',
        isReclinable: false
      });
      
      expect(seat instanceof CarSeat).toBe(true);
      expect(seat.color).toBe('brown');
      expect(seat.material).toBe('suede');
      expect(seat.isReclinable).toBe(false);
    });

    test('should return false for invalid partType', () => {
      const result = factory.createPart({ partType: 'engine' });
      
      expect(result).toBe(false);
    });

    test('should return false when partType is missing', () => {
      const result = factory.createPart({});
      
      expect(result).toBe(false);
    });
  });
});