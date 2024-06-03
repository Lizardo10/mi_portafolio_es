"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Foto from '@/assets/Perfil.png'
import Link from "next/link";
export default function Page() {
    return (
        <div className="p-20 w-full h-full">
        <h1 className="text-5xl font-bold">Acerca de</h1>
        <div className="mt-8 flex">
          <div className="flex-none w-48 h-48">
            <Image
              alt="Foto de perfil"
              className="rounded-full border border-gray-200 shadow-sm"
              height="192"
              src={Foto}
              style={{
                aspectRatio: "192/192",
                objectFit: "cover",
              }}
              width="192"
            />
          </div>
          <div className="ml-8 flex-grow">
            <h2 className="text-3xl font-bold">Lizardo Perez</h2>
            <p className="text-xl text-gray-500"> Desarrollador Web Full Stack</p>
            <div className="mt-4 flex space-x-4">
              <Link className="text-blue-500 hover:underline" href="#">
              lizardoperezjimenez@gmail.com
              </Link>
              <Link className="text-blue-500 hover:underline" href="#">
              https://github.com/Lizardo10
              </Link>
            </div>
            
            <p className="mt-4 text-lg font-semibold">Esto es lo que estoy haciendo ahora</p>
            <p className="mt-2 text-lg">
         
              Día a día, estudio nuevos marcos y lenguajes de programación para aplicarlos en mi vida diaria en la programación web, y con eso, establezco nuevos objetivos para lograr.
                        </p>
                        <section aria-labelledby="study-section">
                            <hr />
            <h1 className="text-6xl font-bold mb-12" id="study-section">
                Estudio
            </h1>
            <div>
                <h2 className="text-3xl font-semibold mb-2">
                    Universidad, Universidad Mariano Gálvez(UMG), Ingeniería en Sistemas,(3 año)( Estudio solo los sábados)
                </h2>
                <p className="text-gray-600 mb-4">Actualmente</p>
            </div>
            <div>
                <h2 className="text-3xl font-semibold mb-2">
                    [2022]
                </h2>
                <p className="text-gray-600 mb-4">Universidad, Universidad Mariano Gálvez(UMG), Ingeniería en Sistemas,(1 año)( Estudio solo los sábados)</p>
            </div>
            <div>
                <h2 className="text-3xl font-semibold mb-2">
                    [2021]
                </h2>
                <p className="text-gray-600 mb-4">Diversificado, Instituto Nacional de Educación Diversificada</p>
            </div>
            <div>
                <h2 className="text-3xl font-semibold mb-2">
                    [2019]
                </h2>
                <p className="text-gray-600 mb-4">Secundaria, Instituto Nacional de Educación Básica de Concepción Las Minas</p>
            </div>
            <div>
                <h2 className="text-3xl font-semibold mb-2">
                    [2016]
                </h2>
                <p className="text-gray-600 mb-4">Escuela Primaria, Escuela Oficial Urbana Mixta Fernanda Velásquez Torres</p>
            </div>
        </section>     
          </div>
       
          <section aria-labelledby="experience-section">
        <h1 className="text-6xl font-bold mb-12" id="experience-section">
          Experiencia
        </h1>
        <div>
          <h2 className="text-3xl font-semibold mb-2">
          Desarrollador Full Stack (Remoto)  @ <span className="text-blue-600">Alpha Roofing Products</span>
          </h2>
          <p className="text-gray-600 mb-4">Enero 2024 - Abril 2024</p>
          <ul className="list-disc pl-5 mb-8">
          <p className="mt-2 text-lg">
                        - Crear y gestionar APIs con Nestjs
                        <br />
                        - Diseño de plantillas
                        <br />
                        - Crear autenticación de JWT y nodo y autorización para tokens de acceso
                        <br />
                        - Implementación de nuevas funcionalidades
                        <br />
                        - Documentación de código.
                        <br />
                        - Integración de consultas y mutaciones de GraphQL
                        <br />
                        - Uso de bibliotecas de cliente GraphQL como Apollo Client
                        <br />
                        - Obtención de datos de puntos finales de API de GraphQL
                        <br />
                        - Manejo de errores y estados de carga de GraphQL
                        <br />
                        - Actualización y almacenamiento en caché de datos con suscripciones de GraphQL
                        <br />
                        - Diseño de nuevas páginas con tailwindcss
                        <br />
                        - Crear paneles para la empresa
                        <br />
                        - Uso de Nexjs para el CEO de la página con SSR
                        <br />
                        -Uso de la base de datos MongoDB
                        <br />
                        - Llamadas a la API
                    </p>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-2">
          Desarrollador Full Stack  @ <span className="text-blue-600">Solupos</span>
          </h2>
          <p className="text-gray-600 mb-4">Enero 2022 - Mayo 2022</p>
          <ul className="list-disc pl-5 mb-8">
          <p className="mt-2 text-lg">
                        - Gestión de APIs con PHP
                        <br />
                        - Diseño de plantillas
                        <br />
                        - Mantenimiento de software con HTML y PHP
                        <br />
                        - Implementación de nuevas funcionalidades
                        <br />
                        - Documentación de código.
                        <br />
                        - Integración de nuevos campos para la facturación de un Sistema.
                        <br />
                        - Diseño de nuevas páginas con bootstrap
                        <br />
                        - Llamadas a la API
                    </p>
          </ul>
        </div>
      </section>
        </div>
      </div>
    );
}