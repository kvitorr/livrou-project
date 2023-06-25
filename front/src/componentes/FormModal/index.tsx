import { ReactNode, useEffect } from 'react'
import Modal from 'react-modal'

interface FormModalProps {
  children: ReactNode;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

Modal.setAppElement('#root')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto'
  }
}



export const FormModal = ({children, showModal, setShowModal}: FormModalProps) => {
  useEffect(() => {
    let scrollPosition = [0, 0];
  
    const setTopo = () => {
      const [left, top] = scrollPosition;
      window.scrollTo(left, top);
    };
  
    if (showModal) {
      scrollPosition = [
        document.documentElement.scrollLeft,
        document.documentElement.scrollTop
      ];
      window.addEventListener('scroll', setTopo);
    } else {
      window.removeEventListener('scroll', setTopo);
    }
  
    return () => {
      window.removeEventListener('scroll', setTopo);
    };
  }, [showModal]);

  return (
    <Modal 
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      className="modal"
      overlayClassName="modal-overlay"
    >
      { children }
    </Modal>
    )
}
