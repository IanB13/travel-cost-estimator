import React from 'react';
import { Form, Button} from 'semantic-ui-react';

const DistEstimateForm = ({activeMenu}) =>{

if(activeMenu === 'Trip Distance' || activeMenu === 'Crow Flies Distance'){
return(
    <Form>
    <Form.Field inline>
        <label>Flat Rate</label> <br/>
        Flat rate of £ <input /> per mile
    </Form.Field>
    <Form.Field inline>
        <label>Variable Rate </label> <br/>
        Flat rate of £ <input /> for first <input /> miles <br/>
        Then £ <input /> per mile thereafter
    </Form.Field>
    <Button type='submit'>Submit</Button>
    </Form>
)
}
else if(activeMenu === 'Trip Time'){
return(
    <Form>
    <Form.Field inline>
        <label>Flat Rate</label> <br/>
        Flat rate of £ <input /> per minute
    </Form.Field>
    <Form.Field inline>
        <label>Variable Rate </label> <br/>
        Flat rate of £ <input /> for first <input /> minutes <br/>
        Then £ <input /> per minute thereafter
    </Form.Field>
    <Button type='submit'>Submit</Button>
    </Form>
)
}

else{
    return(<div>unknown error</div>)
}

}

export default DistEstimateForm