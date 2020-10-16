const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-23.1925532,-47.341066], 15);

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68], 
})


//create and add map
L
.marker([-23.1925532,-47.341066], { icon })
.addTo(map)

/* image gallery */
function selectImage(event){
    const button = event.currentTarget;

    //remova todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((removeActveClass) => {})

    function removeActveClass(button) {
        button.classList.Remove("active");
    }


    //selecionar  imagem selecionadas
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //aualizar o container de imagem
    imageContainer.src = image.src;

    //adicionar de novo as classes
    button.classList.add('active')
}

