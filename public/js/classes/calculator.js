/**
 * Class that provides calculation logic
 */
class Calculator {
    multiply(a, b) {
        this.validateOperand(a);
        this.validateOperand(b);

        return a * b;
    }

    divide(a, b) {
        this.validateOperand(a);
        this.validateOperand(b);

        return a / b;
    }

    add(a, b) {
        this.validateOperand(a);
        this.validateOperand(b);

        return a + b;
    }

    substract(a, b) {
        this.validateOperand(a);
        this.validateOperand(b);

        return a - b;
    }

    divideByModule(a, b) {
        this.validateOperand(a);
        this.validateOperand(b);

        return a % b;
    }

    negate(a) {
        this.validateOperand(a);

        return -a;
    }

    parseFloat(str) {
        return parseFloat(str);
    }

    isNumber(str) {
        return (
            !isNaN(str) &&
            !isNaN(parseFloat(str))
        );
    }

    validateOperand(operand) {
        if (!this.isNumber(operand)) {
            throw new Error(`Operand '${operand}' is not a number`);
        }
    }
}

export { Calculator };