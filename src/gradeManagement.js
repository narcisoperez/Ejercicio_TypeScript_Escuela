"use strict";
// src/gradeManagement.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeManagement = void 0;
class GradeManagement {
    constructor() {
        this.students = [];
        this.courses = [];
        this.grades = [];
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
}
exports.GradeManagement = GradeManagement;
