import React, { useState } from 'react'
import { Button, Modal, Menu ,Image } from 'semantic-ui-react'
import DistEstimateForm from "./DistEstimateForm"
import road from "../../resources/road.svg" //Need to credit
import clock from "../../resources/clock.svg"
import crow from "../../resources/crow.svg"


const EstimateModal = () => {
    const [open, setOpen] = useState(false)
    const [estimate, setEstimate] = useState(null)
    const [activeMenu, setActiveMenu] = useState('Trip Distance')
    
    //changes Active menu
    const handleMenuClick = (e,{name}) => {
        setActiveMenu(name)
    }


    return (
        <Modal
            closeIcon
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button id = "estimateModalButton" size='large' className = "blue">Select Estimate</Button>}
        >
            <Modal.Content>
                <Menu tabular>
                    <Menu.Item
                        active = {activeMenu === 'Trip Distance'}
                        name='Trip Distance'
                        onClick={handleMenuClick}
                    > 
                    <Image src = {road} alt="road" avatar/>
                        Trip Distance
                    </Menu.Item>

                    <Menu.Item
                        active={activeMenu === 'Trip Time'}
                        name='Trip Time'
                        onClick={handleMenuClick}
                    >
                    <Image src={clock} alt="clock" avatar />
                        Trip Time<span> </span>
                    </Menu.Item>

                    <Menu.Item
                        active={activeMenu === 'Crow Flies Distance'}
                        name='Crow Flies Distance'
                        onClick={handleMenuClick}
                    >
                    <Image src={crow} alt="crow" avatar />
                        Crow Flies Distance
                    </Menu.Item>

                </Menu>
        
                <DistEstimateForm 
                activeMenu = {activeMenu} 
                setOpen = {setOpen}
                estimate = {estimate}
                setEstimate = {setEstimate}
                />

            </Modal.Content>
        </Modal>
    )
}

export default EstimateModal