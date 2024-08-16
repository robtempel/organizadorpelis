const archivos = []
const tablacompleta = []
const pendientes = []
const navegacion = []

let hdex1 = document.getElementById("carpeta1")
hdex1.addEventListener("change", () => {

    for(file of hdex1.files){
        archivos.push(file)
    }

    archivos.reverse()

    for(peli of archivos){
        if(peli.type.includes('video')){
            tablacompleta.push({
                route: peli.webkitRelativePath,
                tamano: peli.size,
                tipo: "video",
                anchovideo: "<*>",
                altovideo: "<*>",
                duracion: "<*>",
                pendiente: 1,
            })
        }else{
            tablacompleta.push({
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

    scanpending()

})



let boton1 = document.getElementById("andale1").addEventListener("click", () => {
    papadeprueba()
})

function papadeprueba(){
    if(navegacion.length > pendientes.length -1){
        scanpending()
        imprimirtodo()
        console.log("terminamos")
    }else{
        actualizar(pendientes[navegacion.length])
        chuparmetadatos(pendientes[navegacion.length])
    }
}

function chuparmetadatos(a){
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(archivos[a]);
    video.onloadedmetadata = function() {
        tablacompleta[pendientes[navegacion.length]].duracion = Math.floor(video.duration)
        tablacompleta[pendientes[navegacion.length]].anchovideo = video.videoWidth
        tablacompleta[pendientes[navegacion.length]].altovideo = video.videoHeight
        tablacompleta[pendientes[navegacion.length]].pendiente = 0
        //console.log((navegacion.length + 1)+ "/" + archivos.length, Math.floor(video.duration), video.videoWidth, video.videoHeight)
        URL.revokeObjectURL(a); 
        actualizar(pendientes[navegacion.length])
        navegacion.push(1)
        barradeavance()
        papadeprueba()

    }
}

function actualizar(a){
    console.log(a)
    let elemento21
    if(a < 21){
        elemento21 = 21
    }else{
        elemento21 = a
    }
    let elemento20 = elemento21 - 1
    let elemento19 = elemento20 - 1
    let elemento18 = elemento19 - 1
    let elemento17 = elemento18 - 1
    let elemento16 = elemento17 - 1
    let elemento15 = elemento16 - 1
    let elemento14 = elemento15 - 1
    let elemento13 = elemento14 - 1
    let elemento12 = elemento13 - 1
    let elemento11 = elemento12 - 1
    let elemento10 = elemento11 - 1
    let elemento9 = elemento10 - 1
    let elemento8 = elemento9 - 1
    let elemento7 = elemento8 - 1
    let elemento6 = elemento7 - 1
    let elemento5 = elemento6 - 1
    let elemento4 = elemento5 - 1
    let elemento3 = elemento4 - 1
    let elemento2 = elemento3 - 1
    let elemento1 = elemento2 - 1
    let elemento0 = elemento1 - 1

    let fragmentoResult = `
    
    <text class="realtime1">${tablacompleta[elemento0].route.split("/")[tablacompleta[elemento0].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento0].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento0].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento0].anchovideo}x${tablacompleta[elemento0].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento0].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento0].tamano * 8) / tablacompleta[elemento0].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento1].route.split("/")[tablacompleta[elemento1].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento1].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento1].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento1].anchovideo}x${tablacompleta[elemento1].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento1].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento1].tamano * 8) / tablacompleta[elemento1].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento2].route.split("/")[tablacompleta[elemento2].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento2].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento2].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento2].anchovideo}x${tablacompleta[elemento2].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento2].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento2].tamano * 8) / tablacompleta[elemento2].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento3].route.split("/")[tablacompleta[elemento3].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento3].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento3].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento3].anchovideo}x${tablacompleta[elemento3].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento3].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento3].tamano * 8) / tablacompleta[elemento3].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento4].route.split("/")[tablacompleta[elemento4].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento4].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento4].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento4].anchovideo}x${tablacompleta[elemento4].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento4].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento4].tamano * 8) / tablacompleta[elemento4].duracion)/1000).toFixed(1)}kb/s</text><br>

    <text class="realtime1">${tablacompleta[elemento5].route.split("/")[tablacompleta[elemento5].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento5].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento5].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento5].anchovideo}x${tablacompleta[elemento5].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento5].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento5].tamano * 8) / tablacompleta[elemento5].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento6].route.split("/")[tablacompleta[elemento6].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento6].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento6].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento6].anchovideo}x${tablacompleta[elemento6].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento6].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento6].tamano * 8) / tablacompleta[elemento6].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento7].route.split("/")[tablacompleta[elemento7].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento7].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento7].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento7].anchovideo}x${tablacompleta[elemento7].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento7].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento7].tamano * 8) / tablacompleta[elemento7].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento8].route.split("/")[tablacompleta[elemento8].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento8].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento8].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento8].anchovideo}x${tablacompleta[elemento8].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento8].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento8].tamano * 8) / tablacompleta[elemento8].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento9].route.split("/")[tablacompleta[elemento9].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento9].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento9].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento9].anchovideo}x${tablacompleta[elemento9].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento9].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento9].tamano * 8) / tablacompleta[elemento9].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento10].route.split("/")[tablacompleta[elemento10].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento10].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento10].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento10].anchovideo}x${tablacompleta[elemento10].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento10].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento10].tamano * 8) / tablacompleta[elemento10].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento11].route.split("/")[tablacompleta[elemento11].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento11].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento11].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento11].anchovideo}x${tablacompleta[elemento11].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento11].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento11].tamano * 8) / tablacompleta[elemento11].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento12].route.split("/")[tablacompleta[elemento12].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento12].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento12].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento12].anchovideo}x${tablacompleta[elemento12].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento12].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento12].tamano * 8) / tablacompleta[elemento12].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento13].route.split("/")[tablacompleta[elemento13].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento13].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento13].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento13].anchovideo}x${tablacompleta[elemento13].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento13].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento13].tamano * 8) / tablacompleta[elemento13].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento14].route.split("/")[tablacompleta[elemento14].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento14].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento14].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento14].anchovideo}x${tablacompleta[elemento14].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento14].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento14].tamano * 8) / tablacompleta[elemento14].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento15].route.split("/")[tablacompleta[elemento15].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento15].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento15].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento15].anchovideo}x${tablacompleta[elemento15].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento15].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento15].tamano * 8) / tablacompleta[elemento15].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento16].route.split("/")[tablacompleta[elemento16].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento16].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento16].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento16].anchovideo}x${tablacompleta[elemento16].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento16].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento16].tamano * 8) / tablacompleta[elemento16].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento17].route.split("/")[tablacompleta[elemento17].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento17].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento17].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento17].anchovideo}x${tablacompleta[elemento17].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento17].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento17].tamano * 8) / tablacompleta[elemento17].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento18].route.split("/")[tablacompleta[elemento18].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento18].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento18].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento18].anchovideo}x${tablacompleta[elemento18].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento18].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento18].tamano * 8) / tablacompleta[elemento18].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento19].route.split("/")[tablacompleta[elemento19].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento19].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento19].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento19].anchovideo}x${tablacompleta[elemento19].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento19].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento19].tamano * 8) / tablacompleta[elemento19].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento20].route.split("/")[tablacompleta[elemento20].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento20].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento20].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento20].anchovideo}x${tablacompleta[elemento20].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento20].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento20].tamano * 8) / tablacompleta[elemento20].duracion)/1000).toFixed(1)}kb/s</text><br>
    
    <text class="realtime1">${tablacompleta[elemento21].route.split("/")[tablacompleta[elemento21].route.split("/").length - 1]}</text>
    <text class="realtime2">tipo de archivo: ${tablacompleta[elemento21].tipo}</text>
    <text class="realtime3">${Math.floor(tablacompleta[elemento21].tamano / 1000000)}Mb</text>
    <text class="realtime4">${tablacompleta[elemento21].anchovideo}x${tablacompleta[elemento21].altovideo}</text>
    <text class="realtime5">${Math.floor(tablacompleta[elemento21].duracion/60)}min.</text>
    <text class="realtime6">bitrate ${(((tablacompleta[elemento21].tamano * 8) / tablacompleta[elemento21].duracion)/1000).toFixed(1)}kb/s</text><br>
    `

    let informetiemporeal = document.getElementById("current")
    informetiemporeal.innerHTML = fragmentoResult

}

function barradeavance(){
    let textoavance = document.getElementById("textoavance")
    textoavance.textContent = `${(navegacion.length * 100 / pendientes.length).toFixed(1)}%`
    let informe1 = (navegacion.length)+ "/" + archivos.length
    let elementoinfo1 = document.getElementById("informe1")
    elementoinfo1.textContent = informe1
    var div = document.getElementById('bam');
    div.style.width = `${(navegacion.length * 100 / pendientes.length) * 4}px`
}

function scanpending(){
    pendientes.splice(0, pendientes.length)
    for(item in tablacompleta){
        if(tablacompleta[item].pendiente == 1){
            pendientes.push(item)
        }
    }
    let elementoinfo2 = document.getElementById("informe2")
    elementoinfo2.textContent = "Remain " + pendientes.length
}

let botonimpresora = document.getElementById("imprimir").addEventListener("click", () => {
    imprimirtodo()
})

function imprimirtodo(){
    let fragmentoResult = ''
    tablacompleta.forEach(item => {
        fragmentoResult += `<text class="complete">${item.route}/${item.tamano}/${item.tipo}/${item.anchovideo}/${item.altovideo}/${item.duracion}</text><br>`
    })

    let contenedorresultado = document.getElementById("show")

    contenedorresultado.innerHTML = ``;
    contenedorresultado.innerHTML = fragmentoResult
}



