import React from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button";

const ModalDialog = ({currentBand, show, handleClose}) =>{
  return (
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{currentBand.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-4">
            <img width="140px" height="85px" src={currentBand.thumb1} alt=""/>
          </div>
          <div className="col-4">
            <img width="140px" height="85px" src={currentBand.thumb2} alt=""/>
          </div>
          <div className="col-4">
            <img width="140px" height="85px" src={currentBand.thumb3} alt=""/>
          </div>
        </div>
        <div className="row">
          <p className="p-2">{currentBand.info}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>

      </Modal.Footer>
    </Modal>
  )
}

export default ModalDialog;
