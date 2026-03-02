class Employee {
    constructor(name, department){
        this.name = name;
        this.department = department;
    }
    describe(){
        return `${this.name} works in ${this.department} department.`;
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize){
        super(name, department);
        this.teamSize = teamSize;
    }
    describe(){
        return `${this.name} is a manager in the ${this.department} and manages a team of ${this.teamSize} employees.`
    }

}
