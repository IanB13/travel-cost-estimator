    //function to generate random gps location in London
    const randLocLond = () => {
        const lat = 51.299321 + Math.random() * .380936;
        const lng = -0.461063 + Math.random() * .602621;
        return { lat, lng }
      }

export default { randLocLond }