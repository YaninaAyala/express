import { json } from "express";

type method = "POST" | "GET" | "PUT" | "PATCH" | "DELETE";

async function fetchData(params: {url: string; method?: method; body?: object;
}) {
  //CON LA ASIGNACION LE DEFINO EL VALOR POR DEFECTO QUE TOMARÁ EL PARAMETRO CUANDO NO ME ENVIEN NADA AL INVOCAR LA FUNCION

  const response = await fetch(`http://localhost:8080/${params.url}`, {
    method: params.method, //SE PUEDE SIMPLIFICAR DEJANDO SOLO METHOD Y COMO VALOR SE COLOCARÁ LA VARIABLE CON ESE MISMO NOMBRE
    body: JSON.stringify(params.body),
    headers: { "content-type": "application/json" },
  });

  console.log(response.status);

  const data = await response.json();
  console.log(data);

  return data;
}

async function main() {
  const data = await fetchData({
    url: "api",
    //body: { id: 1},
    method: "GET",
  });
}

main();
