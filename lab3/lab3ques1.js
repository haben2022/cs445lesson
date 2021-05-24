function University(name, dept) {
    this.name = name;
    this.dept = dept;
    this.graduation = function (year) {
        console.log("Graduating " + this.dept + " " + year + " students");
    };
}
var miu = new University("miu", "Computer Science");
miu.graduation(2019);
