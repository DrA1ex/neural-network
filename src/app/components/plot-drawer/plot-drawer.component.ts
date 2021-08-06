import {Component, ElementRef, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {COLOR_PATTERN_RGB, Point} from "../../workers/nn.worker.consts";

@Component({
    selector: 'plot-drawer',
    templateUrl: './plot-drawer.component.html',
    styleUrls: ['./plot-drawer.component.css']
})
export class PlotDrawerComponent implements OnChanges {
    @ViewChild('canvasBg', {static: false})
    canvasBg!: ElementRef;
    @ViewChild('canvasPoints', {static: false})
    canvasPoints!: ElementRef;

    @Input("pointRadius")
    pointRadius: number = 5;
    @Input("lineWidth")
    lineWidth: number = 1;

    @Input("canvasWidth")
    canvasWidth: number = 640;
    @Input("canvasHeight")
    canvasHeight: number = 640;

    @Output("points")
    points: Point[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('canvasWidth') || changes.hasOwnProperty("canvasHeight")) {
            setTimeout(() => {
                for (const point of this.points) {
                    this.drawPoint(point);
                }
            }, 100);
        }
    }

    public drawSnapshot(data: ArrayBuffer, width: number, height: number) {
        this.repaint(new Uint8ClampedArray(data), width, height);
    }

    public addPoint(point: Point) {
        this.points.push(point);
        this.drawPoint(point);
    }

    clearPoints() {
        this.points.splice(0, this.points.length);

        const canvas = this.canvasPoints.nativeElement as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }

    private drawPoint(point: Point) {
        const canvas = this.canvasPoints.nativeElement as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }

        ctx.strokeStyle = "solid";
        ctx.lineWidth = this.lineWidth;
        ctx.fillStyle = PlotDrawerComponent.getColorByPointType(point.type);

        const x = point.x * canvas.clientWidth,
            y = point.y * canvas.clientHeight;

        ctx.beginPath();
        ctx.arc(x - this.pointRadius / 2, y - this.pointRadius / 2, this.pointRadius,
            0, 2 * Math.PI, false);
        ctx.closePath();

        ctx.fill();
        ctx.stroke();
    }

    private repaint(snapshot: Uint8ClampedArray, width: number, height: number) {
        const canvas = this.canvasBg.nativeElement as HTMLCanvasElement;
        if (canvas.width !== width) {
            canvas.width = width;
        }
        if (canvas.height !== height) {
            canvas.height = height;
        }

        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }

        const imageData = new ImageData(snapshot, width, height);
        ctx.putImageData(imageData, 0, 0);
    }

    private static getColorByPointType(pointType: number) {
        const value = Math.max(0, Math.min(255, Math.floor(pointType * 255)));
        return COLOR_PATTERN_RGB.replace('$value', value.toString());
    }
}