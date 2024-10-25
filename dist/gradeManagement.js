// src/gradeManagement.ts
class GradeManagement {
    constructor() {
        this.students = [];
        this.courses = [];
        this.grades = [];
        this.nextGradeId = 1; // Para llevar el seguimiento del ID de la siguiente calificación
    }
    // CRUD Calificaciones
    create(subject, score) {
        const newGrade = { id: this.nextGradeId++, subject, score }; // Asegúrate de que 'id' esté definido en la interfaz Grade
        this.grades.push(newGrade);
        return newGrade;
    }
    read() {
        return this.grades;
    }
    update(id, subject, score) {
        const index = this.grades.findIndex(grade => grade.id === id);
        if (index !== -1) {
            const updatedGrade = { id, subject, score }; // Asegúrate de que 'id' esté definido en la interfaz Grade
            this.grades[index] = updatedGrade;
            return updatedGrade; // Devolver la calificación actualizada
        }
        return null; // Si no se encontró, devolver null
    }
    delete(id) {
        const index = this.grades.findIndex(grade => grade.id === id);
        if (index !== -1) {
            const deletedGrade = this.grades[index];
            this.grades.splice(index, 1); // Eliminar la calificación
            return deletedGrade; // Devolver la calificación eliminada
        }
        return null; // Si no se encontró, devolver null
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
}
export { GradeManagement };
