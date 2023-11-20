import { columns } from "@/components/datatable/columns";
import { DataTable } from "@/components/datatable/data-table";


const Tickets = () => {
  let tasks = [
    {
      "id": "Tarea-8782",
      "title": "No se puede comprimir el programa sin cuantificar el píxel SSD de código abierto.",
      "status": "En progreso",
      "label": "Documentación",
      "priority": "Media"
    },
    {
      "id": "Tarea-7878",
      "title": "Intenta calcular la alimentación EXE, ¡quizás indexe el píxel multibyte!",
      "status": "Pendiente",
      "label": "Documentación",
      "priority": "Media"
    },
    {
      "id": "Tarea-7839",
      "title": "¡Necesitamos evitar la tarjeta neural TCP!",
      "status": "Cancelada",
      "label": "Error",
      "priority": "Alta"
    },
    {
      "id": "Tarea-5562",
      "title": "La interfaz SAS no funciona, ¡pasa por alto el píxel de código abierto para que podamos respaldar el ancho de banda PNG!",
      "status": "Pendiente",
      "label": "Característica",
      "priority": "Media"
    },
    {
      "id": "Tarea-5562",
      "title": "La interfaz SAS no funciona, ¡pasa por alto el píxel de código abierto para que podamos respaldar el ancho de banda PNG!",
      "status": "Pendiente",
      "label": "Característica",
      "priority": "Media"
    },
    {
      "id": "Tarea-5562",
      "title": "La interfaz SAS no funciona, ¡pasa por alto el píxel de código abierto para que podamos respaldar el ancho de banda PNG!",
      "status": "Pendiente",
      "label": "Característica",
      "priority": "Media"
    },
    {
      "id": "Tarea-5562",
      "title": "La interfaz SAS no funciona, ¡pasa por alto el píxel de código abierto para que podamos respaldar el ancho de banda PNG!",
      "status": "Pendiente",
      "label": "Característica",
      "priority": "Media"
    },
    {
      "id": "Tarea-5562",
      "title": "La interfaz SAS no funciona, ¡pasa por alto el píxel de código abierto para que podamos respaldar el ancho de banda PNG!",
      "status": "Pendiente",
      "label": "Característica",
      "priority": "Media"
    },
    {
      "id": "Tarea-5562",
      "title": "La interfaz SAS no funciona, ¡pasa por alto el píxel de código abierto para que podamos respaldar el ancho de banda PNG!",
      "status": "Pendiente",
      "label": "Característica",
      "priority": "Media"
    },
    {
      "id": "Tarea-5562",
      "title": "La interfaz SAS no funciona, ¡pasa por alto el píxel de código abierto para que podamos respaldar el ancho de banda PNG!",
      "status": "Pendiente",
      "label": "Característica",
      "priority": "Media"
    },
    {
      "id": "Tarea-5562",
      "title": "La interfaz SAS no funciona, ¡pasa por alto el píxel de código abierto para que podamos respaldar el ancho de banda PNG!",
      "status": "Pendiente",
      "label": "Característica",
      "priority": "Media"
    }
  ]
  return (
    <>
      <section className="hidden flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Bienvenido!</h2>
            <p className="text-muted-foreground">
              Aqui la lista de tus tareas de este mes
            </p>
          </div>

        </div>
        <DataTable data={tasks} columns={columns} />
      </section>

    </>
  )
  }

// Simulate a database read for tasks.

export default Tickets;




