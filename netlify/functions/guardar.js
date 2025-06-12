exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);
  console.log("Datos recibidos:", data); // Aparecerá en los logs de Netlify

  return {
    statusCode: 200,
    body: JSON.stringify({ mensaje: "Datos recibidos correctamente" }),
  };
};