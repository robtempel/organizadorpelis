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

let especimen = {
    name: "Lionel.Messi.Destiny.2023.1080p.mkv",
    size: 2078572448,
    mod: "Sat Jul 15 2023 16:44:43 GMT-0300 (hora estándar de Argentina)",
    duracion: 7459,
    ancho: 1920,
    alto: 1072,
}

const ultimos = []

ultimos.push(especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen, especimen)


function imprimirtodo(){

    if(navegacion1.length == pendientes1.length && navegacion2.length == pendientes2.length && navegacion3.length == pendientes3.length && navegacion4.length == pendientes4.length && navegacion5.length == pendientes5.length && navegacion6.length == pendientes6.length && navegacion7.length == pendientes7.length && navegacion8.length == pendientes8.length){
        
        const tuti = tablacompleta1.concat(tablacompleta2, tablacompleta3, tablacompleta4, tablacompleta5, tablacompleta6, tablacompleta7, tablacompleta8)

        console.log(tuti.length)

        let fragmentoResult = ''

        tuti.forEach(item => {
            fragmentoResult += `<text class="complete">${item.route}/${item.tamano}/${item.tipo}/${item.anchovideo}/${item.altovideo}/${item.duracion}</text><br>`
        })
    
        let contenedorresultado = document.getElementById("show")
    
        contenedorresultado.innerHTML = ``;
        contenedorresultado.innerHTML = fragmentoResult
    }

}

function mostraravance(){
    let flujo = document.getElementById("flujo")
    flujo.innerHTML = `
    <text class="flujonombre">${ultimos[3].name}</text><text class="flujomod">${ultimos[3].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[3].duracion}</text><text class="flujosize">${ultimos[3].size}</text><text class="flujodim">${ultimos[3].ancho}x${ultimos[3].alto}</text><br>
    <text class="flujonombre">${ultimos[4].name}</text><text class="flujomod">${ultimos[4].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[4].duracion}</text><text class="flujosize">${ultimos[4].size}</text><text class="flujodim">${ultimos[4].ancho}x${ultimos[4].alto}</text><br>
    <text class="flujonombre">${ultimos[5].name}</text><text class="flujomod">${ultimos[5].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[5].duracion}</text><text class="flujosize">${ultimos[5].size}</text><text class="flujodim">${ultimos[5].ancho}x${ultimos[5].alto}</text><br>
    <text class="flujonombre">${ultimos[6].name}</text><text class="flujomod">${ultimos[6].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[6].duracion}</text><text class="flujosize">${ultimos[6].size}</text><text class="flujodim">${ultimos[6].ancho}x${ultimos[6].alto}</text><br>
    <text class="flujonombre">${ultimos[7].name}</text><text class="flujomod">${ultimos[7].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[7].duracion}</text><text class="flujosize">${ultimos[7].size}</text><text class="flujodim">${ultimos[7].ancho}x${ultimos[7].alto}</text><br>
    <text class="flujonombre">${ultimos[8].name}</text><text class="flujomod">${ultimos[8].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[8].duracion}</text><text class="flujosize">${ultimos[8].size}</text><text class="flujodim">${ultimos[8].ancho}x${ultimos[8].alto}</text><br>
    <text class="flujonombre">${ultimos[9].name}</text><text class="flujomod">${ultimos[9].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[9].duracion}</text><text class="flujosize">${ultimos[9].size}</text><text class="flujodim">${ultimos[9].ancho}x${ultimos[9].alto}</text><br>
    <text class="flujonombre">${ultimos[10].name}</text><text class="flujomod">${ultimos[10].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[10].duracion}</text><text class="flujosize">${ultimos[10].size}</text><text class="flujodim">${ultimos[10].ancho}x${ultimos[10].alto}</text><br>
    <text class="flujonombre">${ultimos[11].name}</text><text class="flujomod">${ultimos[11].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[11].duracion}</text><text class="flujosize">${ultimos[11].size}</text><text class="flujodim">${ultimos[11].ancho}x${ultimos[11].alto}</text><br>
    <text class="flujonombre">${ultimos[12].name}</text><text class="flujomod">${ultimos[12].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[12].duracion}</text><text class="flujosize">${ultimos[12].size}</text><text class="flujodim">${ultimos[12].ancho}x${ultimos[12].alto}</text><br>
    <text class="flujonombre">${ultimos[13].name}</text><text class="flujomod">${ultimos[13].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[13].duracion}</text><text class="flujosize">${ultimos[13].size}</text><text class="flujodim">${ultimos[13].ancho}x${ultimos[13].alto}</text><br>
    <text class="flujonombre">${ultimos[14].name}</text><text class="flujomod">${ultimos[14].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[14].duracion}</text><text class="flujosize">${ultimos[14].size}</text><text class="flujodim">${ultimos[14].ancho}x${ultimos[14].alto}</text><br>
    <text class="flujonombre">${ultimos[15].name}</text><text class="flujomod">${ultimos[15].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[15].duracion}</text><text class="flujosize">${ultimos[15].size}</text><text class="flujodim">${ultimos[15].ancho}x${ultimos[15].alto}</text><br>
    <text class="flujonombre">${ultimos[16].name}</text><text class="flujomod">${ultimos[16].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[16].duracion}</text><text class="flujosize">${ultimos[16].size}</text><text class="flujodim">${ultimos[16].ancho}x${ultimos[16].alto}</text><br>
    <text class="flujonombre">${ultimos[17].name}</text><text class="flujomod">${ultimos[17].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[17].duracion}</text><text class="flujosize">${ultimos[17].size}</text><text class="flujodim">${ultimos[17].ancho}x${ultimos[17].alto}</text><br>
    <text class="flujonombre">${ultimos[18].name}</text><text class="flujomod">${ultimos[18].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[18].duracion}</text><text class="flujosize">${ultimos[18].size}</text><text class="flujodim">${ultimos[18].ancho}x${ultimos[18].alto}</text><br>
    <text class="flujonombre">${ultimos[19].name}</text><text class="flujomod">${ultimos[19].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[19].duracion}</text><text class="flujosize">${ultimos[19].size}</text><text class="flujodim">${ultimos[19].ancho}x${ultimos[19].alto}</text><br>
    <text class="flujonombre">${ultimos[20].name}</text><text class="flujomod">${ultimos[20].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[20].duracion}</text><text class="flujosize">${ultimos[20].size}</text><text class="flujodim">${ultimos[20].ancho}x${ultimos[20].alto}</text><br>
    <text class="flujonombre">${ultimos[21].name}</text><text class="flujomod">${ultimos[21].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[21].duracion}</text><text class="flujosize">${ultimos[21].size}</text><text class="flujodim">${ultimos[21].ancho}x${ultimos[21].alto}</text><br>
    <text class="flujonombre">${ultimos[22].name}</text><text class="flujomod">${ultimos[22].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[22].duracion}</text><text class="flujosize">${ultimos[22].size}</text><text class="flujodim">${ultimos[22].ancho}x${ultimos[22].alto}</text><br>
    <text class="flujonombre">${ultimos[23].name}</text><text class="flujomod">${ultimos[23].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[23].duracion}</text><text class="flujosize">${ultimos[23].size}</text><text class="flujodim">${ultimos[23].ancho}x${ultimos[23].alto}</text><br>
    <text class="flujonombre">${ultimos[24].name}</text><text class="flujomod">${ultimos[24].mod.toString().substring(4, 15)}</text><text class="flujodur">${ultimos[24].duracion}</text><text class="flujosize">${ultimos[24].size}</text><text class="flujodim">${ultimos[24].ancho}x${ultimos[24].alto}</text>
    `
}

let hdex1 = document.getElementById("carpeta1")
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
                tipo: "video",
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 1,
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
            })
        }
    }

    scanpending1()
    papadeprueba1()

    let bloque1 = document.getElementById("bloque1")
    bloque1.className = "bloqueV"

})

function scanpending1(){
    pendientes1.splice(0, pendientes1.length)
    for(item in tablacompleta1){
        if(tablacompleta1[item].pendiente == 1){
            pendientes1.push(item)
        }
    }

}

function papadeprueba1(){
    if(navegacion1.length > pendientes1.length -1){
        imprimirtodo()
    }else{
        chuparmetadatos1(pendientes1[navegacion1.length])
    }
}

function chuparmetadatos1(a){
    let actual1 = document.getElementById("actual1")
    actual1.textContent = `Disco 1 ${archivos1[a].name}`
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(archivos1[a]);
    video.onloadedmetadata = function() {
        tablacompleta1[pendientes1[navegacion1.length]].duracion = Math.floor(video.duration)
        tablacompleta1[pendientes1[navegacion1.length]].anchovideo = video.videoWidth
        tablacompleta1[pendientes1[navegacion1.length]].altovideo = video.videoHeight
        tablacompleta1[pendientes1[navegacion1.length]].pendiente = 0
        let temporal = {
            name: archivos1[a].name,
            size: archivos1[a].size,
            mod: archivos1[a].lastModifiedDate,
            duracion: Math.floor(video.duration),
            ancho: video.videoWidth,
            alto: video.videoHeight
        }
        URL.revokeObjectURL(a); 
        actual1.textContent = `Disco 1`
        ultimos.push(temporal)
        ultimos.splice(0, 1)
        navegacion1.push(1)
        barradeavance1()
        mostraravance()
        papadeprueba1()

    }
}

function barradeavance1(){
    let textoavance1 = document.getElementById("textoavance1")
    textoavance1.textContent = `${(navegacion1.length * 100 / pendientes1.length).toFixed(1)}%`
    var div1 = document.getElementById('bam1');
    div1.style.width = `${(navegacion1.length * 100 / pendientes1.length) * 4}px`
}





let hdex2 = document.getElementById("carpeta2")
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
            })
        }
    }
    
    scanpending2()
    papadeprueba2()
    
    let bloque2 = document.getElementById("bloque2")
    bloque2.className = "bloqueV"

})

function scanpending2(){
    pendientes2.splice(0, pendientes2.length)
    for(item in tablacompleta2){
        if(tablacompleta2[item].pendiente == 1){
            pendientes2.push(item)
        }
    }

}

function papadeprueba2(){
    if(navegacion2.length > pendientes2.length -1){
        imprimirtodo()
    }else{
        chuparmetadatos2(pendientes2[navegacion2.length])
    }
}

function chuparmetadatos2(a){
    let actual2 = document.getElementById("actual2")
    actual2.textContent = `Disco 2 ${archivos2[a].name}`
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(archivos2[a]);
    video.onloadedmetadata = function() {
        tablacompleta2[pendientes2[navegacion2.length]].duracion = Math.floor(video.duration)
        tablacompleta2[pendientes2[navegacion2.length]].anchovideo = video.videoWidth
        tablacompleta2[pendientes2[navegacion2.length]].altovideo = video.videoHeight
        tablacompleta2[pendientes2[navegacion2.length]].pendiente = 0
        let temporal = {
            name: archivos2[a].name,
            size: archivos2[a].size,
            mod: archivos2[a].lastModifiedDate,
            duracion: Math.floor(video.duration),
            ancho: video.videoWidth,
            alto: video.videoHeight
        }
        URL.revokeObjectURL(a); 
        actual2.textContent = `Disco 2`
        ultimos.push(temporal)
        ultimos.splice(0, 1)
        navegacion2.push(2)
        barradeavance2()
        mostraravance()
        papadeprueba2()

    }
}

function barradeavance2(){
    let textoavance2 = document.getElementById("textoavance2")
    textoavance2.textContent = `${(navegacion2.length * 100 / pendientes2.length).toFixed(1)}%`
    var div2 = document.getElementById('bam2');
    div2.style.width = `${(navegacion2.length * 100 / pendientes2.length) * 4}px`
}




let hdex3 = document.getElementById("carpeta3")
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
            })
        }
    }

    scanpending3()
    papadeprueba3()

    let bloque3 = document.getElementById("bloque3")
    bloque3.className = "bloqueV"

})

function scanpending3(){
    pendientes3.splice(0, pendientes3.length)
    for(item in tablacompleta3){
        if(tablacompleta3[item].pendiente == 1){
            pendientes3.push(item)
        }
    }

}

function papadeprueba3(){
    if(navegacion3.length > pendientes3.length -1){
        imprimirtodo()
    }else{
        chuparmetadatos3(pendientes3[navegacion3.length])
    }
}

function chuparmetadatos3(a){
    let actual3 = document.getElementById("actual3")
    actual3.textContent = `Disco 3 ${archivos3[a].name}`
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(archivos3[a]);
    video.onloadedmetadata = function() {
        tablacompleta3[pendientes3[navegacion3.length]].duracion = Math.floor(video.duration)
        tablacompleta3[pendientes3[navegacion3.length]].anchovideo = video.videoWidth
        tablacompleta3[pendientes3[navegacion3.length]].altovideo = video.videoHeight
        tablacompleta3[pendientes3[navegacion3.length]].pendiente = 0
        let temporal = {
            name: archivos3[a].name,
            size: archivos3[a].size,
            mod: archivos3[a].lastModifiedDate,
            duracion: Math.floor(video.duration),
            ancho: video.videoWidth,
            alto: video.videoHeight
        }
        URL.revokeObjectURL(a); 
        actual3.textContent = `Disco 3`
        ultimos.push(temporal)
        ultimos.splice(0, 1)
        navegacion3.push(3)
        barradeavance3()
        mostraravance()
        papadeprueba3()

    }
}

function barradeavance3(){
    let textoavance3 = document.getElementById("textoavance3")
    textoavance3.textContent = `${(navegacion3.length * 100 / pendientes3.length).toFixed(1)}%`
    var div3 = document.getElementById('bam3');
    div3.style.width = `${(navegacion3.length * 100 / pendientes3.length) * 4}px`
}




let hdex4 = document.getElementById("carpeta4")
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
            })
        }
    }

    let bloque4 = document.getElementById("bloque4")
    bloque4.className = "bloqueV"

    scanpending4()
    papadeprueba4()

})

function scanpending4(){
    pendientes4.splice(0, pendientes4.length)
    for(item in tablacompleta4){
        if(tablacompleta4[item].pendiente == 1){
            pendientes4.push(item)
        }
    }

}

function papadeprueba4(){
    if(navegacion4.length > pendientes4.length -1){
        imprimirtodo()
    }else{
        chuparmetadatos4(pendientes4[navegacion4.length])
    }
}

function chuparmetadatos4(a){
    let actual4 = document.getElementById("actual4")
    actual4.textContent = `Disco 4 ${archivos4[a].name}`
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(archivos4[a]);
    video.onloadedmetadata = function() {
        tablacompleta4[pendientes4[navegacion4.length]].duracion = Math.floor(video.duration)
        tablacompleta4[pendientes4[navegacion4.length]].anchovideo = video.videoWidth
        tablacompleta4[pendientes4[navegacion4.length]].altovideo = video.videoHeight
        tablacompleta4[pendientes4[navegacion4.length]].pendiente = 0
        let temporal = {
            name: archivos4[a].name,
            size: archivos4[a].size,
            mod: archivos4[a].lastModifiedDate,
            duracion: Math.floor(video.duration),
            ancho: video.videoWidth,
            alto: video.videoHeight
        }
        URL.revokeObjectURL(a);
        actual4.textContent = `Disco 4`
        ultimos.push(temporal)
        ultimos.splice(0, 1)
        navegacion4.push(4)
        barradeavance4()
        mostraravance()
        papadeprueba4()

    }
}

function barradeavance4(){
    let textoavance4 = document.getElementById("textoavance4")
    textoavance4.textContent = `${(navegacion4.length * 100 / pendientes4.length).toFixed(1)}%`
    var div4 = document.getElementById('bam4');
    div4.style.width = `${(navegacion4.length * 100 / pendientes4.length) * 4}px`
}




let hdex5 = document.getElementById("carpeta5")
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
            })
        }
    }

    
    scanpending5()
    papadeprueba5()

    let bloque5 = document.getElementById("bloque5")
    bloque5.className = "bloqueV"

})

function scanpending5(){
    pendientes5.splice(0, pendientes5.length)
    for(item in tablacompleta5){
        if(tablacompleta5[item].pendiente == 1){
            pendientes5.push(item)
        }
    }

}

function papadeprueba5(){
    if(navegacion5.length > pendientes5.length -1){
        imprimirtodo()
    }else{
        chuparmetadatos5(pendientes5[navegacion5.length])
    }
}

function chuparmetadatos5(a){
    let actual5 = document.getElementById("actual5")
    actual5.textContent = `Disco 5 ${archivos5[a].name}`
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(archivos5[a]);
    video.onloadedmetadata = function() {
        tablacompleta5[pendientes5[navegacion5.length]].duracion = Math.floor(video.duration)
        tablacompleta5[pendientes5[navegacion5.length]].anchovideo = video.videoWidth
        tablacompleta5[pendientes5[navegacion5.length]].altovideo = video.videoHeight
        tablacompleta5[pendientes5[navegacion5.length]].pendiente = 0
        let temporal = {
            name: archivos5[a].name,
            size: archivos5[a].size,
            mod: archivos5[a].lastModifiedDate,
            duracion: Math.floor(video.duration),
            ancho: video.videoWidth,
            alto: video.videoHeight
        }
        URL.revokeObjectURL(a);
        actual5.textContent = `Disco 5`
        ultimos.push(temporal)
        ultimos.splice(0, 1)
        navegacion5.push(5)
        barradeavance5()
        mostraravance()
        papadeprueba5()

    }
}

function barradeavance5(){
    let textoavance5 = document.getElementById("textoavance5")
    textoavance5.textContent = `${(navegacion5.length * 100 / pendientes5.length).toFixed(1)}%`
    var div5 = document.getElementById('bam5');
    div5.style.width = `${(navegacion5.length * 100 / pendientes5.length) * 4}px`
}





let hdex6 = document.getElementById("carpeta6")
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
            })
        }
    }

    
    scanpending6()
    papadeprueba6()

    let bloque6 = document.getElementById("bloque6")
    bloque6.className = "bloqueV"

})

function scanpending6(){
    pendientes6.splice(0, pendientes6.length)
    for(item in tablacompleta6){
        if(tablacompleta6[item].pendiente == 1){
            pendientes6.push(item)
        }
    }

}

function papadeprueba6(){
    if(navegacion6.length > pendientes6.length -1){
        imprimirtodo()
    }else{
        chuparmetadatos6(pendientes6[navegacion6.length])
    }
}

function chuparmetadatos6(a){
    let actual6 = document.getElementById("actual6")
    actual6.textContent = `Disco 6 ${archivos6[a].name}`
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(archivos6[a]);
    video.onloadedmetadata = function() {
        tablacompleta6[pendientes6[navegacion6.length]].duracion = Math.floor(video.duration)
        tablacompleta6[pendientes6[navegacion6.length]].anchovideo = video.videoWidth
        tablacompleta6[pendientes6[navegacion6.length]].altovideo = video.videoHeight
        tablacompleta6[pendientes6[navegacion6.length]].pendiente = 0
        let temporal = {
            name: archivos6[a].name,
            size: archivos6[a].size,
            mod: archivos6[a].lastModifiedDate,
            duracion: Math.floor(video.duration),
            ancho: video.videoWidth,
            alto: video.videoHeight
        }
        URL.revokeObjectURL(a); 
        actual6.textContent = `Disco 6`
        ultimos.push(temporal)
        ultimos.splice(0, 1)
        navegacion6.push(6)
        barradeavance6()
        mostraravance()
        papadeprueba6()

    }
}

function barradeavance6(){
    let textoavance6 = document.getElementById("textoavance6")
    textoavance6.textContent = `${(navegacion6.length * 100 / pendientes6.length).toFixed(1)}%`
    var div6 = document.getElementById('bam6');
    div6.style.width = `${(navegacion6.length * 100 / pendientes6.length) * 4}px`
}




let hdex7 = document.getElementById("carpeta7")
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
            })
        }
    }

    
    scanpending7()
    papadeprueba7()

    let bloque7 = document.getElementById("bloque7")
    bloque7.className = "bloqueV"

})

function scanpending7(){
    pendientes7.splice(0, pendientes7.length)
    for(item in tablacompleta7){
        if(tablacompleta7[item].pendiente == 1){
            pendientes7.push(item)
        }
    }

}

function papadeprueba7(){
    if(navegacion7.length > pendientes7.length -1){
        imprimirtodo()
    }else{
        chuparmetadatos7(pendientes7[navegacion7.length])
    }
}

function chuparmetadatos7(a){
    let actual7 = document.getElementById("actual7")
    actual7.textContent = `Disco 7 ${archivos7[a].name}`
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(archivos7[a]);
    video.onloadedmetadata = function() {
        tablacompleta7[pendientes7[navegacion7.length]].duracion = Math.floor(video.duration)
        tablacompleta7[pendientes7[navegacion7.length]].anchovideo = video.videoWidth
        tablacompleta7[pendientes7[navegacion7.length]].altovideo = video.videoHeight
        tablacompleta7[pendientes7[navegacion7.length]].pendiente = 0
        let temporal = {
            name: archivos7[a].name,
            size: archivos7[a].size,
            mod: archivos7[a].lastModifiedDate,
            duracion: Math.floor(video.duration),
            ancho: video.videoWidth,
            alto: video.videoHeight
        }
        URL.revokeObjectURL(a);
        actual7.textContent = `Disco 7`
        ultimos.push(temporal)
        ultimos.splice(0, 1)
        navegacion7.push(7)
        barradeavance7()
        mostraravance()
        papadeprueba7()

    }
}

function barradeavance7(){
    let textoavance7 = document.getElementById("textoavance7")
    textoavance7.textContent = `${(navegacion7.length * 100 / pendientes7.length).toFixed(1)}%`
    var div7 = document.getElementById('bam7');
    div7.style.width = `${(navegacion7.length * 100 / pendientes7.length) * 4}px`
}




let hdex8 = document.getElementById("carpeta8")
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
            })
        }
    }

    
    scanpending8()
    papadeprueba8()

    let bloque8 = document.getElementById("bloque8")
    bloque8.className = "bloqueV"

})

function scanpending8(){
    pendientes8.splice(0, pendientes8.length)
    for(item in tablacompleta8){
        if(tablacompleta8[item].pendiente == 1){
            pendientes8.push(item)
        }
    }

}

function papadeprueba8(){
    if(navegacion8.length > pendientes8.length -1){
        imprimirtodo()
    }else{
        chuparmetadatos8(pendientes8[navegacion8.length])
    }
}

function chuparmetadatos8(a){
    let actual8 = document.getElementById("actual8")
    actual8.textContent = `Disco 8 ${archivos8[a].name}`
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(archivos8[a]);
    video.onloadedmetadata = function() {
        tablacompleta8[pendientes8[navegacion8.length]].duracion = Math.floor(video.duration)
        tablacompleta8[pendientes8[navegacion8.length]].anchovideo = video.videoWidth
        tablacompleta8[pendientes8[navegacion8.length]].altovideo = video.videoHeight
        tablacompleta8[pendientes8[navegacion8.length]].pendiente = 0
        let temporal = {
            name: archivos8[a].name,
            size: archivos8[a].size,
            mod: archivos8[a].lastModifiedDate,
            duracion: Math.floor(video.duration),
            ancho: video.videoWidth,
            alto: video.videoHeight
        }
        URL.revokeObjectURL(a); 
        actual8.textContent = `Disco 8`
        ultimos.push(temporal)
        ultimos.splice(0, 1)
        navegacion8.push(8)
        barradeavance8()
        mostraravance()
        papadeprueba8()

    }
}

function barradeavance8(){
    let textoavance8 = document.getElementById("textoavance8")
    textoavance8.textContent = `${(navegacion8.length * 100 / pendientes8.length).toFixed(1)}%`
    var div8 = document.getElementById('bam8');
    div8.style.width = `${(navegacion8.length * 100 / pendientes8.length) * 4}px`
}




