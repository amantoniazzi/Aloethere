import React, { useEffect } from './node_modules/react';
import Modal from './node_modules/react-modal';

function DeleteModal({ myPlant, deleteMyPlant, modalIsOpen, openModal, closeModal }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center'
    }
  };

  useEffect(() => {
    Modal.setAppElement('body');
  }, [])

  const handleDeleteClick = () => {
    deleteMyPlant(myPlant._id)
    closeModal();
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <h2>Are you sure you want to delete your plant?</h2>
        <button className="delete_button" onClick={closeModal}>x</button>
        <div className="cancel_img">
          <img src={require('../../assets/cancelPlant.png')} alt="delete a plant" />
        </div>
        <button className="confirmation_button" onClick={handleDeleteClick}>I'm sure</button>
      </Modal>
    </div>

  )
}

export default DeleteModal;

