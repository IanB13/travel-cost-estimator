import React,{useState,useEffect} from 'react';
import { Form, Button} from 'semantic-ui-react';
import { useDispatch} from 'react-redux';
import {changeEstimate} from '../../reducers/actions'
import {useField} from '../../hooks'


const DistEstimateForm = ({activeMenu,setOpen, estimate,setEstimate}) =>{
    const dispatch = useDispatch();
    const [estimateTarget, setEstimateTarget] = useState(null)
    //Estimate change dispatch to state
    const estimateSubmit = (event) =>{
        event.preventDefault()
        getEstimate(estimateTarget)
    }
    //TODO: better way of doing this
    useEffect(()=>{
        if(estimate!== null){
        dispatch(changeEstimate(estimate))
        setOpen(false) //closes modal
        setEstimate(null)
        }
    },[estimate, dispatch, setOpen, setEstimate])

    // Set code for seting estimate state
    const getEstimate = (rateType) =>{
        const tripType = activeMenu;
        switch(tripType){
            case 'Trip Distance':
                if(rateType === 'flat'){
                    setEstimate({
                        tripType,
                        flatRate: flatGBPDist.value
                    })
                }
                else if(rateType === 'var'){
                    setEstimate({
                        tripType,
                        varRate: {
                            fixedTravel: fixedMilesDist.value,
                            fixedCost: fixedGBPDist.value,
                            rate: varGBPDist.value
                        }
                    })
                }
                else{
                    console.error("unexpected rateType")
                }
            break
            case "Trip Time":
                if(rateType === 'flat'){
                    setEstimate({
                        tripType,
                        flatRate: flatGBPTime.value
                    })
                }
                else if(rateType === 'var'){
                    setEstimate({
                        tripType,
                        varRate: {
                            fixedTravel: fixedMilesTime.value,
                            fixedCost: fixedGBPTime.value,
                            rate: varGBPTime.value
                        }
                    })
                }
                else{
                    console.error("unexpected rateType")
                }
            break
            case"Crow Flies Distance":
            if(rateType === 'flat'){
                setEstimate({
                    tripType,
                    flatRate: flatGBPCrow.value
                })
            }
            else if(rateType === 'var'){
                setEstimate({
                    tripType,
                    varRate: {
                        fixedTravel: fixedMilesCrow.value,
                        fixedCost: fixedGBPCrow.value,
                        rate: varGBPCrow.value
                    }
                })
            }
            else{
                console.error("unexpected rateType")
            }
            break
            default:
            console.error("unexpected tripType:",tripType)
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

    //custom hook, has to live here, not pure
    //TODO: move into hooks
    //Probably needs better practices
    const useCheckbox = (rateType) =>{
        const [checked, setChecked] = useState(false)
    
        const onChange = () => {
          if(!checked){
            setEstimateTarget(rateType)
            flatDist.setChecked(false)
            varDist.setChecked(false) 
            flatTime.setChecked(false)
            varTime.setChecked(false)
            flatCrow.setChecked(false)
            varCrow.setChecked(false)
          }
          setChecked(!checked)
        }
        const type = 'checkbox'
        return { DOM: { type, checked, onChange}, setChecked}
    }



    //CheckBox State
    const flatDist = useCheckbox("flat")
    const varDist = useCheckbox("var")
    const flatTime = useCheckbox("flat")
    const varTime = useCheckbox("var")
    const flatCrow = useCheckbox("flat")
    const varCrow = useCheckbox("var")

if(activeMenu === 'Trip Distance'){
return(
    <Form>
    <Form.Field inline>
        <input {...flatDist.DOM} />
        <label>Flat Rate</label> <br/>
        Flat rate of £ 
        <input  {...flatGBPDist} /> 
        per mile
    </Form.Field>
    <Form.Field inline>
        <input {...varDist.DOM}/>
        <label>Variable Rate </label> <br/>
        Fixed rate of £ <input  {...fixedGBPDist} /> for first 
        <input {...fixedMilesDist} /> miles <br/>
        Then £ <input  {...varGBPDist} /> per mile thereafter
    </Form.Field>
    <Button onClick = {estimateSubmit} className ="blue" >Submit Estimate</Button>
    </Form>
)
}

else if(activeMenu === 'Trip Time'){
return(
    <Form>
    <Form.Field inline>
        <input {...flatTime.DOM}/>
        <label>Flat Rate</label> <br/>
        Flat rate of £
        <input  {...flatGBPTime}/> 
        per minute
    </Form.Field>
    <Form.Field inline>
        <input {...varTime.DOM}/>
        <label>Variable Rate </label> <br/>
        Fixed rate of £ <input   {...fixedGBPTime}/> for first 
        <input  {...fixedMilesTime}/> minutes <br/>
        Then £ <input  {...varGBPTime}/> per minute thereafter
    </Form.Field>
    <Button onClick = {estimateSubmit}className ="blue" >Submit Estimate</Button>
    </Form>
)
}
else if(activeMenu === 'Crow Flies Distance'){
    return(
        <Form>
        <Form.Field inline>
            <input {...flatCrow.DOM}/>
            <label>Flat Rate</label> <br/>
            Flat rate of £ 
            <input  {...flatGBPCrow}/> 
            per mile
        </Form.Field>
        <Form.Field inline>
            <input {...varCrow.DOM}/>
            <label>Variable Rate </label> <br/>
            Fixed rate of £ <input  {...fixedGBPCrow}/> for first 
            <input {...fixedMilesCrow}/> miles <br/>
            Then £ <input  {...varGBPCrow} /> per mile thereafter
        </Form.Field>
        <Button onClick = {estimateSubmit} className ="blue" >Submit Estimate</Button>
        </Form>
    )
    }

else{
    return(<div>unknown error</div>)
}

}


export default DistEstimateForm