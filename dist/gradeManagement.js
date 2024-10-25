export class GradeManagement {
    constructor() {
        this.students = [];
        this.courses = [];
        this.grades = [];
    }
    // Crear un nuevo grado
    create(subject, score) {
        const newGrade = {
            id: this.grades.length > 0 ? this.grades[this.grades.length - 1].id + 1 : 1,
            subject,
            score,
            studentId: this.students.length > 0 ? this.students[0].id : 0, // Ajustar según tus datos
            courseId: this.courses.length > 0 ? this.courses[0].id : 0 // Ajustar según tus datos
        };
        this.grades.push(newGrade);
        return newGrade;
    }
    // Leer todos los grados
    read() {
        return this.grades;
    }
    // Actualizar un grado existente
    update(id, subject, score) {
        const grade = this.grades.find(g => g.id === id);
        if (grade) {
            grade.subject = subject;
            grade.score = score;
            return grade;
        }
        return null;
    }
    // Eliminar un grado
    delete(id) {
        const index = this.grades.findIndex(g => g.id === id);
        if (index !== -1) {
            const deletedGrade = this.grades.splice(index, 1)[0];
            return deletedGrade;
        }
        return null;
    }
    // CRUD Estudiantes
    addStudent(student) {
        this.students.push(student);
    }
    getStudents() {
        return this.students;
    }
    updateStudent(id, updatedStudent) {
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            this.students[index] = updatedStudent;
        }
    }
    deleteStudent(id) {
        this.students = this.students.filter(student => student.id !== id);
    }
    // CRUD Cursos
    addCourse(course) {
        this.courses.push(course);
    }
    getCourses() {
        return this.courses;
    }
    updateCourse(id, updatedCourse) {
        const index = this.courses.findIndex(course => course.id === id);
        if (index !== -1) {
            this.courses[index] = updatedCourse;
        }
    }
    deleteCourse(id) {
        this.courses = this.courses.filter(course => course.id !== id);
    }
    // CRUD Calificaciones
    addGrade(grade) {
        this.grades.push(grade);
    }
    getGrades() {
        return this.grades;
    }
    updateGrade(studentId, courseId, updatedGrade) {
        const index = this.grades.findIndex(grade => grade.studentId === studentId && grade.courseId === courseId);
        if (index !== -1) {
            this.grades[index] = updatedGrade;
        }
    }
    deleteGrade(studentId, courseId) {
        this.grades = this.grades.filter(grade => grade.studentId !== studentId || grade.courseId !== courseId);
    }
    // Método para imprimir notas de un estudiante en particular
    printStudentGrades(studentId) {
        const studentGrades = this.grades.filter(grade => grade.studentId === studentId);
        console.log(`Calificaciones del estudiante con ID ${studentId}:`);
        studentGrades.forEach(grade => {
            console.log(`Materia: ${grade.subject}, Nota: ${grade.score}`);
        });
    }
    // Método para simular el envío de datos a un servidor
    sendDataToServer() {
        console.log("Enviando datos al servidor...");
        console.log("Estudiantes:", JSON.stringify(this.students, null, 2));
        console.log("Cursos:", JSON.stringify(this.courses, null, 2));
        console.log("Calificaciones:", JSON.stringify(this.grades, null, 2));
    }
}
