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
    beforeEach(function () {
        board = new Board();
    });
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
    describe('`removeDot` function', () => {
        it('declare a `removeDot` method', () => {
            expect(typeof board.removeDot).toEqual('function');
        });
        it('should delete a dot', () => {
            board.removeDot(1, 2);
            expect(board.dots[1][2]).toEqual(null);
        });
    });
    describe('`findDotAbove` function', () => {
        it('declare a `findDotAbove` method', () => {
            expect(typeof board.findDotAbove).toEqual('function');
        });
        it('should find the dot above', () => {
            expect(board.findDotAbove(4, 4)).toEqual(3);
            expect(board.findDotAbove(0, 4)).toEqual(3);
            expect(board.findDotAbove(2, 2)).toEqual(1);
            expect(board.findDotAbove(0, 1)).toEqual(0);
            expect(board.findDotAbove(0, 0)).toEqual(undefined);
        });
    });
    describe('`falldown` function', () => {
        it('declare a `falldown` method', () => {
            expect(typeof board.falldown).toEqual('function');
        });
        it('dot above should falldown', () => {
            let dotToFall = board.dots[4][3];
            board.removeDot(4, 4);
            board.falldown(4, 4);
            expect(board.dots[4][4]).toEqual(dotToFall);
        });
    });
    describe('`everythingFalls` function', () => {
        it('declare a `everythingFalls` method', () => {
            expect(typeof board.everythingFalls).toEqual('function');
        });
        // it('should make everything fall', () => {

        // });
    });
    describe('`isAdjacentTo` function', () => {
        it('declare a `isAdjacentTo` method', () => {
            expect(typeof board.isAdjacentTo).toEqual('function');
        });
        it('should be true of adjesent dots', () => {
            expect(board.isAdjacentTo(2, 2, 4, 4)).toBe(false);
            expect(board.isAdjacentTo(2, 2, 2, 3)).toBe(true);
        });
    });
    describe('`addSelection` function', () => {
        it('declare a `addSelection` method', () => {
            expect(typeof board.addSelection).toEqual('function');
        });
        it('should add selected dot to `selectionChain`', () => {
            var dotToSelect = [{
                x: 1,
                y: 3,
                dot: board.dots[1][3]
            }]
            board.addSelection(1, 3);
            expect(board.selectionChain).toEqual(dotToSelect)
        });
    });
    describe('`canBeSelected` function', () => {
        it('declare a `canBeSelected` method', () => {
            expect(typeof board.canBeSelected).toEqual('function');
        });
        // random :(
        // it('should decide if the dot can be selected', () => {
        //     board.select(1,1);
        //     expect(board.canBeSelected(1,2)).toBe(true)
        // });
    });
    describe('`select` function', () => {
        it('declare a `select` method', () => {
            expect(typeof board.select).toEqual('function');
        });
        // it('should add select a dot', () => {

        // });
    });
    describe('`endRound` function', () => {
        it('declare a `endRound` method', () => {
            expect(typeof board.endRound).toEqual('function');
        });
        // it('should delete the selected dots', () => {

        // });
    });
});