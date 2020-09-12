import React, { useState } from 'react'
import { Button, Modal, Menu  } from 'semantic-ui-react'
import DistEstimateForm from "./DistEstimateForm"

const EstimateModal = () => {
    const [open, setOpen] = useState(false)

    const [activeMenu, setActiveMenu] = useState('Trip Distance')

    const handleItemClick = (e,{name}) => {
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
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        active = {activeMenu === 'Trip Time'}
                        name='Trip Time'
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        active = {activeMenu === 'Crow Flies Distance'}
                        name='Crow Flies Distance'
                        onClick={handleItemClick}
                    />
                </Menu>
        
                <DistEstimateForm activeMenu = {activeMenu} setOpen = {setOpen}/>

            </Modal.Content>
        </Modal>
    )
}

export default EstimateModal