const videoteca = []
const lxl = []
const recopilaciondatos = []
const especial = []

function obtenerRutasCarpeta(){
    const carpeta = document.getElementById('carpeta');
    
    for (const archivo of carpeta.files) {
        
        let patharchivos = archivo.webkitRelativePath
        arraypath = patharchivos.split("/")
        if(arraypath.length > 2){
            pathutil = arraypath[0] + "/" + arraypath[1] + "/" + arraypath[2]
            recopilaciondatos.push(pathutil)
        }
    }
    
    eliminarrepetidos()
    
    let textarea = document.getElementById("w3review");
    for(index in recopilaciondatos){
        textarea.value += recopilaciondatos[index] + "\n"
    }

    let elementosparaprocesar = document.getElementById("w3review")
    procesador(elementosparaprocesar.value)

    function eliminarrepetidos(){
        for(index in recopilaciondatos){
            let indice = parseInt(index)
            if(recopilaciondatos[indice] === recopilaciondatos[indice + 1]){
                recopilaciondatos.splice(indice + 1 , 1)
                eliminarrepetidos()
            }
        }
    }

}



function procesador(a){
    
    class Coleccion{
        constructor(nombre, type, definition, idioma, disco, id, instanciaType, numerodeitem){
            this.nombre = nombre
            this.type = type
            this.definition = definition
            this.idioma = idioma
            this.disco = disco
            this.id = id
            this.instanciaType = instanciaType
            this.numerodeitem = numerodeitem
        }
    }




    arreglorenglones = a.split("\n")

    for(let linea of arreglorenglones){
        let lineadividida = linea.split("/")
        if(lineadividida.length > 2){
            lxl.push(lineadividida[0] + "/" + lineadividida[1] + "/" + lineadividida[2])
        }
    }




    for(let index in lxl){

        nombre = ""


        if(lxl[index].includes(" - ")){
            lineadivididaotravez = lxl[index].split("/")
            nombre = lineadivididaotravez[2]

        }

  
        type = ""
        definition = ""
        idioma = ""
        disco = ""
        var date = new Date()
        var dateN = + date
        var id = `${dateN}${Math.random()}`
 
        if(lxl[index].includes("Peliculas HD/OK - ")){
            type = 1
            definition = "HD"
            idioma = "Incluye Cast N"
        }

        if(lxl[index].includes("SERIE OK SD - ")){
            type = 2
            definition = "SD"
            idioma = "Incluye Cast N"
        }

        if(lxl[index].includes("SERIE OK - ")){
            type = 2
            definition = "HD"
            idioma = "Incluye Cast N"
        }

        if(lxl[index].includes("Peliculas NO HD/OK SD - ")){
            type = 1
            definition = "SD"
            idioma = "Incluye Cast N"
        }

        if(lxl[index].includes("Peliculas NO HD/OK SD - ")){
            type = 1
            definition = "SD"
            idioma = "Incluye Cast N"
        }

        if(lxl[index].includes("Peliculas HD/VO - ")){
            type = 1
            definition = "HD"
            idioma = "Audio Idioma Original"
        }

        if(lxl[index].includes("Peliculas HD/VD - ")){
            type = 1
            definition = "HD"
            idioma = "Doblaje Español"
        }

        if(lxl[index].includes("Peliculas HD/Documental - ")){
            type = 3
            definition = "HD"
            idioma = "Hay que ver"
        }

        if(lxl[index].includes("SERIE VO SD - ")){
            type = 2
            definition = "SD"
            idioma = "Audio Idioma Original"
        }

        if(lxl[index].includes("SERIE VO - ")){
            type = 2
            definition = "HD"
            idioma = "Audio Idioma Original"
        }

        if(lxl[index].includes("SERIE VD SD - ")){
            type = 2
            definition = "SD"
            idioma = "Doblaje Español"
        }

        if(lxl[index].includes("SERIE VD - ")){
            type = 2
            definition = "HD"
            idioma = "Doblaje Español"
        }

        if(lxl[index].includes("Peliculas SD/OK SD - ")){
            type = 1
            definition = "SD"
            idioma = "Incluye Cast N"
        }

        if(lxl[index].includes("Peliculas UHD")){
            type = 1
            definition = "UHD"
        }

        if(lxl[index].includes("UVO - ")){
            idioma = "Audio Idioma Original"
            type = 1
        }

        if(lxl[index].includes("Documentales/Documental - ")){
            type = 3
            definition = "Hay que ver"
            idioma = "Hay que ver"
        }

        if(lxl[index].includes("Otros/Documental - ")){
            type = 3
            definition = "Hay que ver"
            idioma = "Hay que ver"
        }

        if(lxl[index].includes("Peliculas NO HD/VO SD - ")){
            type = 1
            definition = "SD"
            idioma = "Audio Idioma Original"
        }

        if(lxl[index].includes("Otros/Extras - ")||lxl[index].includes("Otros/EXTRAS - ")){
            type = 4
            definition = "Hay que ver"
            idioma = "Hay que ver"
        }

        if(lxl[index].includes("Otros/MUSICA - ")){
            type = 6
            definition = "Hay que ver"
            idioma = "Hay que ver"
        }

        if(lxl[index].includes("Otros/OST - ")){
            type = 6
            definition = "192Kb/s"
            idioma = "-"
        }

          if(lxl[index].includes("Eventos/EVENTO - ")){
            type = 8
            definition = "HD"
            idioma = "Multiples Relatos"
        }

        if(lxl[index].includes("EVENTO UHD - ")){
            type = 8
            definition = "UHD"
            idioma = "Hay que ver"
        }

        if(lxl[index].includes("Otros/TRAILER - ")){
            type = 7
            definition = "Hay que ver"
            idioma = "Audio Idioma Original"
        }

        if(lxl[index].includes("Peliculas NO HD/VD SD - ")){
            type = 1
            definition = "SD"
            idioma = "Doblaje Español"
        }

        if(lxl[index].includes("Peliculas SD/X - ")){
            type = 5
            definition = "Hay que ver"
            idioma = "Audio Idioma Original"
        }

        if(lxl[index].includes("HDEX1")){
            disco = "HDEX1"
        }

        if(lxl[index].includes("HDEX2")){
            disco = "HDEX2"
        }

        if(lxl[index].includes("HDEX3")){
            disco = "HDEX3"
        }

        if(lxl[index].includes("HDEX4")){
            disco = "HDEX4"
        }

        if(lxl[index].includes("HDEX5")){
            disco = "HDEX5"
        }

        if(lxl[index].includes("HDEX6")){
            disco = "HDEX6"
        }

        if(lxl[index].includes("HDEX7")){
            disco = "HDEX7"
        }

        if(type == 1){
            instanciaType = "Pelicula"
        }

        if(type == 2){
            instanciaType = "Serie"
        }

        if(type == 3){
            instanciaType = "Documental"
        }

        if(type == 4){
            instanciaType = "Extras"
        }

        if(type == 5){
            instanciaType = "Pelicula X"
        }

        if(type == 6){
            instanciaType = "Musica"
        }

        if(type == 7){
            instanciaType = "Trailer"
        }

        if(type == 8){
            instanciaType = "Evento"
        }



        videoteca.push(new Coleccion(nombre, type, definition, idioma, disco, id, instanciaType, index))


    }

    for(let pelis of videoteca){
        especial.push(`${pelis.type} ${pelis.nombre}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ${pelis.disco} ${pelis.id}`)
    }

    ordenar(especial)

}

var mostrar = document.getElementById("ordenar0");
mostrar.addEventListener("click", () => {
    print(videoteca)
})

var mostrarnombres = document.getElementById("solonombres");
mostrarnombres.addEventListener("click", () => {

    const especial = []
    for(let pelis of videoteca){
        especial.push(`${pelis.type} ${pelis.nombre}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ${pelis.disco} ${pelis.id}`)
    }

    ordenar(especial)

    function ordenar(a){
        b = a.sort()
        implementar(b)
    }
    
    function implementar(a){
        const temporal = []
        for(let pelis of a){
            for(let coleccion of videoteca){
                if(pelis.includes(coleccion.id)){
                    temporal.push(coleccion)
                }
            }
        }
        print(temporal)
    }

    function print(a){
        for(let index in a){
            a[index].numerodeitem = parseInt(index) + 1
        }
        let fragmentoResult = ``
        a.forEach(item => {
            fragmentoResult += `

            <text class="nombresD">${item.nombre}\t</text>

            <br>
            `
        })
        nombresD = document.getElementById("nombresD")
        nombresD.innerHTML = ``;
        nombresD.innerHTML = fragmentoResult
    }

})

var solotipo = document.getElementById("solotipo");
solotipo.addEventListener("click", () => {
    const especial = []
    for(let pelis of videoteca){
        especial.push(`${pelis.type} ${pelis.nombre}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ${pelis.disco} ${pelis.id}`)
    }

    ordenar(especial)

    function ordenar(a){
        b = a.sort()
        implementar(b)
    }
    
    function implementar(a){
        const temporal = []
        for(let pelis of a){
            for(let coleccion of videoteca){
                if(pelis.includes(coleccion.id)){
                    temporal.push(coleccion)
                }
            }
        }
        print(temporal)
    }

    function print(a){
        for(let index in a){
            a[index].numerodeitem = parseInt(index) + 1
        }
        let fragmentoResult = ``
        a.forEach(item => {
            fragmentoResult += `

            <text class="typesD">${item.instanciaType}\t</text>

            <br>
            `
        })
        nombresD = document.getElementById("nombresD")
        nombresD.innerHTML = ``;
        nombresD.innerHTML = fragmentoResult
    }
})

var solodefinicion = document.getElementById("solodefinicion");
solodefinicion.addEventListener("click", () => {
    const especial = []
    for(let pelis of videoteca){
        especial.push(`${pelis.type} ${pelis.nombre}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ${pelis.disco} ${pelis.id}`)
    }

    ordenar(especial)

    function ordenar(a){
        b = a.sort()
        implementar(b)
    }
    
    function implementar(a){
        const temporal = []
        for(let pelis of a){
            for(let coleccion of videoteca){
                if(pelis.includes(coleccion.id)){
                    temporal.push(coleccion)
                }
            }
        }
        print(temporal)
    }

    function print(a){
        for(let index in a){
            a[index].numerodeitem = parseInt(index) + 1
        }
        let fragmentoResult = ``
        a.forEach(item => {
            fragmentoResult += `

            <text class="definitionD">${item.definition}\t</text>

            <br>
            `
        })
        nombresD = document.getElementById("nombresD")
        nombresD.innerHTML = ``;
        nombresD.innerHTML = fragmentoResult
    }
})

var soloidioma = document.getElementById("soloidioma");
soloidioma.addEventListener("click", () => {
    const especial = []
    for(let pelis of videoteca){
        especial.push(`${pelis.type} ${pelis.nombre}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ${pelis.disco} ${pelis.id}`)
    }

    ordenar(especial)

    function ordenar(a){
        b = a.sort()
        implementar(b)
    }
    
    function implementar(a){
        const temporal = []
        for(let pelis of a){
            for(let coleccion of videoteca){
                if(pelis.includes(coleccion.id)){
                    temporal.push(coleccion)
                }
            }
        }
        print(temporal)
    }

    function print(a){
        for(let index in a){
            a[index].numerodeitem = parseInt(index) + 1
        }
        let fragmentoResult = ``
        a.forEach(item => {
            fragmentoResult += `

            <text class="idiomaD">${item.idioma}\t</text>

            <br>
            `
        })
        nombresD = document.getElementById("nombresD")
        nombresD.innerHTML = ``;
        nombresD.innerHTML = fragmentoResult
    }
})

var solodisco = document.getElementById("solodisco");
solodisco.addEventListener("click", () => {
    const especial = []
    for(let pelis of videoteca){
        especial.push(`${pelis.type} ${pelis.nombre}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ${pelis.disco} ${pelis.id}`)
    }

    ordenar(especial)

    function ordenar(a){
        b = a.sort()
        implementar(b)
    }
    
    function implementar(a){
        const temporal = []
        for(let pelis of a){
            for(let coleccion of videoteca){
                if(pelis.includes(coleccion.id)){
                    temporal.push(coleccion)
                }
            }
        }
        print(temporal)
    }

    function print(a){
        for(let index in a){
            a[index].numerodeitem = parseInt(index) + 1
        }
        let fragmentoResult = ``
        a.forEach(item => {
            fragmentoResult += `

            <text class="discoD">${item.disco}\t</text>

            <br>
            `
        })
        nombresD = document.getElementById("nombresD")
        nombresD.innerHTML = ``;
        nombresD.innerHTML = fragmentoResult
    }
})

function print(a){
    for(let index in a){
        a[index].numerodeitem = parseInt(index) + 1
    }
    let fragmentoResult = ``
    let fragmentoResultcopy = ``
    a.forEach(item => {
        fragmentoResult += `
        <text class="ndelinea">${item.numerodeitem}\t</text>
        <text class="nombresD">${item.nombre}\t</text>
        <text class="typesD">${item.instanciaType}\t</text>
        <text class="definitionD">${item.definition}\t</text>
        <text class="idiomaD">${item.idioma}\t</text>
        <text class="discoD">${item.disco}\t</text>
        <br>
        `
        fragmentoResultcopy += item.instanciaType + "\t" + item.nombre + "\t" + item.definition + "\t" + item.idioma + "\t" + item.disco + "\n" 
        navigator.clipboard.writeText(fragmentoResultcopy);

    })

    nombresD = document.getElementById("nombresD")
    nombresD.innerHTML = ``;
    nombresD.innerHTML = fragmentoResult
}

var ordenarNombre = document.getElementById("ordenarNombre");
ordenarNombre.addEventListener("click", () => {
    const nombresyid = []
    for(let pelis of videoteca){
        nombresyid.push(`${pelis.nombre}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa${pelis.id}`)
    }

    ordenar(nombresyid)

})

var ordenarEspecial = document.getElementById("ordenarEspecial");
ordenarEspecial.addEventListener("click", () => {

    for(let pelis of videoteca){
        especial.push(`${pelis.type} ${pelis.nombre}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ${pelis.disco} ${pelis.id}`)
    }

    ordenar(especial)

})

function ordenar(a){
    b = a.sort()
    implementar(b)
}

function implementar(a){
    const temporal = []
    for(let pelis of a){
        for(let coleccion of videoteca){
            if(pelis.includes(coleccion.id)){
                temporal.push(coleccion)
            }
        }
    }
    print(temporal)
}