type method = "POST" | "GET" | "PUT" | "PATCH" | "DELETE";

async function fetchData(data: { url: string; method?: method; body: object }) {  //CON LA ASIGNACION LE DEFINO EL VALOR POR DEFECTO QUE TOMARÁ EL PARAMETRO CUANDO NO ME ENVIEN NADA AL INVOCAR LA FUNCION
  const response = await fetch(`http:localhost:8080/${data.url}`, {
    method: data.method, //SE PUEDE SIMPLIFICAR DEJANDO SOLO METHOD Y COMO VALOR SE COLOCARÁ LA VARIABLE CON ESE MISMO NOMBRE
    body: JSON.stringify(data.body),
  });

  console.log(response.status);

  return await response.json();
}

async function main() {
  const data = await fetchData({
    url: "students",
    body: { name: "Sofia", age: 22 },
    method: "POST",
  });
  console.log(data);
}

main();
