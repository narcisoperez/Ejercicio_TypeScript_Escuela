// src/index.ts
import { GradeManagement } from './gradeManagement.js'; // Añadiendo la extensión .js
import * as readline from 'readline';
const gradeManager = new GradeManagement();
// Configuración de readline para entrada de datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Función para agregar un nuevo grado
function addGrade() {
    rl.question('Ingrese la materia: ', (subject) => {
        rl.question('Ingrese la puntuación: ', (score) => {
            const newGrade = gradeManager.create(subject, parseInt(score));
            console.log('Grado creado:', newGrade);
            askForNextAction(); // Volver a preguntar al usuario
        });
    });
}
// Función para ver todos los grados
function viewGrades() {
    console.log('Todos los grados:', gradeManager.read());
    askForNextAction(); // Volver a preguntar al usuario
}
// Función para actualizar un grado existente
function updateGrade() {
    rl.question('Ingrese el ID del grado a actualizar: ', (id) => {
        rl.question('Ingrese la nueva materia: ', (subject) => {
            rl.question('Ingrese la nueva puntuación: ', (score) => {
                const updatedGrade = gradeManager.update(parseInt(id), subject, parseInt(score));
                if (updatedGrade) {
                    console.log('Grado actualizado:', updatedGrade);
                }
                else {
                    console.log('Grado no encontrado.');
                }
                askForNextAction(); // Volver a preguntar al usuario
            });
        });
    });
}
// Función para eliminar un grado
function deleteGrade() {
    rl.question('Ingrese el ID del grado a eliminar: ', (id) => {
        const deletedGrade = gradeManager.delete(parseInt(id));
        if (deletedGrade) {
            console.log('Grado eliminado:', deletedGrade);
        }
        else {
            console.log('Grado no encontrado.');
        }
        askForNextAction(); // Volver a preguntar al usuario
    });
}
// Función para preguntar al usuario qué acción realizar
function askForNextAction() {
    console.log('\nOpciones:');
    console.log('1: Agregar Grado');
    console.log('2: Ver Grados');
    console.log('3: Actualizar Grado');
    console.log('4: Eliminar Grado');
    console.log('5: Salir');
    rl.question('Seleccione una opción: ', (option) => {
        switch (option) {
            case '1':
                addGrade();
                break;
            case '2':
                viewGrades();
                break;
            case '3':
                updateGrade();
                break;
            case '4':
                deleteGrade();
                break;
            case '5':
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
