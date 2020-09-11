//function to generate random gps location in London
const randLocLond = () => {
    const lat = 51.299321 + Math.random() * .380936;
    const lng = -0.461063 + Math.random() * .602621;
    return { lat, lng }
}

//haversineDist
//function that gets distance between two points on globe
//from: http://www.movable-type.co.uk/scripts/latlong.html

const haversineDist = (coordinates1, coordinates2) => {
    const lon1 = coordinates1[0], lat1 = coordinates1[1]
    const lon2 = coordinates2[0], lat2 = coordinates2[1]
    const R = 6371e3; // radius of the earth in meters 
    const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres
    return d
}


export default { randLocLond , haversineDist}