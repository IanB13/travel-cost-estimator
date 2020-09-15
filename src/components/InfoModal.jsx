import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function InfoModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      closeIcon
      open={open}
      size = 'tiny' 
      trigger={<Button className = "black" id = "infoModalButton"> Info </Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Modal.Content>
        <p>
        This app randomly generates several job locations. <br/>
        Pick an estimate type then click a job location.
        </p>
        <div>View the source code <a href ="https://github.com/IanB13/travel-cost-estimator">here</a>. </div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Modal.Content>
    </Modal>
  )
}

export default InfoModal
