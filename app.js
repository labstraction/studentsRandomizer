const s1 = new Student("manuela", "ariotti");
const s2 = new Student("damiano", "di lionardo");
const s3 = new Student("cesare", "falzone");
const s4 = new Student("luca", "verduci");
const s5 = new Student("isabella", "ottonello");
const s6 = new Student("stefania", "ghergut");
const s7 = new Student("ares", "fiumicelli");
const s8 = new Student("francesca", "ercolani");
const s9 = new Student("stefano", "florio");
const s10 = new Student("bryan", "rojas");

console.log(s1.toString());

const class1 = new Classroom([s1,s2,s3,s4,s5,s6,s7,s8,s9,s10]);

class1.shuffleStudents()

console.log(class1.getSquads(2));