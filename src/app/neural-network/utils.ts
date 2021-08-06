import * as iter from "../utils/iter";
import * as matrix from "../utils/matrix";
// @ts-ignore
import * as nn from "./neural_network";

export function sig(x: number): number {
    return 1 / (1 + Math.exp(-x));
}

export function vector_sig_der(v: matrix.Matrix1D): matrix.Matrix1D {
    // x * (1 - x)
    return matrix.matrix1d_unary_op(v, a => a * (1 - a));
}

export function print(nn: nn.NeuralNetwork, training_data: [matrix.Matrix1D, matrix.Matrix1D][]) {
    console.log('***');
    for (let i = 0; i < training_data.length; i++) {
        const [t_input, t_output] = training_data[i];
        const out: any[] = nn.compute(t_input);

        const outValue = out.map(n => n.toFixed(2));
        const tOutValue = t_output.map(n => n.toFixed(2));
        const accuracyValue = iter.zip(t_output, out).map(([a, b]) => (100 - Math.abs(a - b) * 100).toFixed(1));

        console.log(`INPUT ${t_input} OUTPUT ${outValue} EXPECTED ${tOutValue} (accuracy ${accuracyValue}%)`);
    }
    console.log('***');
}