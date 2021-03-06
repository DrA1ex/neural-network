import * as matrix from "./matrix";

export interface IActivation {
    value(x: number): number
    moment(x: number): number;
}

export interface ILayer {
    readonly size: number;
    readonly prevSize: number

    readonly biases: matrix.Matrix1D;
    readonly weights: matrix.Matrix2D;

    readonly activation: IActivation;

    build(index: number, prevSize: number): void;
    step(input: matrix.Matrix1D): matrix.Matrix1D;
}

export interface OptimizerStep {
    weightStep: matrix.Matrix1D
    biasStep: matrix.Matrix1D
}

export interface IOptimizer {
    step(layer: ILayer, activations: matrix.Matrix1D, error: matrix.Matrix1D, epoch: number): OptimizerStep
    readonly description: string
}

export type InitializerFn = (size: number, prevSize: number) => matrix.Matrix1D;