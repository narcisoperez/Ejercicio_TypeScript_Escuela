// src/gradeManagement.ts

import { Student, Course, Grade } from './interfaces';

class GradeManagement {
    private students: Student[] = [];
    private courses: Course[] = [];
    private grades: Grade[] = [];
    private nextGradeId: number = 1; // Para llevar el seguimiento del ID de la siguiente calificación

    // CRUD Calificaciones
    create(subject: string, score: number): Grade {
        const newGrade: Grade = { id: this.nextGradeId++, subject, score }; // Asegúrate de que 'id' esté definido en la interfaz Grade
        this.grades.push(newGrade);
        return newGrade;
    }

    read(): Grade[] {
        return this.grades;
    }

    update(id: number, subject: string, score: number): Grade | null {
        const index = this.grades.findIndex(grade => grade.id === id);
        if (index !== -1) {
            const updatedGrade: Grade = { id, subject, score }; // Asegúrate de que 'id' esté definido en la interfaz Grade
            this.grades[index] = updatedGrade;
            return updatedGrade; // Devolver la calificación actualizada
        }
        return null; // Si no se encontró, devolver null
    }

    delete(id: number): Grade | null {
        const index = this.grades.findIndex(grade => grade.id === id);
        if (index !== -1) {
            const deletedGrade = this.grades[index];
            this.grades.splice(index, 1); // Eliminar la calificación
            return deletedGrade; // Devolver la calificación eliminada
        }
        return null; // Si no se encontró, devolver null
    }

    // CRUD Estudiantes
    addStudent(student: Student): void {
        this.students.push(student);
    }

    getStudents(): Student[] {
        return this.students;
    }

    updateStudent(id: number, updatedStudent: Student): void {
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            this.students[index] = updatedStudent;
        }
    }

    deleteStudent(id: number): void {
        this.students = this.students.filter(student => student.id !== id);
    }

    // CRUD Cursos
    addCourse(course: Course): void {
        this.courses.push(course);
    }

    getCourses(): Course[] {
        return this.courses;
    }

    updateCourse(id: number, updatedCourse: Course): void {
        const index = this.courses.findIndex(course => course.id === id);
        if (index !== -1) {
            this.courses[index] = updatedCourse;
        }
    }

    deleteCourse(id: number): void {
        this.courses = this.courses.filter(course => course.id !== id);
    }
}

export { GradeManagement };
