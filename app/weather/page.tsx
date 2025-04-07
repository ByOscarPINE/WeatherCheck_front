"use client";

import { useEffect, useState } from "react";
import { title } from "@/components/primitives";
import { getInfo } from "@/config/api";
import {Card, CardBody, Code} from "@heroui/react";


export default function BlogPage() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);


  const fetchData = async () => {
    try {
      const res = await getInfo();
      setData(res); 
      setError(null); 
    } catch (err) {
      setError("Error al obtener los datos");
      console.error(err);
    }
  };


  useEffect(() => {
    fetchData(); 

    const interval = setInterval(() => {
      fetchData(); 
    }, 5000); 

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <h1>Weather</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data ? (
        <div className="grid grid-flow-col grid-rows-6 gap-4">
            {/* <div className="row-span-3 ..."> */}
            <Card className="col-span-2 row-span-3 ..." >
              <CardBody> 
                <p>Humedad: <Code color="primary">{data.humedad}%</Code></p>
              </CardBody>
            </Card>
            {/* </div> */}
            {/* <div className="row-span-1 ..."> */}
            <Card className="col-span-2 row-span-1 ...">
              <CardBody>
                <p>Presión: <Code color="secondary">{data.presion} hPa</Code></p>
              </CardBody>
            </Card>
            {/* </div> */}
            {/* <div className="row-span-2 ..."> */}
            <Card className="col-span-4 row-span-2 ...">
              <CardBody>
                <p>Altitud: <Code color="default">{data.altitud} m</Code></p>
              </CardBody>
            </Card>
            {/* </div> */}
            {/* <div className="col-span-2 row-span-2 ..."> */}
            <Card className="col-span-2 row-span-2 ...">
              <CardBody>
                <p>Temperatura: <Code color="warning">{data.temperatura} °C</Code></p>
              </CardBody>
            </Card>
            {/* </div> */}
            {/* <div className="col-span-2 row-span-3 ..."> */}
            <Card className="col-span-2 row-span-2 ...">
              <CardBody>
                <p>Luz: <Code color="success">{data.luz} %</Code></p>
              </CardBody>
            </Card>
            {/* </div> */}
            {/* <div className="col-span-2 row-span-1 ..."> */}
            {/* <Card className="col-span-2 row-span-1 ...">
              <CardBody>
                <p>Temperatura: {data.temperatura} °C</p>
              </CardBody>
            </Card> */}
            {/* </div> */}
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}