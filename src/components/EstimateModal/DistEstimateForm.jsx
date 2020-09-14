import React,{useState} from 'react';
import { Form, Button} from 'semantic-ui-react';
import { useDispatch} from 'react-redux';
import {changeEstimate} from '../../reducers/actions'

//TODO: Finish form controls
const DistEstimateForm = ({activeMenu,setOpen}) =>{
    const dispatch = useDispatch();
    const [estimate, setEstimate] = useState(null)

    //Estimate change dispatch to state
    const estimateSubmit = (event) =>{
        event.preventDefault()
        setOpen(false) //closes modal
        dispatch(changeEstimate(estimate))
    }

    //custom hook
    const useField = (type) => {
        const [value, setValue] = useState('')
      
        const onChange = (event) => {
          setValue(event.target.value)
        }

        return {
          type,
          value,
          onChange
        }
      }


      //Flat rates
      const flatGBPDist = useField('number')
      const flatGBPTime = useField('number')
      const flatGBPCrow = useField('number')
      //Variable rates
      const fixedGBPDist = useField('number')
      const fixedGBPTime = useField('number')
      const fixedGBPCrow = useField('number')
      const fixedMilesDist = useField('number')
      const fixedMilesTime = useField('number')
      const fixedMilesCrow = useField('number')
      const varGBPDist = useField('number')
      const varGBPTime = useField('number')
      const varGBPCrow = useField('number')

      //CheckBox State



if(activeMenu === 'Trip Distance'){
return(
    <Form>
    <Form.Field inline>
        <input type = "checkbox" onClick ={fixedGBPDist.reset}/>
        <label>Flat Rate</label> <br/>
        Flat rate of £ 
        <input id = "flatGBPDist" {...flatGBPDist} /> 
        per mile
    </Form.Field>
    <Form.Field inline>
        <input type = "checkbox"/>
        <label>Variable Rate </label> <br/>
        Fixed rate of £ <input id = "fixedGBPDist" {...fixedGBPDist} /> for first 
        <input id = "fixedMilesDist" {...fixedMilesDist} /> miles <br/>
        Then £ <input id = "varGBPDist" {...varGBPDist} /> per mile thereafter
    </Form.Field>
    <Button onClick = {estimateSubmit} >Submit</Button>
    </Form>
)
}

else if(activeMenu === 'Trip Time'){
return(
    <Form>
    <Form.Field inline>
        <input type = "checkbox"/>
        <label>Flat Rate</label> <br/>
        Flat rate of £
        <input id = "flatGBPTime" {...flatGBPTime}/> 
        per minute
    </Form.Field>
    <Form.Field inline>
        <input type = "checkbox"/>
        <label>Variable Rate </label> <br/>
        Fixed rate of £ <input  id = "fixedGBPTime" {...fixedGBPTime}/> for first 
        <input id = "fixedMilesTime" {...fixedMilesTime}/> minutes <br/>
        Then £ <input id = "varGBPTime" {...varGBPTime}/> per minute thereafter
    </Form.Field>
    <Button onClick = {estimateSubmit} >Submit</Button>
    </Form>
)
}
else if(activeMenu === 'Crow Flies Distance'){
    return(
        <Form>
        <Form.Field inline>
            <input type = "checkbox"/>
            <label>Flat Rate</label> <br/>
            Flat rate of £ 
            <input id = "flatGBPCrow" {...flatGBPCrow}/> 
            per mile
        </Form.Field>
        <Form.Field inline>
            <input type = "checkbox"/>
            <label>Variable Rate </label> <br/>
            Fixed rate of £ <input id = "fixedGBPCrow"  {...fixedGBPCrow}/> for first 
            <input id = "fixedMilesCrow" {...fixedMilesCrow}/> miles <br/>
            Then £ <input id = "varGBPCrow" {...varGBPCrow} /> per mile thereafter
        </Form.Field>
        <Button onClick = {estimateSubmit}  >Submit</Button>
        </Form>
    )
    }

else{
    return(<div>unknown error</div>)
}

}


export default DistEstimateForm