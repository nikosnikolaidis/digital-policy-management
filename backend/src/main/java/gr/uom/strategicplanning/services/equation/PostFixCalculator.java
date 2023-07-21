package gr.uom.strategicplanning.services.equation;

public class PostFixCalculator {

    private static final String ADD = "+";
    private static final String SUB = "-";
    private static final String MUL = "*";
    private static final String DIV = "/";

    private Double result;

    public PostFixCalculator(String input){
        this.result = calculate(InfixToPostfix.infixToPostfix(input));
    }

    private Double calculate(String input) {
        SinglyLinkedListStack<Double> stack = new SinglyLinkedListStack<>();

        String[] inputs = input.split(" ");

        return handleCalculation(stack, inputs);
    }

    private static Double handleCalculation(SinglyLinkedListStack<Double> stack, String[] el) {
        Double operand1, operand2;

        for(int i = 0; i < el.length; i++) {
            if( el[i].equals(ADD) || el[i].equals(SUB) || el[i].equals(MUL) || el[i].equals(DIV) ) {
                operand2 = stack.pop();
                operand1 = stack.pop();
                switch(el[i]) {
                    case ADD: {
                        Double local = operand1 + operand2;
                        stack.push(local);
                        break;
                    }

                    case SUB: {
                        Double local = operand1 - operand2;
                        stack.push(local);
                        break;
                    }

                    case MUL: {
                        Double local = operand1 * operand2;
                        stack.push(local);
                        break;
                    }

                    case DIV: {
                        Double local = operand1 / operand2;
                        stack.push(local);
                        break;
                    }
                }
            } else {
                stack.push(Double.parseDouble(el[i]));
            }
        }

        return stack.pop();
    }

    public Double getResult() {
        return result;
    }
}
