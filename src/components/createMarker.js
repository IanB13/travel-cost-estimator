
const createMarker = (mapState, position) => {
    const polyline = new mapState.maps.Marker({
        position,
        map: mapState.map,
    })

    return polyline;
}

export default createMarker