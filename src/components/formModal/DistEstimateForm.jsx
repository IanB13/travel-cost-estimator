import React from 'react';
import { Checkbox, Form, Button} from 'semantic-ui-react';

const DistEstimateForm = ({activeMenu}) =>{

if(activeMenu === 'Trip Distance'){
return(
    <Form>
    <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
    </Form>
)
}
else if(activeMenu === 'Trip Time'){
    return(<div>trip time</div>)

}
else if(activeMenu === 'Crow Flies Distance'){
    return(<div>Crow Flies Distance</div>)
}
else{
    return(<div>unknown error</div>)
}

}

export default DistEstimateForm