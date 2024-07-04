"use server";

const getMessages = async (message) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/translate/`,
      {
        method: "POST", // Asumiendo que el servidor espera un POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sentence: message }), // Envía el mensaje en el cuerpo de la solicitud
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`); // Manejo de respuestas de error
    }

    const data = await response.json(); // Asumiendo que el servidor devuelve JSON
    return data; // Retorna los datos procesados
  } catch (error) {
    console.error("Error fetching translation:", error);
    throw error; // Propaga el error para manejo adicional si es necesario
  }
};

export { getMessages }; // Exporta la función para ser utilizada en otros archivos
