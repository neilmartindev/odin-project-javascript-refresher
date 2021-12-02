function Student(name, grade) {
    this.name = name
    this.grade = grade
}

Student.prototype.sayName = function() {
    console.log(this.name)
}

Student.prototype.goToProm = function() {
    // ??
}

function EigthGrader(name) {
    this.name = name
    this.grade = 8
}

EigthGrader.prototype = Object.create(Student.prototype)

const carl = new EigthGrader ("carl")
carl.sayName()
carl.grade
