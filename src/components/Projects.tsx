import React from "react";
import ProjectCard from "./sub/ProjectCard";

import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
      Mis Proyectos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      <ProjectCard
  src="/Grafos.png"
  title="Sitio web de grafos en Nextjs con Subpabase y autenticación OAuth"
  description={`Esta vez, se hizo una aplicación para gráficos web que tenía autenticación con Google y permitía al usuario crear sus propios gráficos. Y se utilizó la API de excalidraw para los gráficos. Ver código en: https://github.com/Lizardo10/proyecto_grafos`}
/>
<ProjectCard
  src="/Hospital.png"
  title="Desarrollo web para realizar consultas a un hospital con React"
  description="El problema principal era que un cliente no podía hacer una consulta remota, por lo que se creó esta web con React, websockets, framer motion y Firebase. Ver código en: https://github.com/Lizardo10/hospital"
/>
      </div>
    </div>
  );
};

export default Projects;
