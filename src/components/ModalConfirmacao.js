import { Modal, Button } from 'react-bootstrap';

const ModalConfirmacao = ({ mostrar, onFechar, onConfirmar, titulo, mensagem }) => {
  return (
    <Modal show={mostrar} onHide={onFechar} centered>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">{titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{mensagem}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onFechar} className="fw-bold">
          Cancelar
        </Button>
        <Button variant="danger" onClick={onConfirmar} className="fw-bold">
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalConfirmacao;