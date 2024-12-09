// src/gradeManagement.ts
import { Student, Course, Grade } from './interfaces';

    // Método para simular el envío de datos a un servidor
    sendDataToServer() {
        console.log("Enviando datos al servidor...");
        console.log("Estudiantes:", JSON.stringify(this.students, null, 2));
        console.log("Cursos:", JSON.stringify(this.courses, null, 2));
        console.log("Calificaciones:", JSON.stringify(this.grades, null, 2));
    }
}
