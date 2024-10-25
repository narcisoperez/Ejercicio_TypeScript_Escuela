"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const gradeManagement_1 = require("./gradeManagement");
const gradeManager = new gradeManagement_1.GradeManagement();
// Añadir estudiantes
const student1 = { id: 1, name: 'John Doe' };
const student2 = { id: 2, name: 'Jane Smith' };
gradeManager.addStudent(student1);
gradeManager.addStudent(student2);
// Añadir cursos
const course1 = { id: 1, name: 'Math', credits: 3 };
const course2 = { id: 2, name: 'Science', credits: 4 };
gradeManager.addCourse(course1);
gradeManager.addCourse(course2);
// Añadir calificaciones
const grade1 = { studentId: 1, courseId: 1, grade: 90 };
const grade2 = { studentId: 2, courseId: 2, grade: 85 };
gradeManager.addGrade(grade1);
gradeManager.addGrade(grade2);
// Ver estudiantes, cursos, y calificaciones
console.log('Estudiantes:', gradeManager.getStudents());
console.log('Cursos:', gradeManager.getCourses());
console.log('Calificaciones:', gradeManager.getGrades());
