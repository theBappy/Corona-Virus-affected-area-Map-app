function updateMap(){
    fetch('/data.json')
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp.data)
        rsp.data.forEach(element =>{
            latitude = element.latitude;
            longitude = element.longitude;

            // cases = element.infected;
            // if(case>255) {
            //     color = "rgb(255,0,0)";
            // }
            // else{
            //     color = `rbg(${cases},0,0)`;
            // }

            // Mark on the map
            new mapboxgl.Marker({
                color: color,
                draggable : true
            })
            .setLngLat([longitude,latitude])
            .addTo(map);
        })

    })
}

updateMap();