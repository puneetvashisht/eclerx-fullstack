import  { Person } from "./person_class.mjs"

export class Teacher extends Person{
    constructor(name, job){
        super(name);
        this.job = job;
    }

    teach(){
        console.log("teaching...");
    }
}