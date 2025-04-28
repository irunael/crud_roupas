import { Modal, Button } from 'react-bootstrap';

const ModalConfirmacao = ({ mostrar, onFechar, onConfirmar, titulo, mensagem }) => {
  return (
    <Modal show={mostrar} onHide={onFechar} centered>
      <Modal.Header closeButton>
        <Modal.Title>{titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{mensagem}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onFechar}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onConfirmar}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalConfirmacao;