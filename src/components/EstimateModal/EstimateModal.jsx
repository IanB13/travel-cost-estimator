import React, { useState } from 'react'
import { Button, Modal, Menu  } from 'semantic-ui-react'
import DistEstimateForm from "./DistEstimateForm"

const EstimateModal = () => {
    const [open, setOpen] = useState(false)

    const [activeMenu, setActiveMenu] = useState('Trip Distance')
    
    //changes Active menu
    const handleMenuClick = (e,{name}) => {
        setActiveMenu(name)
    }


    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Select Estimate</Button>}
        >
            <Modal.Content>
                <Menu tabular>
                    <Menu.Item
                        active = {activeMenu === 'Trip Distance'}
                        name='Trip Distance'
                        onClick={handleMenuClick}
                    />
                    <Menu.Item
                        active = {activeMenu === 'Trip Time'}
                        name='Trip Time'
                        onClick={handleMenuClick}
                    />
                    <Menu.Item
                        active = {activeMenu === 'Crow Flies Distance'}
                        name='Crow Flies Distance'
                        onClick={handleMenuClick}
                    />
                </Menu>
        
                <DistEstimateForm activeMenu = {activeMenu} setOpen = {setOpen}/>

            </Modal.Content>
        </Modal>
    )
}

export default EstimateModal