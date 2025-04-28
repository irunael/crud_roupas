import { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import ModalConfirmacao from './ModalConfirmacao';

const CardRoupa = ({ roupa, onEditar, onExcluir }) => {
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  return (
    <>
      <Card className="h-100 shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-start">
            <Card.Title>{roupa.nome}</Card.Title>
            <Badge bg="secondary" className="ms-2">{roupa.tamanho}</Badge>
          </div>
          
          <Card.Subtitle className="mb-2 text-muted">{roupa.marca}</Card.Subtitle>
          
          <div className="d-flex align-items-center mb-2">
            <span className="me-2">Cor:</span>
            <div 
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: roupa.cor.toLowerCase(),
                border: '1px solid #ddd',
                borderRadius: '50%'
              }} 
              title={roupa.cor}
            />
          </div>

          <div className="mb-3">
            <span className="fw-bold">Tipo:</span> {roupa.tipo}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0 text-primary">R$ {roupa.preco.toFixed(2)}</h5>
            <div>
              <Button 
                variant="outline-primary" 
                size="sm" 
                className="me-2"
                onClick={onEditar}
              >
                Editar
              </Button>
              <Button 
                variant="outline-danger" 
                size="sm"
                onClick={() => setMostrarConfirmacao(true)}
              >
                Excluir
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      <ModalConfirmacao 
        mostrar={mostrarConfirmacao}
        onFechar={() => setMostrarConfirmacao(false)}
        onConfirmar={onExcluir}
        titulo="Confirmar Exclusão"
        mensagem={`Deseja realmente excluir a roupa "${roupa.nome}"?`}
      />
    </>
  );
};

export default CardRoupa;