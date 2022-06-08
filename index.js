/* Crea tu proyecto, BD y colección tasks en Firestore dentro de Firebase
Cambia los datos de acceso usando los de tu aplicación
Añade la actualización de datos a la aplicación y mejora en la medida de lo posible la UI. */
    

    //Me traigo mi db firestore
    import { getTasks, insertTask, deleteTask, updateTask } from "./utils.js";
    //console.log(db);
    //Extraigo todos los documentos de tasks y creo tarjetas con ellos
    getTasks();


    //Obtenemos el form y capturamos el submit
    const form = document.getElementById("task-form");
    form.addEventListener("submit", e => {
        e.preventDefault();
        const task = {
            title: form["task-title"].value,
            description: form["task-description"].value
        }

        insertTask(task);
    })


    const buttonsCardD = document.getElementsByName("delete");
    buttonsCardD.forEach(element => {
        element.addEventListener("click",  () => {
            var divDelete = element.parentNode.parentNode;
            document.body.removeChild(divDelete);
            //console.log("Estoy borrando la tarea: "+element.id);
            deleteTask(element.id);
        })
    });

    const buttonsCardDUpload = document.getElementsByName("upload");

    buttonsCardDUpload.forEach(element => {
        element.addEventListener("click", e => {
            e.preventDefault();

            var ocultar = document.getElementById("entrada")
            ocultar.style.display = 'none'

            var mostrar = document.getElementById("actualizar")
            mostrar.style.display = 'inline'
            document.getElementById('btnUpload').name = element.id
        })
        
    });


    const comprobar = document.getElementById('upload-form')

    comprobar.addEventListener("submit", e => {
        e.preventDefault();
        //alert(document.getElementById('btn').name
        const task = {
            title: comprobar["update-title"].value,
            description: comprobar["update-description"].value
            }

            
            updateTask(document.getElementById('btnUpload').name,task)
    })