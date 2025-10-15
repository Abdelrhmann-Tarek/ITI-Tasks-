import { Shape } from "./Shape.js";
export class Circle extends Shape {
    constructor(public radius : number){
        
        super(radius)
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
    GetPremeter(): number {
        return 2*Math.PI*this.radius
    }

}