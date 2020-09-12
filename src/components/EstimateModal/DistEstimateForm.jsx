import React from 'react';
import { Form, Button} from 'semantic-ui-react';

const DistEstimateForm = ({activeMenu,setOpen}) =>{

if(activeMenu === 'Trip Distance' || activeMenu === 'Crow Flies Distance'){
return(
    <Form>
    <Form.Field inline>
        <label>Flat Rate</label> <br/>
        Flat rate of £ <input id = "flatGBPDist" /> per mile
    </Form.Field>
    <Form.Field inline>
        <label>Variable Rate </label> <br/>
        Fixed rate of £ <input id = "fixedGBPDist" /> for first <input id = "fixedMilesDist" /> miles <br/>
        Then £ <input id = "varGBPDist" /> per mile thereafter
    </Form.Field>
    <Button type='submit' onClick = {()=> setOpen(false)} >Submit</Button>
    </Form>
)
}
else if(activeMenu === 'Trip Time'){
return(
    <Form>
    <Form.Field inline>
        <label>Flat Rate</label> <br/>
        Flat rate of £ <input id = "flatGBPTime"/> per minute
    </Form.Field>
    <Form.Field inline>
        <label>Variable Rate </label> <br/>
        Fixed rate of £ <input  id = "fixedGBPTime" /> for first <input id = "fixedMilesTime" /> minutes <br/>
        Then £ <input id = "varGBPTime" /> per minute thereafter
    </Form.Field>
    <Button type='submit' onClick = {()=> setOpen(false)} >Submit</Button>
    </Form>
)
}

else{
    return(<div>unknown error</div>)
}

}

export default DistEstimateForm