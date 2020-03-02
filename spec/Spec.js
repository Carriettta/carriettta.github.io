describe('Dot class', () => {
    beforeEach(function () {
        dot = new Dot();
    });

    describe('constructor function', () => {
        it('should declare a color property as part of Dot', () => {
            expect(dot.color).toBeDefined();
        });
        it('should be a string type', () => {
            expect(typeof dot.color).toEqual('string');
        });
        it('selected should be false at start', () => {
            expect(dot.selected).toEqual(false)
        });
    });

    describe('setRandomColor function', () => {
        it('declare a setRandom method', () => {
            expect(typeof dot.setRandomColor).toEqual('function');
        });
        it('should select a random color from the available colors', () => {
            // setRandomCOlor is called in the constructor
            expect(dot.availableColors.includes(dot.color)).toEqual(true);
        });
    });
    describe('getColor function', () => {
        it('declare a getColor method', () => {
            expect(typeof dot.getColor).toEqual('function');
        });
        it('should give back the color', () => {
            expect(typeof dot.getColor()).toEqual('string');
        });
    });
    describe('setSelected function', () => {
        it('declare a setSelected method', () => {
            expect(typeof dot.setSelected).toEqual('function');
        });
        it('should change the boolean of selected', () => {
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

// describe('validMoves', () => {
//     it("should be defined", ()=> {
//         expect(typeof validMoves).toEqual("funtion")
//     })
// });