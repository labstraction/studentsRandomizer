class Classroom {

    constructor(studentsArray = []) {
        this.studentsArray = studentsArray;
    }

    addStudent(student){
        this.studentsArray.push(student);
    }

    getSquads(members){
        let acc = '';
        for (let i = 0; i < this.studentsArray.length; i++) {
            const student = this.studentsArray[i];
            if (i % members === 0) {
                acc += 'Squadra '+ (i/members+1) + ': ';
            }
            acc += student.toString();
            if (i % members === members-1) {
                acc += '\n';
            }
            else {
                acc += ' e ';
            }

            
        }
        return acc;
    }

    shuffleStudents(){
        const tempArray = [];
        const originalLength = this.studentsArray.length;
        for (let i = 0; i < originalLength; i++) {
            
            const randomIndex = Math.floor(Math.random()*this.studentsArray.length);
            const student = this.studentsArray[randomIndex];
            tempArray.push(student);
            this.studentsArray.splice(randomIndex,1);
            
        }
        this.studentsArray=tempArray;
    }

}
