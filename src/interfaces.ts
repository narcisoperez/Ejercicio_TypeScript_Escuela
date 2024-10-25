// src/interfaces.ts

export interface Student {
    id: number; // Asegúrate de que 'id' esté definido
    name: string;
    // Otras propiedades relevantes para el estudiante
}

export interface Course {
    id: number; // Asegúrate de que 'id' esté definido
    title: string;
    // Otras propiedades relevantes para el curso
}

export interface Grade {
    id: number; // Asegúrate de que 'id' esté definido
    subject: string;
    score: number;
}
