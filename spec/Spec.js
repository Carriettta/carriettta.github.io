describe('`Dot` class', () => {
    beforeEach(function () {
        dot = new Dot();
    });

    describe('constructor function', () => {
        it('should declare a `color` property', () => {
            expect(dot.color).toBeDefined();
        });
        it('`color` property should be a string type', () => {
            expect(typeof dot.color).toEqual('string');
        });
        it('should declare a `selected` property', () => {
            expect(dot.selected).toBeDefined();
        });
        it('`selected` property should be false at start', () => {
            expect(dot.selected).toEqual(false)
        });
    });

    describe('`setRandomColor` function', () => {
        it('declare a `setRandomColor` method', () => {
            expect(typeof dot.setRandomColor).toEqual('function');
        });
        it('should select a random color from the available colors', () => {
            // setRandomCOlor is called in the constructor
            expect(dot.availableColors.includes(dot.color)).toEqual(true);
        });
    });
    describe('`getColor` function', () => {
        it('declare a `getColor` method', () => {
            expect(typeof dot.getColor).toEqual('function');
        });
        it('should give back the color', () => {
            expect(typeof dot.getColor()).toEqual('string');
        });
    });
    describe('`setSelected` function', () => {
        it('declare a `setSelected` method', () => {
            expect(typeof dot.setSelected).toEqual('function');
        });
        it('should change `selected`(boolean)', () => {
            if (dot.selected === false) {
                dot.setSelected();
                expect(dot.selected).toEqual(true)
            } else {
                dot.setSelected();
                expect(dot.selected).toEqual(false)
            }
        });
    });
});
describe('`Board` class', () => {
    let board = new Board();
    // beforeEach(function () {
        
    // });
    describe('constructor function', () => {
        it('should declade a `boardSize` propery', () => {
            expect(board.boardSize).toBeDefined();
        });
        it('should declade a `dots` propery', () => {
            expect(board.dots).toBeDefined();
            expect(board.dots.length).toEqual(board.boardSize);
            expect(board.dots[0].length).toEqual(board.boardSize);
            expect(board.dots[0][1] instanceof Dot).toEqual(true);
        });
    });
    describe('removeDot` function', () => {
        it('declare a `removeDot` method', () => {
            expect(typeof board.removeDot).toEqual('function');
        });
        it('should delete a dot', () => {
            // expect(board.removeDot(1,2)).toEqual(null)
        });
    });

    describe('slideDownFrom` function', () => {
        it('declare a `slideDownFrom` method', () => {   
            expect(typeof board.slideDownFrom).toEqual('function');
        });
        it('should slide down all dots above', () => {
            let toBeSlided = board.dots[0][4];
            let toBeSlided2 = board.dots[1][4];
            board.slideDownFrom(2,4);

            expect(toBeSlided.dotSerialNumber).toBe(board.dots[1][4].dotSerialNumber);
            expect(toBeSlided2.dotSerialNumber).toBe(board.dots[2][4].dotSerialNumber);
            
            let toBeSlided3 = board.dots[0][2];
            let toBeSlided4 = board.dots[1][2];
            let toBeSlided5 = board.dots[2][2];
           
            board.slideDownFrom(3,2);

            expect(toBeSlided3).toBe(board.dots[1][2]);
            expect(toBeSlided4).toBe(board.dots[2][2]);
            expect(toBeSlided5).toBe(board.dots[3][2]);

        });
    });
    describe('`isAdjesent` function', () => {
        it('should be true of adjesent dots', () => {
            expect(board.isAdjacentTo(2,2, 4,4)).toBe(false);
            expect(board.isAdjacentTo(2,2, 2,3)).toBe(true);
        });
    });
});


// describe('validMoves', () => {
//     it("should be defined", ()=> {
//         expect(typeof validMoves).toEqual("funtion")
//     })
// });