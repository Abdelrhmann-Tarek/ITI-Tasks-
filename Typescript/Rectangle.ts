import { Shape } from "./Shape.js";
export class Rectangle extends Shape {
    constructor(public width :number ,public height :number ){
        super(width)

    }
    getArea(): number {
        return this.width * this.height
    }
    GetPremeter(): number {
        return this.height +this.width * 2 
    }

}