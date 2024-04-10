const videoteca = []
const lxl = []
const recopilaciondatos = []
const especial = []
const temporal = []
const fragmentoshdex1 = []
const fragmentoshdex2 = []
const fragmentoshdex3 = []
const fragmentoshdex4 = []
const fragmentoshdex5 = []
const fragmentoshdex6 = []
const fragmentoshdex7 = []
const fragmentoshdex8 = []
const hdex1raiz = []
const hdex2raiz = []
const hdex3raiz = []
const hdex4raiz = []
const hdex5raiz = []
const hdex6raiz = []
const hdex7raiz = []
const contadorHDEX1 = []
const contadorHDEX2 = []
const contadorHDEX3 = []
const contadorHDEX4 = []
const contadorHDEX5 = []
const contadorHDEX6 = []
const contadorHDEX7 = []
const contadorHDEX8 = []

let datosentregadosdom = document.getElementById("datosentregados")
datosentregadosdom.value = "0"

let resetcaja = document.getElementById("cargadatos2")
resetcaja.innerHTML = `<textarea id="w3review" rows="20" cols="69" class="w3review"></textarea>`
let divisioncargadatos = document.getElementById("cargadatos")
divisioncargadatos.innerHTML = `<text class="cota1">HDEX1</text><input type="file" id="carpeta1" webkitdirectory directory multiple class="entradas"><br>
<text class="cota1">HDEX1 internos</text><input type="file" id="carpeta1b" webkitdirectory directory multiple onchange="recopilar1b()" class="entradas">
<input type="button" id="borrar1" class="borrar" value="limpiar HDEX1"><text class="info" id="contador1"></text><input type="button" value=">>>" id="incorporar1" class="incorporar">
<text class="tituloparcial">Entradas HDEX1</text><input type="text" id="totalhdex1" class="cifrasparciales" value=""><br>
<text class="cota1">HDEX2</text><input type="file" id="carpeta2" webkitdirectory directory multiple class="entradas"><br>
<text class="cota1">HDEX2 internos</text><input type="file" id="carpeta2b" webkitdirectory directory multiple onchange="recopilar2b()" class="entradas">
<input type="button" id="borrar2" class="borrar" value="limpiar HDEX2"><text class="info" id="contador2"></text><input type="button" value=">>>" id="incorporar2" class="incorporar">
<text class="tituloparcial">Entradas HDEX2</text><input type="text" id="totalhdex2" class="cifrasparciales" value=""><br>
<text class="cota1">HDEX3</text><input type="file" id="carpeta3" webkitdirectory directory multiple class="entradas"><br>
<text class="cota1">HDEX3 internos</text><input type="file" id="carpeta3b" webkitdirectory directory multiple onchange="recopilar3b()" class="entradas">
<input type="button" id="borrar3" class="borrar" value="limpiar HDEX3"><text class="info" id="contador3"></text><input type="button" value=">>>" id="incorporar3" class="incorporar">
<text class="tituloparcial">Entradas HDEX3</text><input type="text" id="totalhdex3" class="cifrasparciales" value=""><br>
<text class="cota1">HDEX4</text><input type="file" id="carpeta4" webkitdirectory directory multiple class="entradas"><br>
<text class="cota1">HDEX4 internos</text><input type="file" id="carpeta4b" webkitdirectory directory multiple onchange="recopilar4b()" class="entradas">
<input type="button" id="borrar4" class="borrar" value="limpiar HDEX4"><text class="info" id="contador4"></text><input type="button" value=">>>" id="incorporar4" class="incorporar">
<text class="tituloparcial">Entradas HDEX4</text><input type="text" id="totalhdex4" class="cifrasparciales" value=""><br>
<text class="cota1">HDEX5</text><input type="file" id="carpeta5" webkitdirectory directory multiple class="entradas"><br>
<text class="cota1">HDEX5 internos</text><input type="file" id="carpeta5b" webkitdirectory directory multiple onchange="recopilar5b()" class="entradas">
<input type="button" id="borrar5" class="borrar" value="limpiar HDEX5"><text class="info" id="contador5"></text><input type="button" value=">>>" id="incorporar5" class="incorporar">
<text class="tituloparcial">Entradas HDEX5</text><input type="text" id="totalhdex5" class="cifrasparciales" value=""><br>
<text class="cota1">HDEX6</text><input type="file" id="carpeta6" webkitdirectory directory multiple class="entradas"><br>
<text class="cota1">HDEX6 internos</text><input type="file" id="carpeta6b" webkitdirectory directory multiple onchange="recopilar6b()" class="entradas">
<input type="button" id="borrar6" class="borrar" value="limpiar HDEX6"><text class="info" id="contador6"></text><input type="button" value=">>>" id="incorporar6" class="incorporar">
<text class="tituloparcial">Entradas HDEX6</text><input type="text" id="totalhdex6" class="cifrasparciales" value=""><br>
<text class="cota1">HDEX7</text><input type="file" id="carpeta7" webkitdirectory directory multiple class="entradas"><br>
<text class="cota1">HDEX7 internos</text><input type="file" id="carpeta7b" webkitdirectory directory multiple onchange="recopilar7b()" class="entradas">
<input type="button" id="borrar7" class="borrar" value="limpiar HDEX7"><text class="info" id="contador7"></text><input type="button" value=">>>" id="incorporar7" class="incorporar">
<text class="tituloparcial">Entradas HDEX7</text><input type="text" id="totalhdex7" class="cifrasparciales" value=""><br>
<text class="cota1">HDEX8</text><input type="file" id="carpeta8" webkitdirectory directory multiple class="entradas"><br>
<text class="cota1">HDEX8 internos</text><input type="file" id="carpeta8b" webkitdirectory directory multiple onchange="recopilar8b()" class="entradas">
<input type="button" id="borrar8" class="borrar" value="limpiar HDEX8"><text class="info" id="contador8"></text><input type="button" value=">>>" id="incorporar8" class="incorporar">
<text class="tituloparcial">Entradas HDEX8</text><input type="text" id="totalhdex8" class="cifrasparciales" value=""><br>`

estadistica()

/////////
/////////
//HDEX1
/////////
/////////
let incorporar1 = document.getElementById("incorporar1")
incorporar1.addEventListener("click", () => {

    let hdex1 = document.getElementById("carpeta1").files
    for(let linea of hdex1){
        if(linea.webkitRelativePath.includes("DS_Store")){

        }else{
            let lineaseparada = linea.webkitRelativePath.split("/")
            fragmentoshdex1.push(lineaseparada[0] + "/" + lineaseparada[1] + "/" + lineaseparada[2])
        }
    }

    fragmentoshdex1.sort()
    eliminarrepetidoshdex1()

    let campo = document.getElementById("w3review")
    for(let linea of fragmentoshdex1){
        if(linea.includes("DS_Store")){

        }else{
            campo.value += linea + "\n"
        }
    }
    estadistica()
})

function recopilar1b(){
    let hdex1b = document.getElementById("carpeta1b")
    let arrayfiles1 = hdex1b.files
    for(let index of arrayfiles1){
        let path = index.webkitRelativePath
        let filearray = path.split("/")
        if(filearray.length > 1){
            let pathrestaurado = "Entretenimiento HDEX1/" + filearray[0] + "/" + filearray[1]
            fragmentoshdex1.push(pathrestaurado)
        }
    }
    fragmentoshdex1.sort()
    eliminarrepetidoshdex1()
}

function eliminarrepetidoshdex1(){
    for(index in fragmentoshdex1){
        let indice = parseInt(index)
        if(fragmentoshdex1[indice] === fragmentoshdex1[indice + 1]){
            fragmentoshdex1.splice(indice + 1 , 1)
            eliminarrepetidoshdex1()
        }
    }
    estadistica()
}




/////////
/////////
//HDEX2
/////////
/////////
let incorporar2 = document.getElementById("incorporar2")
incorporar2.addEventListener("click", () => {

    let hdex2 = document.getElementById("carpeta2").files
    for(let linea of hdex2){
        if(linea.webkitRelativePath.includes("DS_Store")){

        }else{
            let lineaseparada = linea.webkitRelativePath.split("/")
            fragmentoshdex2.push(lineaseparada[0] + "/" + lineaseparada[1] + "/" + lineaseparada[2])
        }
    }

    fragmentoshdex2.sort()
    eliminarrepetidoshdex2()

    let campo = document.getElementById("w3review")
    for(let linea of fragmentoshdex2){
        if(linea.includes("DS_Store")){

        }else{
            campo.value += linea + "\n"
        }
    }
    estadistica()
})

function recopilar2b(){
    let hdex2b = document.getElementById("carpeta2b")
    let arrayfiles2 = hdex2b.files
    for(let index of arrayfiles2){
        let path = index.webkitRelativePath
        let filearray = path.split("/")
        if(filearray.length > 1){
            let pathrestaurado = "Entretenimiento HDEX2/" + filearray[0] + "/" + filearray[1]
            fragmentoshdex2.push(pathrestaurado)
        }
    }
    fragmentoshdex2.sort()
    eliminarrepetidoshdex2()
}

function eliminarrepetidoshdex2(){
    for(index in fragmentoshdex2){
        let indice = parseInt(index)
        if(fragmentoshdex2[indice] === fragmentoshdex2[indice + 1]){
            fragmentoshdex2.splice(indice + 1 , 1)
            eliminarrepetidoshdex2()
        }
    }
    estadistica()
}




/////////
/////////
//HDEX3
/////////
/////////
let incorporar3 = document.getElementById("incorporar3")
incorporar3.addEventListener("click", () => {

    let hdex3 = document.getElementById("carpeta3").files
    for(let linea of hdex3){
        if(linea.webkitRelativePath.includes("DS_Store")){

        }else{
            let lineaseparada = linea.webkitRelativePath.split("/")
            fragmentoshdex3.push(lineaseparada[0] + "/" + lineaseparada[1] + "/" + lineaseparada[2])
        }
    }

    fragmentoshdex3.sort()
    eliminarrepetidoshdex3()

    let campo = document.getElementById("w3review")
    for(let linea of fragmentoshdex3){
        if(linea.includes("DS_Store")){

        }else{
            campo.value += linea + "\n"
        }
    }
    estadistica()
})

function recopilar3b(){
    let hdex3b = document.getElementById("carpeta3b")
    let arrayfiles3 = hdex3b.files
    for(let index of arrayfiles3){
        let path = index.webkitRelativePath
        let filearray = path.split("/")
        if(filearray.length > 1){
            let pathrestaurado = "Entretenimiento HDEX3/" + filearray[0] + "/" + filearray[1]
            fragmentoshdex3.push(pathrestaurado)
        }
    }
    fragmentoshdex3.sort()
    eliminarrepetidoshdex3()
}

function eliminarrepetidoshdex3(){
    for(index in fragmentoshdex3){
        let indice = parseInt(index)
        if(fragmentoshdex3[indice] === fragmentoshdex3[indice + 1]){
            fragmentoshdex3.splice(indice + 1 , 1)
            eliminarrepetidoshdex3()
        }
    }
    estadistica()
}




/////////
/////////
//HDEX4
/////////
/////////
let incorporar4 = document.getElementById("incorporar4")
incorporar4.addEventListener("click", () => {

    let hdex4 = document.getElementById("carpeta4").files
    for(let linea of hdex4){
        if(linea.webkitRelativePath.includes("DS_Store")){

        }else{
            let lineaseparada = linea.webkitRelativePath.split("/")
            fragmentoshdex4.push(lineaseparada[0] + "/" + lineaseparada[1] + "/" + lineaseparada[2])
        }
    }

    fragmentoshdex4.sort()
    eliminarrepetidoshdex4()

    let campo = document.getElementById("w3review")
    for(let linea of fragmentoshdex4){
        if(linea.includes("DS_Store")){

        }else{
            campo.value += linea + "\n"
        }
    }
    estadistica()
})

function recopilar4b(){
    let hdex4b = document.getElementById("carpeta4b")
    let arrayfiles4 = hdex4b.files
    for(let index of arrayfiles4){
        let path = index.webkitRelativePath
        let filearray = path.split("/")
        if(filearray.length > 1){
            let pathrestaurado = "Entretenimiento HDEX4/" + filearray[0] + "/" + filearray[1]
            fragmentoshdex4.push(pathrestaurado)
        }
    }
    fragmentoshdex4.sort()
    eliminarrepetidoshdex4()
}

function eliminarrepetidoshdex4(){
    for(index in fragmentoshdex4){
        let indice = parseInt(index)
        if(fragmentoshdex4[indice] === fragmentoshdex4[indice + 1]){
            fragmentoshdex4.splice(indice + 1 , 1)
            eliminarrepetidoshdex4()
        }
    }
    estadistica()
}




/////////
/////////
//HDEX5
/////////
/////////
let incorporar5 = document.getElementById("incorporar5")
incorporar5.addEventListener("click", () => {

    let hdex5 = document.getElementById("carpeta5").files
    for(let linea of hdex5){
        if(linea.webkitRelativePath.includes("DS_Store")){

        }else{
            let lineaseparada = linea.webkitRelativePath.split("/")
            fragmentoshdex5.push(lineaseparada[0] + "/" + lineaseparada[1] + "/" + lineaseparada[2])
        }
    }

    fragmentoshdex5.sort()
    eliminarrepetidoshdex5()

    let campo = document.getElementById("w3review")
    for(let linea of fragmentoshdex5){
        if(linea.includes("DS_Store")){

        }else{
            campo.value += linea + "\n"
        }
    }
    estadistica()
})

function recopilar5b(){
    let hdex1b = document.getElementById("carpeta5b")
    let arrayfiles5 = hdex5b.files
    for(let index of arrayfiles5){
        let path = index.webkitRelativePath
        let filearray = path.split("/")
        if(filearray.length > 1){
            let pathrestaurado = "Entretenimiento HDEX5/" + filearray[0] + "/" + filearray[1]
            fragmentoshdex5.push(pathrestaurado)
        }
    }
    fragmentoshdex5.sort()
    eliminarrepetidoshdex5()
}

function eliminarrepetidoshdex5(){
    for(index in fragmentoshdex5){
        let indice = parseInt(index)
        if(fragmentoshdex5[indice] === fragmentoshdex5[indice + 1]){
            fragmentoshdex5.splice(indice + 1 , 1)
            eliminarrepetidoshdex5()
        }
    }
    estadistica()
}




/////////
/////////
//HDEX6
/////////
/////////
let incorporar6 = document.getElementById("incorporar6")
incorporar6.addEventListener("click", () => {

    let hdex6 = document.getElementById("carpeta6").files
    for(let linea of hdex6){
        if(linea.webkitRelativePath.includes("DS_Store")){

        }else{
            let lineaseparada = linea.webkitRelativePath.split("/")
            fragmentoshdex6.push(lineaseparada[0] + "/" + lineaseparada[1] + "/" + lineaseparada[2])
        }
    }

    fragmentoshdex6.sort()
    eliminarrepetidoshdex6()

    let campo = document.getElementById("w3review")
    for(let linea of fragmentoshdex6){
        if(linea.includes("DS_Store")){

        }else{
            campo.value += linea + "\n"
        }
    }
    estadistica()
})

function recopilar6b(){
    let hdex6b = document.getElementById("carpeta6b")
    let arrayfiles6 = hdex6b.files
    for(let index of arrayfiles6){
        let path = index.webkitRelativePath
        let filearray = path.split("/")
        if(filearray.length > 1){
            let pathrestaurado = "Entretenimiento HDEX6/" + filearray[0] + "/" + filearray[1]
            fragmentoshdex6.push(pathrestaurado)
        }
    }
    fragmentoshdex6.sort()
    eliminarrepetidoshdex6()
}

function eliminarrepetidoshdex6(){
    for(index in fragmentoshdex6){
        let indice = parseInt(index)
        if(fragmentoshdex6[indice] === fragmentoshdex6[indice + 1]){
            fragmentoshdex6.splice(indice + 1 , 1)
            eliminarrepetidoshdex6()
        }
    }
    estadistica()
}




/////////
/////////
//HDEX7
/////////
/////////
let incorporar7 = document.getElementById("incorporar7")
incorporar7.addEventListener("click", () => {

    let hdex7 = document.getElementById("carpeta7").files
    for(let linea of hdex7){
        if(linea.webkitRelativePath.includes("DS_Store")){

        }else{
            let lineaseparada = linea.webkitRelativePath.split("/")
            fragmentoshdex7.push(lineaseparada[0] + "/" + lineaseparada[1] + "/" + lineaseparada[2])
        }
    }

    fragmentoshdex7.sort()
    eliminarrepetidoshdex7()

    let campo = document.getElementById("w3review")
    for(let linea of fragmentoshdex7){
        if(linea.includes("DS_Store")){

        }else{
            campo.value += linea + "\n"
        }
    }
    estadistica()
})

function recopilar7b(){
    let hdex7b = document.getElementById("carpeta7b")
    let arrayfiles7 = hdex7b.files
    for(let index of arrayfiles7){
        let path = index.webkitRelativePath
        let filearray = path.split("/")
        if(filearray.length > 1){
            let pathrestaurado = "Entretenimiento HDEX7/" + filearray[0] + "/" + filearray[1]
            fragmentoshdex7.push(pathrestaurado)
        }
    }
    fragmentoshdex7.sort()
    eliminarrepetidoshdex7()
}

function eliminarrepetidoshdex7(){
    for(index in fragmentoshdex7){
        let indice = parseInt(index)
        if(fragmentoshdex7[indice] === fragmentoshdex7[indice + 1]){
            fragmentoshdex7.splice(indice + 1 , 1)
            eliminarrepetidoshdex7()
        }
    }
    estadistica()
}


/////////
/////////
//HDEX8
/////////
/////////
let incorporar8 = document.getElementById("incorporar8")
incorporar8.addEventListener("click", () => {

    let hdex8 = document.getElementById("carpeta8").files
    for(let linea of hdex8){
        if(linea.webkitRelativePath.includes("DS_Store")){

        }else{
            let lineaseparada = linea.webkitRelativePath.split("/")
            fragmentoshdex8.push(lineaseparada[0] + "/" + lineaseparada[1] + "/" + lineaseparada[2])
        }
    }

    fragmentoshdex8.sort()
    eliminarrepetidoshdex8()

    let campo = document.getElementById("w3review")
    for(let linea of fragmentoshdex8){
        if(linea.includes("DS_Store")){

        }else{
            campo.value += linea + "\n"
        }
    }
    estadistica()
})

function recopilar8b(){
    let hdex8b = document.getElementById("carpeta8b")
    let arrayfiles8 = hdex8b.files
    for(let index of arrayfiles8){
        let path = index.webkitRelativePath
        let filearray = path.split("/")
        if(filearray.length > 1){
            let pathrestaurado = "Entretenimiento HDEX8/" + filearray[0] + "/" + filearray[1]
            fragmentoshdex8.push(pathrestaurado)
        }
    }
    fragmentoshdex8.sort()
    eliminarrepetidoshdex8()
}

function eliminarrepetidoshdex8(){
    for(index in fragmentoshdex8){
        let indice = parseInt(index)
        if(fragmentoshdex8[indice] === fragmentoshdex8[indice + 1]){
            fragmentoshdex8.splice(indice + 1 , 1)
            eliminarrepetidoshdex8()
        }
    }
    estadistica()
}

/////////////
/////////////
/////////////
/////////////




let eliminarHDEX1 = document.getElementById("borrar1")
eliminarHDEX1.addEventListener("click" , () => {
    fragmentoshdex1.splice(0, fragmentoshdex1.length)
    estadistica()
})
let eliminarHDEX2 = document.getElementById("borrar2")
eliminarHDEX2.addEventListener("click" , () => {
    fragmentoshdex2.splice(0, fragmentoshdex2.length)
    estadistica()
})
let eliminarHDEX3 = document.getElementById("borrar3")
eliminarHDEX3.addEventListener("click" , () => {
    fragmentoshdex3.splice(0, fragmentoshdex3.length)
    estadistica()
})
let eliminarHDEX4 = document.getElementById("borrar4")
eliminarHDEX4.addEventListener("click" , () => {
    fragmentoshdex4.splice(0, fragmentoshdex4.length)
    estadistica()
})
let eliminarHDEX5 = document.getElementById("borrar5")
eliminarHDEX5.addEventListener("click" , () => {
    fragmentoshdex5.splice(0, fragmentoshdex5.length)
    estadistica()
})
let eliminarHDEX6 = document.getElementById("borrar6")
eliminarHDEX6.addEventListener("click" , () => {
    fragmentoshdex6.splice(0, fragmentoshdex6.length)
    estadistica()
})
let eliminarHDEX7 = document.getElementById("borrar7")
eliminarHDEX7.addEventListener("click" , () => {
    fragmentoshdex7.splice(0, fragmentoshdex7.length)
    estadistica()
})
let eliminarHDEX8 = document.getElementById("borrar8")
eliminarHDEX8.addEventListener("click" , () => {
    fragmentoshdex8.splice(0, fragmentoshdex8.length)
    estadistica()
})


let ejecutar = document.getElementById("ejecutar")
ejecutar.addEventListener("click" , () =>{
    let materialescrito = document.getElementById("w3review")
    arraymaterial = materialescrito.value.split("\n")
    procesador(arraymaterial)
})

let eliminardatosobtenidos = document.getElementById("vaciascaja")
eliminardatosobtenidos.addEventListener("click" , () => {
    let caja = document.getElementById("w3review")
    caja.value = ''
})

function estadistica(){
    let leerdatos = document.getElementById("w3review")
    let renglones = leerdatos.value.split("\n")
    contadorHDEX1.splice(0, contadorHDEX1.length)
    contadorHDEX2.splice(0, contadorHDEX2.length)
    contadorHDEX3.splice(0, contadorHDEX3.length)
    contadorHDEX4.splice(0, contadorHDEX4.length)
    contadorHDEX5.splice(0, contadorHDEX5.length)
    contadorHDEX6.splice(0, contadorHDEX6.length)
    contadorHDEX7.splice(0, contadorHDEX7.length)
    contadorHDEX8.splice(0, contadorHDEX8.length)
    for(let lineas of renglones){
        if(lineas.includes("HDEX1")){
            contadorHDEX1.push(lineas)
        }
        if(lineas.includes("HDEX2")){
            contadorHDEX2.push(lineas)
        }
        if(lineas.includes("HDEX3")){
            contadorHDEX3.push(lineas)
        }
        if(lineas.includes("HDEX4")){
            contadorHDEX4.push(lineas)
        }
        if(lineas.includes("HDEX5")){
            contadorHDEX5.push(lineas)
        }
        if(lineas.includes("HDEX6")){
            contadorHDEX6.push(lineas)
        }
        if(lineas.includes("HDEX7")){
            contadorHDEX7.push(lineas)
        }
        if(lineas.includes("HDEX8")){
            contadorHDEX8.push(lineas)
        }
    }
    let contador1 = document.getElementById("contador1")
    contador1.textContent = fragmentoshdex1.length
    let contador2 = document.getElementById("contador2")
    contador2.textContent = fragmentoshdex2.length
    let contador3 = document.getElementById("contador3")
    contador3.textContent = fragmentoshdex3.length
    let contador4 = document.getElementById("contador4")
    contador4.textContent = fragmentoshdex4.length
    let contador5 = document.getElementById("contador5")
    contador5.textContent = fragmentoshdex5.length
    let contador6 = document.getElementById("contador6")
    contador6.textContent = fragmentoshdex6.length
    let contador7 = document.getElementById("contador7")
    contador7.textContent = fragmentoshdex7.length
    let contador8 = document.getElementById("contador8")
    contador8.textContent = fragmentoshdex8.length
    let totaldatosingresados = document.getElementById("totaldatos")
    totaldatosingresados.value = renglones.length - 1
    let parcial1 = document.getElementById("totalhdex1")
    parcial1.value = contadorHDEX1.length
    let parcial2 = document.getElementById("totalhdex2")
    parcial2.value = contadorHDEX2.length
    let parcial3 = document.getElementById("totalhdex3")
    parcial3.value = contadorHDEX3.length
    let parcial4 = document.getElementById("totalhdex4")
    parcial4.value = contadorHDEX4.length
    let parcial5 = document.getElementById("totalhdex5")
    parcial5.value = contadorHDEX5.length
    let parcial6 = document.getElementById("totalhdex6")
    parcial6.value = contadorHDEX6.length
    let parcial7 = document.getElementById("totalhdex7")
    parcial7.value = contadorHDEX7.length
    let parcial8 = document.getElementById("totalhdex8")
    parcial8.value = contadorHDEX8.length
    let irregularidades = contadorHDEX1.length + contadorHDEX2.length + contadorHDEX3.length + contadorHDEX4.length + contadorHDEX5.length + contadorHDEX6.length + contadorHDEX7.length + contadorHDEX8.length + 1 - renglones.length
    let irregularidadesdom = document.getElementById("irregularidades")
    irregularidadesdom.value = irregularidades
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

    lxl.splice(0, lxl.length)

    for(let linea of a){
        let lineadividida = linea.split("/")
        if(lineadividida.length > 2){
            lxl.push(lineadividida[0] + "/" + lineadividida[1] + "/" + lineadividida[2])
        }
    }

    videoteca.splice(0, videoteca.length)

    for(let index in lxl){

        nombre = ""


        if(lxl[index].includes(" - ")){
            lineadivididaotravez = lxl[index].split("/")
            nombrecontodo = lineadivididaotravez[2]
            entrelineas = nombrecontodo.split(" - ")
            nombre = entrelineas[1]

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
        if(lxl[index].includes("UOK - ")){
            idioma = "Incluye Cast N"
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
            idioma = ""
        }
        if(lxl[index].includes("Eventos/EVENTO M - ")){
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
        if(lxl[index].includes("HDEX8")){
            disco = "HDEX8"
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
    especial.splice(0, especial.length)
    for(let pelis of videoteca){
        especial.push(`${pelis.type} ${pelis.nombre}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ${pelis.disco} ${pelis.id}`)
    }
    ordenar(especial)
}

function print(a){
    for(let index in a){
        a[index].numerodeitem = parseInt(index) + 1
    }
    let fragmentoResult = ''
    let fragmentoResultcopy = ''
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
        let ordencopaiar = document.getElementById("copiar")
        ordencopaiar.addEventListener("click" , () => {

            navigator.clipboard.writeText(fragmentoResultcopy);
        })

    })

    let contenedorresultado = document.getElementById("resultado")
    contenedorresultado.innerHTML = `<text id="nombresD" class="nombresD"></text>`
    nombresD = document.getElementById("nombresD")
    nombresD.innerHTML = ``;
    nombresD.innerHTML = fragmentoResult

    let datosentregados = document.getElementById("datosentregados")
    datosentregados.value = a.length
}

function ordenar(a){
    b = a.sort()
    implementar(b)
}

function implementar(a){
    temporal.splice(0, temporal.length)
    for(let pelis of a){
        for(let coleccion of videoteca){
            if(pelis.includes(coleccion.id)){
                temporal.push(coleccion)
            }
        }
    }
    print(temporal)
}
