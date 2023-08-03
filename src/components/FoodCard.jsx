import React, { useState } from 'react';
import '../foodcard.css'; // Create this CSS file for 
import { Modal, Button } from 'react-bootstrap';


const FoodCard = ({ imageSrc, altText,title }) => {
    const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <div className="card">
      <img src={imageSrc} alt={altText} />
      <h3 onClick={handleShow}>{title}</h3>
      {/* Modal */}
      <Modal size='lg'  show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          
          <h4>Join now to unlock our 7 days meal plans and thousands of recipes.</h4>
          <h6 style={{marginLeft:'15rem',marginTop:'20px'}}>Start Your 7-days free trail today</h6>
          <div className="image-row">
            <img src={imageSrc} alt={altText} className="modal-image" />
            <img src={imageSrc} alt={altText} className="modal-image" />
            <img src={imageSrc} alt={altText} className="modal-image" />
            <img src={imageSrc} alt={altText} className="modal-image" />
          </div>
          <button className='btn-mdl'>Try for Free</button>
          <h6 style={{marginLeft:'15rem',marginTop:'20px'}}>See all the recipes in a locker when you join</h6>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>


    </div>
  );
};

export default FoodCard;
