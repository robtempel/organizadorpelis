const archivos1 = []
const tablacompleta1 = []
const pendientes1 = []
const navegacion1 = []

const archivos2 = []
const tablacompleta2 = []
const pendientes2 = []
const navegacion2 = []

const archivos3 = []
const tablacompleta3 = []
const pendientes3 = []
const navegacion3 = []

const archivos4 = []
const tablacompleta4 = []
const pendientes4 = []
const navegacion4 = []

const archivos5 = []
const tablacompleta5 = []
const pendientes5 = []
const navegacion5 = []

const archivos6 = []
const tablacompleta6 = []
const pendientes6 = []
const navegacion6 = []

const archivos7 = []
const tablacompleta7 = []
const pendientes7 = []
const navegacion7 = []

const archivos8 = []
const tablacompleta8 = []
const pendientes8 = []
const navegacion8 = []

const archivos9 = []
const tablacompleta9 = []
const pendientes9 = []
const navegacion9 = []

const plandevuelo = []

let especimen = {
    name: "",
    size: "",
    mod: "",
    duracion: "",
    ancho: "",
    alto: "",
}

const ultimos = []

ultimos.push(especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen)



function papusa(){

    if(tablacompleta1.length == 0){
    }else{
        plandevuelo.push(1)
    }

    if(tablacompleta2.length == 0){
    }else{
        plandevuelo.push(2)
    }

    if(tablacompleta3.length == 0){
    }else{
        plandevuelo.push(3)
    }

    if(tablacompleta4.length == 0){
    }else{
        plandevuelo.push(4)
    }

    if(tablacompleta5.length == 0){
    }else{
        plandevuelo.push(5)
    }

    if(tablacompleta6.length == 0){
    }else{
        plandevuelo.push(6)
    }

    if(tablacompleta7.length == 0){
    }else{
        plandevuelo.push(7)
    }

    if(tablacompleta8.length == 0){
    }else{
        plandevuelo.push(8)
    }

    torredecontrol()

}

function torredecontrol(){

    const ctrl = []
    if(navegacion1.length > 0 && navegacion1.length < pendientes1.length){
        ctrl.push(1)
    }
    if(navegacion2.length > 0 && navegacion2.length < pendientes2.length){
        ctrl.push(1)
    }
    if(navegacion3.length > 0 && navegacion3.length < pendientes3.length){
        ctrl.push(1)
    }
    if(navegacion4.length > 0 && navegacion4.length < pendientes4.length){
        ctrl.push(1)
    }
    if(navegacion5.length > 0 && navegacion5.length < pendientes5.length){
        ctrl.push(1)
    }
    if(navegacion6.length > 0 && navegacion6.length < pendientes6.length){
        ctrl.push(1)
    }
    if(navegacion7.length > 0 && navegacion7.length < pendientes7.length){
        ctrl.push(1)
    }
    if(navegacion8.length > 0 && navegacion8.length < pendientes8.length){
        ctrl.push(1)
    }

    if(ctrl.length < 4 && plandevuelo.length > 0){
        gatillo(plandevuelo[0])
        plandevuelo.splice(0,1)
    }

    if(navegacion1.length == pendientes1.length && navegacion2.length == pendientes2.length && navegacion3.length == pendientes3.length && navegacion4.length == pendientes4.length && navegacion5.length == pendientes5.length && navegacion6.length == pendientes6.length && navegacion7.length == pendientes7.length && navegacion8.length == pendientes8.length){
        
        document.getElementById("medidor1").style.width = `0px`
        document.getElementById("medidor2").style.width = `0px`
        document.getElementById("medidor3").style.width = `0px`
        document.getElementById("medidor4").style.width = `0px`
        document.getElementById("medidor5").style.width = `0px`
        document.getElementById("medidor6").style.width = `0px`
        document.getElementById("medidor7").style.width = `0px`
        document.getElementById("medidor8").style.width = `0px`
        document.getElementById("medidor9").style.width = `0px`
        document.getElementById("current").className = "currentI"

    }

}

function gatillo(a){

    if(a == 1){
        scanpending1()
        let bloque1 = document.getElementById("informe1")
        bloque1.className = "informeV"
    }
    if(a == 2){
        scanpending2()
        let bloque2 = document.getElementById("informe2")
        bloque2.className = "informeV"
    }
    if(a == 3){
        scanpending3()
        let bloque3 = document.getElementById("informe3")
        bloque3.className = "informeV"
    }
    if(a == 4){
        scanpending4()
        let bloque4 = document.getElementById("informe4")
        bloque4.className = "informeV"
    }
    if(a == 5){
        scanpending5()
        let bloque5 = document.getElementById("informe5")
        bloque5.className = "informeV"
    }
    if(a == 6){
        scanpending6()
        let bloque6 = document.getElementById("informe6")
        bloque6.className = "informeV"
    }
    if(a == 7){
        scanpending7()
        let bloque7 = document.getElementById("informe7")
        bloque7.className = "informeV"
    }
    if(a == 8){
        scanpending8()
        let bloque8 = document.getElementById("informe8")
        bloque8.className = "informeV"
    }
}

function imprimirtodo(){

    if(navegacion1.length == pendientes1.length && navegacion2.length == pendientes2.length && navegacion3.length == pendientes3.length && navegacion4.length == pendientes4.length && navegacion5.length == pendientes5.length && navegacion6.length == pendientes6.length && navegacion7.length == pendientes7.length && navegacion8.length == pendientes8.length){
        
        const tuti = tablacompleta1.concat(tablacompleta2, tablacompleta3, tablacompleta4, tablacompleta5, tablacompleta6, tablacompleta7, tablacompleta8)

        let fragmentoResult = ''

        tuti.forEach(item => {
            fragmentoResult += `<text class="complete">${item.route}/${item.tamano}/${item.tipo}/${item.ultimamodificacion.getUTCFullYear()}-${("0" + (item.ultimamodificacion.getMonth()+1)).slice(-2)}-${("0" + item.ultimamodificacion.getDate()).slice(-2)} ${("0" + item.ultimamodificacion.getHours()).slice(-2)}:${("0" + item.ultimamodificacion.getMinutes()).slice(-2)}:${("0" + item.ultimamodificacion.getSeconds()).slice(-2)}|${("00" + item.ultimamodificacion.getMilliseconds()).slice(-3)}/${item.anchovideo}/${item.altovideo}/${item.duracion}</text><br>`
        })
    
        let contenedorresultado = document.getElementById("show")
    
        contenedorresultado.innerHTML = ``;
        contenedorresultado.innerHTML = fragmentoResult

        let actual1 = document.getElementById("actual1")
        actual1.textContent = ``
        let actual2 = document.getElementById("actual2")
        actual2.textContent = ``
        let actual3 = document.getElementById("actual3")
        actual3.textContent = ``
        let actual4 = document.getElementById("actual4")
        actual4.textContent = ``
        let actual5 = document.getElementById("actual5")
        actual5.textContent = ``
        let actual6 = document.getElementById("actual6")
        actual6.textContent = ``
        let actual7 = document.getElementById("actual7")
        actual7.textContent = ``
        let actual8 = document.getElementById("actual8")
        actual8.textContent = ``

        document.getElementById("medidor1").style.width = `0px`
        document.getElementById("medidor2").style.width = `0px`
        document.getElementById("medidor3").style.width = `0px`
        document.getElementById("medidor4").style.width = `0px`
        document.getElementById("medidor5").style.width = `0px`
        document.getElementById("medidor6").style.width = `0px`
        document.getElementById("medidor7").style.width = `0px`
        document.getElementById("medidor8").style.width = `0px`
        document.getElementById("medidor9").style.width = `0px`
    }

}

function imprimirparcial(){

    const tuti = archivos1.concat(archivos2, archivos3, archivos4, archivos5, archivos6, archivos7, archivos8)

    let fragmentoResult = ''

    tuti.forEach(item => {
        fragmentoResult += `<text class="complete">${item.webkitRelativePath}/${item.size}/${item.type.replace(/\//g, "-")}/${item.lastModifiedDate.getUTCFullYear()}-${("0" + (item.lastModifiedDate.getMonth()+1)).slice(-2)}-${("0" + item.lastModifiedDate.getDate()).slice(-2)} ${("0" + item.lastModifiedDate.getHours()).slice(-2)}:${("0" + item.lastModifiedDate.getMinutes()).slice(-2)}:${("0" + item.lastModifiedDate.getSeconds()).slice(-2)}|${("00" + item.lastModifiedDate.getMilliseconds()).slice(-3)}</text><br>`
    })

    let contenedorresultado = document.getElementById("show")

    contenedorresultado.innerHTML = ``;
    contenedorresultado.innerHTML = fragmentoResult


}

function mostraravance(){

    let flujo = document.getElementById("flujo")
    flujo.innerHTML = `
    <text class="flujonombre">${ultimos[35].name} ${ultimos[35].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[35].duracion}</text><text class="flujonombre"> ${ultimos[35].size}</text><text class="flujonombreR"> ${ultimos[35].ancho}x${ultimos[35].alto}</text><br>
    <text class="flujonombre">${ultimos[34].name} ${ultimos[34].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[34].duracion}</text><text class="flujonombre"> ${ultimos[34].size}</text><text class="flujonombreR"> ${ultimos[34].ancho}x${ultimos[34].alto}</text><br>
    <text class="flujonombre">${ultimos[33].name} ${ultimos[33].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[33].duracion}</text><text class="flujonombre"> ${ultimos[33].size}</text><text class="flujonombreR"> ${ultimos[33].ancho}x${ultimos[33].alto}</text><br>
    <text class="flujonombre">${ultimos[32].name} ${ultimos[32].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[32].duracion}</text><text class="flujonombre"> ${ultimos[32].size}</text><text class="flujonombreR"> ${ultimos[32].ancho}x${ultimos[32].alto}</text><br>
    <text class="flujonombre">${ultimos[31].name} ${ultimos[31].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[31].duracion}</text><text class="flujonombre"> ${ultimos[31].size}</text><text class="flujonombreR"> ${ultimos[31].ancho}x${ultimos[31].alto}</text><br>
    <text class="flujonombre">${ultimos[30].name} ${ultimos[30].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[30].duracion}</text><text class="flujonombre"> ${ultimos[30].size}</text><text class="flujonombreR"> ${ultimos[30].ancho}x${ultimos[30].alto}</text><br>
    <text class="flujonombre">${ultimos[29].name} ${ultimos[29].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[29].duracion}</text><text class="flujonombre"> ${ultimos[29].size}</text><text class="flujonombreR"> ${ultimos[29].ancho}x${ultimos[29].alto}</text><br>
    <text class="flujonombre">${ultimos[28].name} ${ultimos[28].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[28].duracion}</text><text class="flujonombre"> ${ultimos[28].size}</text><text class="flujonombreR"> ${ultimos[28].ancho}x${ultimos[28].alto}</text><br>
    <text class="flujonombre">${ultimos[27].name} ${ultimos[27].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[27].duracion}</text><text class="flujonombre"> ${ultimos[27].size}</text><text class="flujonombreR"> ${ultimos[27].ancho}x${ultimos[27].alto}</text><br>
    <text class="flujonombre">${ultimos[26].name} ${ultimos[26].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[26].duracion}</text><text class="flujonombre"> ${ultimos[26].size}</text><text class="flujonombreR"> ${ultimos[26].ancho}x${ultimos[26].alto}</text><br>
    <text class="flujonombre">${ultimos[25].name} ${ultimos[25].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[25].duracion}</text><text class="flujonombre"> ${ultimos[25].size}</text><text class="flujonombreR"> ${ultimos[25].ancho}x${ultimos[25].alto}</text><br>
    <text class="flujonombre">${ultimos[24].name} ${ultimos[24].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[24].duracion}</text><text class="flujonombre"> ${ultimos[24].size}</text><text class="flujonombreR"> ${ultimos[24].ancho}x${ultimos[24].alto}</text><br>
    <text class="flujonombre">${ultimos[23].name} ${ultimos[23].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[23].duracion}</text><text class="flujonombre"> ${ultimos[23].size}</text><text class="flujonombreR"> ${ultimos[23].ancho}x${ultimos[23].alto}</text><br>
    <text class="flujonombre">${ultimos[22].name} ${ultimos[22].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[22].duracion}</text><text class="flujonombre"> ${ultimos[22].size}</text><text class="flujonombreR"> ${ultimos[22].ancho}x${ultimos[22].alto}</text><br>
    <text class="flujonombre">${ultimos[21].name} ${ultimos[21].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[21].duracion}</text><text class="flujonombre"> ${ultimos[21].size}</text><text class="flujonombreR"> ${ultimos[21].ancho}x${ultimos[21].alto}</text><br>
    <text class="flujonombre">${ultimos[20].name} ${ultimos[20].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[20].duracion}</text><text class="flujonombre"> ${ultimos[20].size}</text><text class="flujonombreR"> ${ultimos[20].ancho}x${ultimos[20].alto}</text><br>
    <text class="flujonombre">${ultimos[19].name} ${ultimos[19].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[19].duracion}</text><text class="flujonombre"> ${ultimos[19].size}</text><text class="flujonombreR"> ${ultimos[19].ancho}x${ultimos[19].alto}</text><br>
    <text class="flujonombre">${ultimos[18].name} ${ultimos[18].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[18].duracion}</text><text class="flujonombre"> ${ultimos[18].size}</text><text class="flujonombreR"> ${ultimos[18].ancho}x${ultimos[18].alto}</text><br>
    <text class="flujonombre">${ultimos[17].name} ${ultimos[17].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[17].duracion}</text><text class="flujonombre"> ${ultimos[17].size}</text><text class="flujonombreR"> ${ultimos[17].ancho}x${ultimos[17].alto}</text><br>
    <text class="flujonombre">${ultimos[16].name} ${ultimos[16].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[16].duracion}</text><text class="flujonombre"> ${ultimos[16].size}</text><text class="flujonombreR"> ${ultimos[16].ancho}x${ultimos[16].alto}</text><br>
    <text class="flujonombre">${ultimos[15].name} ${ultimos[15].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[15].duracion}</text><text class="flujonombre"> ${ultimos[15].size}</text><text class="flujonombreR"> ${ultimos[15].ancho}x${ultimos[15].alto}</text><br>
    <text class="flujonombre">${ultimos[14].name} ${ultimos[14].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[14].duracion}</text><text class="flujonombre"> ${ultimos[14].size}</text><text class="flujonombreR"> ${ultimos[14].ancho}x${ultimos[14].alto}</text><br>
    <text class="flujonombre">${ultimos[13].name} ${ultimos[13].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[13].duracion}</text><text class="flujonombre"> ${ultimos[13].size}</text><text class="flujonombreR"> ${ultimos[13].ancho}x${ultimos[13].alto}</text><br>
    <text class="flujonombre">${ultimos[12].name} ${ultimos[12].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[12].duracion}</text><text class="flujonombre"> ${ultimos[12].size}</text><text class="flujonombreR"> ${ultimos[12].ancho}x${ultimos[12].alto}</text><br>
    <text class="flujonombre">${ultimos[11].name} ${ultimos[11].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[11].duracion}</text><text class="flujonombre"> ${ultimos[11].size}</text><text class="flujonombreR"> ${ultimos[11].ancho}x${ultimos[11].alto}</text><br>
    <text class="flujonombre">${ultimos[10].name} ${ultimos[10].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[10].duracion}</text><text class="flujonombre"> ${ultimos[10].size}</text><text class="flujonombreR"> ${ultimos[10].ancho}x${ultimos[10].alto}</text><br>
    <text class="flujonombre">${ultimos[9].name} ${ultimos[9].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[9].duracion}</text><text class="flujonombre"> ${ultimos[9].size}</text><text class="flujonombreR"> ${ultimos[9].ancho}x${ultimos[9].alto}</text><br>
    <text class="flujonombre">${ultimos[8].name} ${ultimos[8].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[8].duracion}</text><text class="flujonombre"> ${ultimos[8].size}</text><text class="flujonombreR"> ${ultimos[8].ancho}x${ultimos[8].alto}</text><br>
    <text class="flujonombre">${ultimos[7].name} ${ultimos[7].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[7].duracion}</text><text class="flujonombre"> ${ultimos[7].size}</text><text class="flujonombreR"> ${ultimos[7].ancho}x${ultimos[7].alto}</text><br>
    <text class="flujonombre">${ultimos[6].name} ${ultimos[6].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[6].duracion}</text><text class="flujonombre"> ${ultimos[6].size}</text><text class="flujonombreR"> ${ultimos[6].ancho}x${ultimos[6].alto}</text><br>
    <text class="flujonombre">${ultimos[5].name} ${ultimos[5].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[5].duracion}</text><text class="flujonombre"> ${ultimos[5].size}</text><text class="flujonombreR"> ${ultimos[5].ancho}x${ultimos[5].alto}</text><br>
    <text class="flujonombre">${ultimos[4].name} ${ultimos[4].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[4].duracion}</text><text class="flujonombre"> ${ultimos[4].size}</text><text class="flujonombreR"> ${ultimos[4].ancho}x${ultimos[4].alto}</text><br>
    <text class="flujonombre">${ultimos[3].name} ${ultimos[3].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[3].duracion}</text><text class="flujonombre"> ${ultimos[3].size}</text><text class="flujonombreR"> ${ultimos[3].ancho}x${ultimos[3].alto}</text><br>
    <text class="flujonombre">${ultimos[2].name} ${ultimos[2].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[2].duracion}</text><text class="flujonombre"> ${ultimos[2].size}</text><text class="flujonombreR"> ${ultimos[2].ancho}x${ultimos[2].alto}</text><br>
    <text class="flujonombre">${ultimos[1].name} ${ultimos[1].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[1].duracion}</text><text class="flujonombre"> ${ultimos[1].size}</text><text class="flujonombreR"> ${ultimos[1].ancho}x${ultimos[1].alto}</text><br>
    <text class="flujonombre">${ultimos[0].name} ${ultimos[0].mod.toString().substring(4, 15)}</text><text class="flujonombreR"> ${ultimos[0].duracion}</text><text class="flujonombre"> ${ultimos[0].size}</text><text class="flujonombreR"> ${ultimos[0].ancho}x${ultimos[0].alto}</text>
    `
}




const hdex1 = document.getElementById("carpeta1")
hdex1.addEventListener("change", () => {

    for(file of hdex1.files){
        archivos1.push(file)
    }

    let info1 = document.getElementById("informe1")
    info1.textContent = archivos1.length

    //archivos1.reverse()


    for(peli of archivos1){
        if(peli.type.includes('video')){
            tablacompleta1.push({
                route: peli.webkitRelativePath,
                tamano: peli.size,
                tipo: peli.type.replace(/\//g, "-"),
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 1,
                momentodecreacion: "<*>",
                ultimamodificacion: peli.lastModifiedDate
            })
        }else{
            tablacompleta1.push({
                route: peli.webkitRelativePath,
                tamano: peli.size,
                tipo: "<*>",
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 0,
                momentodecreacion: "<*>",
                ultimamodificacion: peli.lastModifiedDate
            })
        }
    }

    let bloque1 = document.getElementById("informe1")
    bloque1.className = "informeA"

})

function scanpending1(){

    pendientes1.splice(0, pendientes1.length)
    for(item in tablacompleta1){
        if(tablacompleta1[item].pendiente == 1){
            pendientes1.push(item)
        }
    }

    papadeprueba1()

}

function velocidad1(){

    const contador1 = []
    const contador2 = []
    const contador3 = []
    const contador4 = []
    const contador5 = []
    const contador6 = []
    const contador7 = []
    const contador8 = []
    const contador9 = []

    tablacompleta1.forEach(x => {
        if(new Date() - x.momentodecreacion < 1000){
            contador1.push("xxx")
        }
    })

    tablacompleta2.forEach(x => {
        if(new Date() - x.momentodecreacion < 1000){
            contador2.push("xxx")
        }
    })

    tablacompleta3.forEach(x => {
        if(new Date() - x.momentodecreacion < 1000){
            contador3.push("xxx")
        }
    })

    tablacompleta4.forEach(x => {
        if(new Date() - x.momentodecreacion < 1000){
            contador4.push("xxx")
        }
    })

    tablacompleta5.forEach(x => {
        if(new Date() - x.momentodecreacion < 1000){
            contador5.push("xxx")
        }
    })

    tablacompleta6.forEach(x => {
        if(new Date() - x.momentodecreacion < 1000){
            contador6.push("xxx")
        }
    })

    tablacompleta7.forEach(x => {
        if(new Date() - x.momentodecreacion < 1000){
            contador7.push("xxx")
        }
    })

    tablacompleta8.forEach(x => {
        if(new Date() - x.momentodecreacion < 1000){
            contador8.push("xxx")
        }
    })

    tablacompleta9.forEach(x => {
        if(new Date() - x.momentodecreacion < 1000){
            contador9.push("xxx")
        }
    })

    document.getElementById("medidor1").style.width = `${contador1.length*6}px`
    document.getElementById("medidor2").style.width = `${contador2.length*6}px`
    document.getElementById("medidor3").style.width = `${contador3.length*6}px`
    document.getElementById("medidor4").style.width = `${contador4.length*6}px`
    document.getElementById("medidor5").style.width = `${contador5.length*6}px`
    document.getElementById("medidor6").style.width = `${contador6.length*6}px`
    document.getElementById("medidor7").style.width = `${contador7.length*6}px`
    document.getElementById("medidor8").style.width = `${contador8.length*6}px`
    document.getElementById("medidor9").style.width = `${contador9.length*6}px`

}

function papadeprueba1(){

    if(navegacion1.length > pendientes1.length -1){
        imprimirtodo()
        let bloque1 = document.getElementById("informe1")
        bloque1.className = "informeVl"
    }else{
        chuparmetadatos1(pendientes1[navegacion1.length])
    }

}

function chuparmetadatos1(a){

    let actual1 = document.getElementById("actual1")
    actual1.textContent = `${archivos1[a].name}`
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(archivos1[a]);
    navegacion1.push(1)
    video.onloadedmetadata = function() {
        tablacompleta1[pendientes1[a]].duracion = Math.floor(video.duration)
        tablacompleta1[pendientes1[a]].anchovideo = video.videoWidth
        tablacompleta1[pendientes1[a]].altovideo = video.videoHeight
        tablacompleta1[pendientes1[a]].pendiente = 0
        tablacompleta1[pendientes1[a]].momentodecreacion = new Date()
        let temporal = {
            name: archivos1[a].name,
            size: archivos1[a].size,
            mod: archivos1[a].lastModifiedDate,
            duracion: Math.floor(video.duration),
            ancho: video.videoWidth,
            alto: video.videoHeight,
        }
        URL.revokeObjectURL(a);
        actual1.textContent = ``
        ultimos.push(temporal)
        ultimos.splice(0, 1)
        barradeavance1()
        mostraravance()
        papadeprueba1()
        velocidad1()
        torredecontrol()

    }
}

function barradeavance1(){

    let textoavance1 = document.getElementById("textoavance1")
    textoavance1.textContent = `${(navegacion1.length * 100 / pendientes1.length).toFixed(1)}%`
    var div1 = document.getElementById('bam1');
    div1.style.width = `${(navegacion1.length * 100 / pendientes1.length) * 4}px`

}





const hdex2 = document.getElementById("carpeta2")
hdex2.addEventListener("change", () => {

    for(file of hdex2.files){
        archivos2.push(file)
    }

    let info2 = document.getElementById("informe2")
    info2.textContent = archivos2.length

    //archivos2.reverse()

    for(peli of archivos2){
        if(peli.type.includes('video')){
            tablacompleta2.push({
                route: peli.webkitRelativePath,
                tamano: peli.size,
                tipo: "video",
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 1,
                ultimamodificacion: peli.lastModifiedDate
            })
        }else{
            tablacompleta2.push({
                route: peli.webkitRelativePath,
                tamano: peli.size,
                tipo: "<*>",
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 0,
                ultimamodificacion: peli.lastModifiedDate
            })
        }
    }
    
    let bloque2 = document.getElementById("informe2")
    bloque2.className = "informeA"
    
})

function scanpending2(){
    pendientes2.splice(0, pendientes2.length)
    for(item in tablacompleta2){
        if(tablacompleta2[item].pendiente == 1){
            pendientes2.push(item)
        }
    }
papadeprueba2()
}

function papadeprueba2(){
    if(navegacion2.length > pendientes2.length -1){
        imprimirtodo()
        let bloque1 = document.getElementById("informe2")
        bloque1.className = "informeVl"
    }else{
        chuparmetadatos2(pendientes2[navegacion2.length])
    }
    
}

function chuparmetadatos2(a){
    let actual2 = document.getElementById("actual2")
    actual2.textContent = `${archivos2[a].name}`
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(archivos2[a]);
    navegacion2.push(2)
    video.onloadedmetadata = function() {
        tablacompleta2[pendientes2[a]].duracion = Math.floor(video.duration)
        tablacompleta2[pendientes2[a]].anchovideo = video.videoWidth
        tablacompleta2[pendientes2[a]].altovideo = video.videoHeight
        tablacompleta2[pendientes2[a]].pendiente = 0
        tablacompleta2[pendientes2[a]].momentodecreacion = new Date()
        let temporal = {
            name: archivos2[a].name,
            size: archivos2[a].size,
            mod: archivos2[a].lastModifiedDate,
            duracion: Math.floor(video.duration),
            ancho: video.videoWidth,
            alto: video.videoHeight
        }
        URL.revokeObjectURL(a); 
        actual2.textContent = ``
        ultimos.push(temporal)
        ultimos.splice(0, 1)
        barradeavance2()
        mostraravance()
        papadeprueba2()
        velocidad1()
        torredecontrol()
    }
}

function barradeavance2(){
    let textoavance2 = document.getElementById("textoavance2")
    textoavance2.textContent = `${(navegacion2.length * 100 / pendientes2.length).toFixed(1)}%`
    var div2 = document.getElementById('bam2');
    div2.style.width = `${(navegacion2.length * 100 / pendientes2.length) * 4}px`
}





const hdex3 = document.getElementById("carpeta3")
hdex3.addEventListener("change", () => {

    for(file of hdex3.files){
        archivos3.push(file)
    }

    let info3 = document.getElementById("informe3")
    info3.textContent = archivos3.length

    //archivos3.reverse()

    for(peli of archivos3){
        if(peli.type.includes('video')){
            tablacompleta3.push({
                route: peli.webkitRelativePath,
                tamano: peli.size,
                tipo: "video",
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 1,
                ultimamodificacion: peli.lastModifiedDate
            })
        }else{
            tablacompleta3.push({
                route: peli.webkitRelativePath,
                tamano: peli.size,
                tipo: "<*>",
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 0,
                ultimamodificacion: peli.lastModifiedDate
            })
        }
    }

    let bloque3 = document.getElementById("informe3")
    bloque3.className = "informeA"
    
})

function scanpending3(){
    pendientes3.splice(0, pendientes3.length)
    for(item in tablacompleta3){
        if(tablacompleta3[item].pendiente == 1){
            pendientes3.push(item)
        }
    }
    papadeprueba3()
}

function papadeprueba3(){
    if(navegacion3.length > pendientes3.length -1){
        imprimirtodo()
        let bloque1 = document.getElementById("informe3")
        bloque1.className = "informeVl"
    }else{
        chuparmetadatos3(pendientes3[navegacion3.length])
    }

}

function chuparmetadatos3(a){
    let actual3 = document.getElementById("actual3")
    actual3.textContent = `${archivos3[a].name}`
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(archivos3[a]);
    navegacion3.push(3)
    video.onloadedmetadata = function() {
        tablacompleta3[pendientes3[a]].duracion = Math.floor(video.duration)
        tablacompleta3[pendientes3[a]].anchovideo = video.videoWidth
        tablacompleta3[pendientes3[a]].altovideo = video.videoHeight
        tablacompleta3[pendientes3[a]].pendiente = 0
        tablacompleta3[pendientes3[a]].momentodecreacion = new Date()
        let temporal = {
            name: archivos3[a].name,
            size: archivos3[a].size,
            mod: archivos3[a].lastModifiedDate,
            duracion: Math.floor(video.duration),
            ancho: video.videoWidth,
            alto: video.videoHeight
        }
        URL.revokeObjectURL(a); 
        actual3.textContent = ``
        ultimos.push(temporal)
        ultimos.splice(0, 1)
        barradeavance3()
        mostraravance()
        papadeprueba3()
        velocidad1()
        torredecontrol()

    }
}

function barradeavance3(){
    let textoavance3 = document.getElementById("textoavance3")
    textoavance3.textContent = `${(navegacion3.length * 100 / pendientes3.length).toFixed(1)}%`
    var div3 = document.getElementById('bam3');
    div3.style.width = `${(navegacion3.length * 100 / pendientes3.length) * 4}px`
}





const hdex4 = document.getElementById("carpeta4")
hdex4.addEventListener("change", () => {

    for(file of hdex4.files){
        archivos4.push(file)
    }

    let info4 = document.getElementById("informe4")
    info4.textContent = archivos4.length

    //archivos4.reverse()

    for(peli of archivos4){
        if(peli.type.includes('video')){
            tablacompleta4.push({
                route: peli.webkitRelativePath,
                tamano: peli.size,
                tipo: "video",
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 1,
                ultimamodificacion: peli.lastModifiedDate
            })
        }else{
            tablacompleta4.push({
                route: peli.webkitRelativePath,
                tamano: peli.size,
                tipo: "<*>",
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 0,
                ultimamodificacion: peli.lastModifiedDate
            })
        }
    }

    let bloque4 = document.getElementById("informe4")
    bloque4.className = "informeA"

})

function scanpending4(){
    pendientes4.splice(0, pendientes4.length)
    for(item in tablacompleta4){
        if(tablacompleta4[item].pendiente == 1){
            pendientes4.push(item)
        }
    }
    papadeprueba4()
}

function papadeprueba4(){
    if(navegacion4.length > pendientes4.length -1){
        imprimirtodo()
        let bloque1 = document.getElementById("informe4")
        bloque1.className = "informeVl"
    }else{
        chuparmetadatos4(pendientes4[navegacion4.length])
    }

}

function chuparmetadatos4(a){
    let actual4 = document.getElementById("actual4")
    actual4.textContent = `${archivos4[a].name}`
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(archivos4[a]);
    navegacion4.push(4)
    video.onloadedmetadata = function() {
        tablacompleta4[pendientes4[a]].duracion = Math.floor(video.duration)
        tablacompleta4[pendientes4[a]].anchovideo = video.videoWidth
        tablacompleta4[pendientes4[a]].altovideo = video.videoHeight
        tablacompleta4[pendientes4[a]].pendiente = 0
        tablacompleta4[pendientes4[a]].momentodecreacion = new Date()
        let temporal = {
            name: archivos4[a].name,
            size: archivos4[a].size,
            mod: archivos4[a].lastModifiedDate,
            duracion: Math.floor(video.duration),
            ancho: video.videoWidth,
            alto: video.videoHeight
        }
        URL.revokeObjectURL(a);
        actual4.textContent = ``
        ultimos.push(temporal)
        ultimos.splice(0, 1)
        barradeavance4()
        mostraravance()
        papadeprueba4()
        velocidad1()
        torredecontrol()

    }
}

function barradeavance4(){
    let textoavance4 = document.getElementById("textoavance4")
    textoavance4.textContent = `${(navegacion4.length * 100 / pendientes4.length).toFixed(1)}%`
    var div4 = document.getElementById('bam4');
    div4.style.width = `${(navegacion4.length * 100 / pendientes4.length) * 4}px`
}





const hdex5 = document.getElementById("carpeta5")
hdex5.addEventListener("change", () => {

    for(file of hdex5.files){
        archivos5.push(file)
    }

    let info5 = document.getElementById("informe5")
    info5.textContent = archivos5.length

    //archivos5.reverse()

    for(peli of archivos5){
        if(peli.type.includes('video')){
            tablacompleta5.push({
                route: peli.webkitRelativePath,
                tamano: peli.size,
                tipo: "video",
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 1,
                ultimamodificacion: peli.lastModifiedDate
            })
        }else{
            tablacompleta5.push({
                route: peli.webkitRelativePath,
                tamano: peli.size,
                tipo: "<*>",
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 0,
                ultimamodificacion: peli.lastModifiedDate
            })
        }
    }

    let bloque5 = document.getElementById("informe5")
    bloque5.className = "informeA"
    
})

function scanpending5(){
    pendientes5.splice(0, pendientes5.length)
    for(item in tablacompleta5){
        if(tablacompleta5[item].pendiente == 1){
            pendientes5.push(item)
        }
    }
    papadeprueba5()
}

function papadeprueba5(){
    if(navegacion5.length > pendientes5.length -1){
        imprimirtodo()
        let bloque1 = document.getElementById("informe5")
        bloque1.className = "informeVl"
    }else{
        chuparmetadatos5(pendientes5[navegacion5.length])
    }

}

function chuparmetadatos5(a){
    let actual5 = document.getElementById("actual5")
    actual5.textContent = `${archivos5[a].name}`
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(archivos5[a]);
    navegacion5.push(5)
    video.onloadedmetadata = function() {
        tablacompleta5[pendientes5[a]].duracion = Math.floor(video.duration)
        tablacompleta5[pendientes5[a]].anchovideo = video.videoWidth
        tablacompleta5[pendientes5[a]].altovideo = video.videoHeight
        tablacompleta5[pendientes5[a]].pendiente = 0
        tablacompleta5[pendientes5[a]].momentodecreacion = new Date()
        let temporal = {
            name: archivos5[a].name,
            size: archivos5[a].size,
            mod: archivos5[a].lastModifiedDate,
            duracion: Math.floor(video.duration),
            ancho: video.videoWidth,
            alto: video.videoHeight
        }
        URL.revokeObjectURL(a);
        actual5.textContent = ``
        ultimos.push(temporal)
        ultimos.splice(0, 1)
        barradeavance5()
        mostraravance()
        papadeprueba5()
        velocidad1()
        torredecontrol()

    }
}

function barradeavance5(){
    let textoavance5 = document.getElementById("textoavance5")
    textoavance5.textContent = `${(navegacion5.length * 100 / pendientes5.length).toFixed(1)}%`
    var div5 = document.getElementById('bam5');
    div5.style.width = `${(navegacion5.length * 100 / pendientes5.length) * 4}px`
}






const hdex6 = document.getElementById("carpeta6")
hdex6.addEventListener("change", () => {

    for(file of hdex6.files){
        archivos6.push(file)
    }

    let info6 = document.getElementById("informe6")
    info6.textContent = archivos6.length

    //archivos6.reverse()

    for(peli of archivos6){
        if(peli.type.includes('video')){
            tablacompleta6.push({
                route: peli.webkitRelativePath,
                tamano: peli.size,
                tipo: "video",
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 1,
                ultimamodificacion: peli.lastModifiedDate
            })
        }else{
            tablacompleta6.push({
                route: peli.webkitRelativePath,
                tamano: peli.size,
                tipo: "<*>",
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 0,
                ultimamodificacion: peli.lastModifiedDate
            })
        }
    }

    let bloque6 = document.getElementById("informe6")
    bloque6.className = "informeA"
    
})

function scanpending6(){
    pendientes6.splice(0, pendientes6.length)
    for(item in tablacompleta6){
        if(tablacompleta6[item].pendiente == 1){
            pendientes6.push(item)
        }
    }
    papadeprueba6()
}

function papadeprueba6(){
    if(navegacion6.length > pendientes6.length -1){
        imprimirtodo()
        let bloque1 = document.getElementById("informe6")
        bloque1.className = "informeVl"
    }else{
        chuparmetadatos6(pendientes6[navegacion6.length])
    }

}

function chuparmetadatos6(a){
    let actual6 = document.getElementById("actual6")
    actual6.textContent = `${archivos6[a].name}`
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(archivos6[a]);
    navegacion6.push(6)
    video.onloadedmetadata = function() {
        tablacompleta6[pendientes6[a]].duracion = Math.floor(video.duration)
        tablacompleta6[pendientes6[a]].anchovideo = video.videoWidth
        tablacompleta6[pendientes6[a]].altovideo = video.videoHeight
        tablacompleta6[pendientes6[a]].pendiente = 0
        tablacompleta6[pendientes6[a]].momentodecreacion = new Date()
        let temporal = {
            name: archivos6[a].name,
            size: archivos6[a].size,
            mod: archivos6[a].lastModifiedDate,
            duracion: Math.floor(video.duration),
            ancho: video.videoWidth,
            alto: video.videoHeight
        }
        URL.revokeObjectURL(a); 
        actual6.textContent = ``
        ultimos.push(temporal)
        ultimos.splice(0, 1)
        barradeavance6()
        mostraravance()
        papadeprueba6()
        velocidad1()
        torredecontrol()

    }
}

function barradeavance6(){
    let textoavance6 = document.getElementById("textoavance6")
    textoavance6.textContent = `${(navegacion6.length * 100 / pendientes6.length).toFixed(1)}%`
    var div6 = document.getElementById('bam6');
    div6.style.width = `${(navegacion6.length * 100 / pendientes6.length) * 4}px`
}





const hdex7 = document.getElementById("carpeta7")
hdex7.addEventListener("change", () => {

    for(file of hdex7.files){
        archivos7.push(file)
    }

    let info7 = document.getElementById("informe7")
    info7.textContent = archivos7.length

    //archivos7.reverse()

    for(peli of archivos7){
        if(peli.type.includes('video')){
            tablacompleta7.push({
                route: peli.webkitRelativePath,
                tamano: peli.size,
                tipo: "video",
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 1,
                ultimamodificacion: peli.lastModifiedDate
            })
        }else{
            tablacompleta7.push({
                route: peli.webkitRelativePath,
                tamano: peli.size,
                tipo: "<*>",
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 0,
                ultimamodificacion: peli.lastModifiedDate
            })
        }
    }

    let bloque7 = document.getElementById("informe7")
    bloque7.className = "informeA"
    
})

function scanpending7(){
    pendientes7.splice(0, pendientes7.length)
    for(item in tablacompleta7){
        if(tablacompleta7[item].pendiente == 1){
            pendientes7.push(item)
        }
    }
    papadeprueba7()
}

function papadeprueba7(){
    if(navegacion7.length > pendientes7.length -1){
        imprimirtodo()
        let bloque1 = document.getElementById("informe7")
        bloque1.className = "informeVl"
    }else{
        chuparmetadatos7(pendientes7[navegacion7.length])
    }

}

function chuparmetadatos7(a){
    let actual7 = document.getElementById("actual7")
    actual7.textContent = `${archivos7[a].name}`
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(archivos7[a]);
    navegacion7.push(7)
    video.onloadedmetadata = function() {
        tablacompleta7[pendientes7[a]].duracion = Math.floor(video.duration)
        tablacompleta7[pendientes7[a]].anchovideo = video.videoWidth
        tablacompleta7[pendientes7[a]].altovideo = video.videoHeight
        tablacompleta7[pendientes7[a]].pendiente = 0
        tablacompleta7[pendientes7[a]].momentodecreacion = new Date()
        let temporal = {
            name: archivos7[a].name,
            size: archivos7[a].size,
            mod: archivos7[a].lastModifiedDate,
            duracion: Math.floor(video.duration),
            ancho: video.videoWidth,
            alto: video.videoHeight
        }
        URL.revokeObjectURL(a);
        actual7.textContent = ``
        ultimos.push(temporal)
        ultimos.splice(0, 1)
        barradeavance7()
        mostraravance()
        papadeprueba7()
        velocidad1()
        torredecontrol()
    }
}

function barradeavance7(){
    let textoavance7 = document.getElementById("textoavance7")
    textoavance7.textContent = `${(navegacion7.length * 100 / pendientes7.length).toFixed(1)}%`
    var div7 = document.getElementById('bam7');
    div7.style.width = `${(navegacion7.length * 100 / pendientes7.length) * 4}px`
}





const hdex8 = document.getElementById("carpeta8")
hdex8.addEventListener("change", () => {

    for(file of hdex8.files){
        archivos8.push(file)
    }

    let info8 = document.getElementById("informe8")
    info8.textContent = archivos8.length

    //archivos8.reverse()

    for(peli of archivos8){
        if(peli.type.includes('video')){
            tablacompleta8.push({
                route: peli.webkitRelativePath,
                tamano: peli.size,
                tipo: "video",
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 1,
                ultimamodificacion: peli.lastModifiedDate
            })
        }else{
            tablacompleta8.push({
                route: peli.webkitRelativePath,
                tamano: peli.size,
                tipo: "<*>",
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 0,
                ultimamodificacion: peli.lastModifiedDate
            })
        }
    }

    let bloque8 = document.getElementById("informe8")
    bloque8.className = "informeA"
    
})

function scanpending8(){
    pendientes8.splice(0, pendientes8.length)
    for(item in tablacompleta8){
        if(tablacompleta8[item].pendiente == 1){
            pendientes8.push(item)
        }
    }
    papadeprueba8()
}

function papadeprueba8(){
    if(navegacion8.length > pendientes8.length -1){
        imprimirtodo()
        let bloque1 = document.getElementById("informe8")
        bloque1.className = "informeVl"
    }else{
        chuparmetadatos8(pendientes8[navegacion8.length])
    }

}

function chuparmetadatos8(a){
    let actual8 = document.getElementById("actual8")
    actual8.textContent = `${archivos8[a].name}`
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(archivos8[a]);
    navegacion8.push(8)
    video.onloadedmetadata = function() {
        tablacompleta8[pendientes8[a]].duracion = Math.floor(video.duration)
        tablacompleta8[pendientes8[a]].anchovideo = video.videoWidth
        tablacompleta8[pendientes8[a]].altovideo = video.videoHeight
        tablacompleta8[pendientes8[a]].pendiente = 0
        tablacompleta8[pendientes8[a]].momentodecreacion = new Date()
        let temporal = {
            name: archivos8[a].name,
            size: archivos8[a].size,
            mod: archivos8[a].lastModifiedDate,
            duracion: Math.floor(video.duration),
            ancho: video.videoWidth,
            alto: video.videoHeight
        }
        URL.revokeObjectURL(a); 
        actual8.textContent = ``
        ultimos.push(temporal)
        ultimos.splice(0, 1)
        barradeavance8()
        mostraravance()
        papadeprueba8()
        velocidad1()
        torredecontrol()

    }
}

function barradeavance8(){
    let textoavance8 = document.getElementById("textoavance8")
    textoavance8.textContent = `${(navegacion8.length * 100 / pendientes8.length).toFixed(1)}%`
    var div8 = document.getElementById('bam8');
    div8.style.width = `${(navegacion8.length * 100 / pendientes8.length) * 4}px`
}




document.addEventListener("keydown", (e) => {
    if(e.key === "7"){
        document.addEventListener("keydown", (e) => {
            if(e.key === "8"){
                document.addEventListener("keydown", (e) => {
                    if(e.key === "9"){
                        papusa()
                    }
                })
            }
        })
    }
})

document.addEventListener("keydown", (e) => {
    if(e.key === "4"){
        document.addEventListener("keydown", (e) => {
            if(e.key === "5"){
                document.addEventListener("keydown", (e) => {
                    if(e.key === "6"){
                        imprimirparcial()
                    }
                })
            }
        })
    }
})
