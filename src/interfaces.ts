// src/interfaces.ts

export  Student {
    id: number; // Asegúrate de que 'id' esté definido
    name: string;
    // Otras propiedades relevantes para el estudiante
}

export  Course {
    id: number; // Asegúrate de que 'id' esté definido
    title: string;
    // Otras propiedades relevantes para el curso
}

// src/interfaces.ts
export  Grade {
    id: number;
    subject: string;
    score: number;
    studentId: number;
    courseId: number; // Asegúrate de que esta propiedad esté aquí
}

