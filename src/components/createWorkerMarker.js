import worker from '../worker.svg'

const createWorkerMarker = (mapState, position) => {
    const icon = {
        url: worker,
        scaledSize: new mapState.maps.Size(25, 25), // scaled size
        origin: new mapState.maps.Point(0, 0), // origin
        anchor: new mapState.maps.Point(25/2, 25/2) // anchor
      };

    const clientMarker = new mapState.maps.Marker({
        position,
        map: mapState.map, 
        icon
  });

    const clientInfoWindow = new mapState.maps.InfoWindow({
        content: `<h1> ${4} </h1> ` +
            `<img src =${5} width ="200">` +
            `<p> ${12} </p>` //Html string that pops up in info window
    });

    //adds listner to allow click to open
    clientMarker.addListener('click',  () => {
        clientInfoWindow.open(mapState.map, clientMarker);
    });
}

export default createWorkerMarker;