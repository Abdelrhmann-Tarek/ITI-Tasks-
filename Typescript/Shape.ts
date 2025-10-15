
export abstract class Shape {
    constructor(public dim :number ){
        this.dim = dim
        
    }
    abstract getArea(): number
    abstract GetPremeter() : number 
}