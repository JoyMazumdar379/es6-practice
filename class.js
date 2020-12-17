class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.university = "South East University"
    }
}

const student1 = new Student(2015000000022, "Joy");
const student2 = new Student(2015000000023, "Shanto");
console.log(student1, student2);
console.log(student1.id, student2.id);
console.log(student1.name, student2.name);
console.log(student1.id, student1.name, student2.id, student2.name);