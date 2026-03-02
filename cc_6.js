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

const emp1 = new Employee ("Siddhant Pandey", "Finance");
const emp2 = new Employee ("Brandon Dye", "Sales");
const emp3 = new Employee ("Aron Buttles", "Human Resources");

const mngr1 = new Manager ("John Smith", "IT", 13);
const mngr2 = new Manager ("Emilia Clarkson", "Finance", 25);

class Company {
    constructor() {
        this.employees = [];
    }
    addEmployee (Employee){
        this.employees.push(Employee);
    }
    listEmployees(){
        this.employees.forEach(Employee => {
            console.log(Employee.describe());
        });
    }
}

const company = new Company();

company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(mngr1);
company.addEmployee(mngr2);

company.listEmployees();

