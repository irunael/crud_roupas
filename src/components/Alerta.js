import { Alert } from 'react-bootstrap';

const Alerta = ({ variante, mensagem, onClose }) => {
  return (
    <Alert variant={variante} onClose={onClose} dismissible>
      {mensagem}
    </Alert>
  );
};

export default Alerta;