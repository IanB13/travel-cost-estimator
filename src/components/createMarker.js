import hammer from '../resources/hammer.svg'; //need to add credit for SVGs
import worker from '../resources/worker.svg';


const createMarker = (mapState, position, type) => {
    let iconSVG = null;
    let content = null;
    switch(type){
        case 'job':
        iconSVG = hammer;
        content = `<h1> Client Info </h1> ` +
        '<div>will have refrence to what type of quote was used</div>'
        break;
        case 'builder':
        iconSVG = worker;
        content = `<h1> Link to changing quote type </h1> `
        break;
        default: //will throw error for exaustive type checking in ts
    }
    const icon = {
        url: iconSVG,
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
        content
    });

    //adds listner to allow click to open
    clientMarker.addListener('click',  () => {
        clientInfoWindow.open(mapState.map, clientMarker);
    });
}

export default createMarker