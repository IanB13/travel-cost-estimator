
const createMarker = (mapState, position, type) => {
    const polyline = new mapState.maps.Marker({
        position,
        map: mapState.map,
    })

    return polyline;
}

export default createMarker