// src/gradeManagement.ts
import { Student, Course, Grade } from './interfaces';

export class GradeManagement {
    private students: Student[] = [];
    private courses: Course[] = [];
    private grades: Grade[] = [];

    // Crear un nuevo grado
    create(subject: string, score: number): Grade {
        const newGrade: Grade = {
            id: this.grades.length > 0 ? this.grades[this.grades.length - 1].id + 1 : 1,
            subject,
            score,
            studentId: this.students.length > 0 ? this.students[0].id : 0,  // Ajustar según tus datos
            courseId: this.courses.length > 0 ? this.courses[0].id : 0       // Ajustar según tus datos
        };
        this.grades.push(newGrade);
        return newGrade;
    }

    // Leer todos los grados
    read(): Grade[] {
        return this.grades;
    }

    // Actualizar un grado existente
    update(id: number, subject: string, score: number): Grade | null {
        const grade = this.grades.find(g => g.id === id);
        if (grade) {
            grade.subject = subject;
            grade.score = score;
            return grade;
        }
        return null;
    }

    // Eliminar un grado
    delete(id: number): Grade | null {
        const index = this.grades.findIndex(g => g.id === id);
        if (index !== -1) {
            const deletedGrade = this.grades.splice(index, 1)[0];
            return deletedGrade;
        }
        return null;
    }

    // CRUD Estudiantes
    addStudent(student: Student) {
        this.students.push(student);
    }

    getStudents(): Student[] {
        return this.students;
    }

    updateStudent(id: number, updatedStudent: Student) {
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            this.students[index] = updatedStudent;
        }
    }

    deleteStudent(id: number) {
        this.students = this.students.filter(student => student.id !== id);
    }

    // CRUD Cursos
    addCourse(course: Course) {
        this.courses.push(course);
    }

    getCourses(): Course[] {
        return this.courses;
    }

    updateCourse(id: number, updatedCourse: Course) {
        const index = this.courses.findIndex(course => course.id === id);
        if (index !== -1) {
            this.courses[index] = updatedCourse;
        }
    }

    deleteCourse(id: number) {
        this.courses = this.courses.filter(course => course.id !== id);
    }

    // CRUD Calificaciones
    addGrade(grade: Grade) {
        this.grades.push(grade);
    }

    getGrades(): Grade[] {
        return this.grades;
    }

    updateGrade(studentId: number, courseId: number, updatedGrade: Grade) {
        const index = this.grades.findIndex(grade => grade.studentId === studentId && grade.courseId === courseId);
        if (index !== -1) {
            this.grades[index] = updatedGrade;
        }
    }

    deleteGrade(studentId: number, courseId: number) {
        this.grades = this.grades.filter(grade => grade.studentId !== studentId || grade.courseId !== courseId);
    }

    // Método para imprimir notas de un estudiante en particular
    printStudentGrades(studentId: number) {
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
