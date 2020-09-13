import React,{useState} from 'react';
import { Form, Button} from 'semantic-ui-react';
import { useDispatch,useSelector} from 'react-redux';
import {changeEstimate,addTravel} from '../../reducers/actions'

//TODO: Finish form controls
const DistEstimateForm = ({activeMenu,setOpen}) =>{
    const dispatch = useDispatch();
    const [estimate, setEstimate] = useState(null)

    //could reduce work with custom hooks, or form milk, react forms
    const [flatGBPDist, setFlatGBPDist] = useState("")
    const [flatGBPTime, setFlatGBPTime] = useState("")

    const state = useSelector(state => state)

    const estimateSubmit = (event) =>{
        event.preventDefault()
        setOpen(false) //closes modal
        dispatch(changeEstimate(estimate))
        dispatch(addTravel(state.jobs,state.builder,state.google)) //TODO: move this, can put on init
    }


if(activeMenu === 'Trip Distance' || activeMenu === 'Crow Flies Distance'){
return(
    <Form>
    <Form.Field inline>
        <label>Flat Rate</label> <br/>
        Flat rate of £ 
        <input 
        id = "flatGBPDist"
        onChange={(event) =>{ setFlatGBPDist(event.target.value)
                setEstimate({
                    type: activeMenu,
                    rateType: 'flat',
                    rate: event.target.value
                })    
        }}
        value = {flatGBPDist}
        /> 
        per mile
    </Form.Field>
    <Form.Field inline>
        <label>Variable Rate </label> <br/>
        Fixed rate of £ <input id = "fixedGBPDist" /> for first <input id = "fixedMilesDist" /> miles <br/>
        Then £ <input id = "varGBPDist" /> per mile thereafter
    </Form.Field>
    <Button onClick = {estimateSubmit} >Submit</Button>
    </Form>
)
}

else if(activeMenu === 'Trip Time'){
return(
    <Form>
    <Form.Field inline>
        <label>Flat Rate</label> <br/>
        Flat rate of £
        <input 
        id = "flatGBPTime"
        onChange={(event) => setFlatGBPTime(event.target.value)}
        value = {flatGBPTime}
        /> 
        per minute
    </Form.Field>
    <Form.Field inline>
        <label>Variable Rate </label> <br/>
        Fixed rate of £ <input  id = "fixedGBPTime" /> for first <input id = "fixedMilesTime" /> minutes <br/>
        Then £ <input id = "varGBPTime" /> per minute thereafter
    </Form.Field>
    <Button onClick = {estimateSubmit} >Submit</Button>
    </Form>
)
}

else{
    return(<div>unknown error</div>)
}

}

export default DistEstimateForm