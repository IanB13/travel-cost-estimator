import React from 'react'
import { Modal, List ,Image } from 'semantic-ui-react'
import worker from "../resources/worker.svg"
import hammer from "../resources/hammer.svg"


function InfoModal() {
  const [open, setOpen] = React.useState(true)
  const IconStyle = {
    "height": "1.5em",
    'paddingLeft':' 0.2em',
    'paddingRight': '0.2em'
}
  return (
    <Modal
      closeIcon
      open={open}
      size = 'tiny' 
      onClose={() => setOpen(false)}
    >
      <Modal.Content>
        <List as='ol'>
        <List.Item as='li'>Click 'Select Estimate'</List.Item>
        <List.Item as='li'>Select an estimate type then choose flat or variable rate </List.Item>
        <List.Item as='li'>Click on one of the tool icons
            <Image src = {hammer} alt="tools" inline style = {IconStyle } /> 
            to find the estimated cost of travel from the workshop icon
            <Image src = {worker} alt="workshop" inline style = {IconStyle} /> 
        </List.Item>
        </List>
      </Modal.Content>
    </Modal>
  )
}

export default InfoModal