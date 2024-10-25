// src/index.ts

import { GradeManagement } from './gradeManagement.js';
import * as readline from 'readline';

const gradeManager = new GradeManagement();

// Configuración de readline para entrada de datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Cambiar selectedStudentId a un número, inicialmente no seleccionado
let selectedStudentId: number = -1; // -1 indica que no hay estudiante seleccionado

// Función para agregar un nuevo estudiante
function addStudent() {
    rl.question('Ingrese el nombre del estudiante: ', (name) => {
        const id = gradeManager.getStudents().length + 1;
        gradeManager.addStudent({ id, name });
        console.log(`Estudiante ${name} agregado con ID ${id}`);
        askForNextAction();
    });
}

// Función para seleccionar un estudiante
function selectStudent() {
    viewStudents();
    rl.question('Ingrese el ID del estudiante para seleccionar: ', (id) => {
        const studentId = parseInt(id);
        if (gradeManager.getStudents().some(student => student.id === studentId)) {
            selectedStudentId = studentId;
            console.log(`Estudiante con ID ${studentId} seleccionado.`);
        } else {
            console.log('Estudiante no encontrado.');
        }
        askForNextAction();
    });
}

// Función para ver todos los estudiantes
function viewStudents() {
    console.log('Estudiantes:', gradeManager.getStudents());
}

// Función para ver las calificaciones del estudiante seleccionado
function viewSelectedStudentGrades() {
    if (selectedStudentId === -1) { // Comprobación con el valor predeterminado
        console.log("Por favor, seleccione primero un estudiante.");
    } else {
        gradeManager.printStudentGrades(selectedStudentId);
    }
    askForNextAction();
}

/// Función para agregar un nuevo grado
function addGrade() {
    // Verificamos si no se ha seleccionado un estudiante
    if (selectedStudentId === -1) {
        console.log("Por favor, seleccione primero un estudiante.");
        askForNextAction(); // Regresamos al menú principal
        return;
    }
    
    rl.question('Ingrese la materia: ', (subject) => {
        rl.question('Ingrese la puntuación: ', (score) => {
            const parsedScore = parseInt(score);
            // Verificamos que la puntuación ingresada sea un número válido
            if (isNaN(parsedScore)) {
                console.log('La puntuación debe ser un número válido.');
                askForNextAction(); // Regresamos al menú principal
                return;
            }

            // Pregunta por el courseId
            rl.question('Ingrese el ID del curso: ', (courseIdInput) => {
                const courseId = parseInt(courseIdInput);
                if (isNaN(courseId)) {
                    console.log('El ID del curso debe ser un número válido.');
                    askForNextAction(); // Regresamos al menú principal
                    return;
                }

                // Ahora pasamos todos los campos requeridos
                gradeManager.addGrade({ 
                    id: Date.now(), 
                    subject, 
                    score: parsedScore, 
                    studentId: selectedStudentId, 
                    courseId // Asegúrate de incluir este campo
                });
                console.log('Grado agregado.');
                askForNextAction(); // Regresamos al menú principal
            });
        });
    });
}


// Función para ver todos los grados
function viewGrades() {
    console.log('Todos los grados:', gradeManager.getGrades());
    askForNextAction();
}

// Función para enviar los datos al servidor
function sendDataToServer() {
    console.log("Datos enviados al servidor:", gradeManager.getGrades());
    askForNextAction();
}

// Menú de opciones
function askForNextAction() {
    console.log('\nOpciones:');
    console.log('1: Agregar Estudiante');
    console.log('2: Seleccionar Estudiante');
    console.log('3: Ver Estudiantes');
    console.log('4: Ver Notas del Estudiante Seleccionado');
    console.log('5: Agregar Grado');
    console.log('6: Ver Grados');
    console.log('7: Enviar Datos al Servidor');
    console.log('8: Salir');

    rl.question('Seleccione una opción: ', (option) => {
        switch (option) {
            case '1':
                addStudent();
                break;
            case '2':
                selectStudent();
                break;
            case '3':
                viewStudents();
                askForNextAction();
                break;
            case '4':
                viewSelectedStudentGrades();
                break;
            case '5':
                addGrade();
                break;
            case '6':
                viewGrades();
                break;
            case '7':
                sendDataToServer();
                break;
            case '8':
                console.log('Saliendo...');
                rl.close();
                break;
            default:
                console.log('Opción no válida, intente de nuevo.');
                askForNextAction();
                break;
        }
    });
}

// Iniciar el programa preguntando al usuario
askForNextAction();
