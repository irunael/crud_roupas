import { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import ModalConfirmacao from './ModalConfirmacao';

const CardRoupa = ({ roupa, onEditar, onExcluir }) => {
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  return (
    <>
      <Card className="h-100 shadow-sm border-0">
        <Card.Img 
          variant="top" 
          src={roupa.imagem} 
          style={{ 
            height: '200px', 
            objectFit: 'cover',
            borderTopLeftRadius: 'calc(0.25rem - 1px)',
            borderTopRightRadius: 'calc(0.25rem - 1px)'
          }} 
        />
        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start">
            <Card.Title className="mb-2">{roupa.nome}</Card.Title>
            <Badge bg="secondary" className="ms-2">{roupa.tamanho}</Badge>
          </div>
          
          <Card.Subtitle className="mb-2 text-muted">{roupa.marca}</Card.Subtitle>
          
          <div className="mb-2">
            <span className="fw-bold">Cor:</span> {roupa.cor}
          </div>

          <div className="mb-3">
            <span className="fw-bold">Tipo:</span> {roupa.tipo}
          </div>

          <div className="mt-auto d-flex justify-content-between align-items-center">
            <h5 className="mb-0 text-success fw-bold">R$ {roupa.preco.toFixed(2)}</h5>
            <div>
              <Button 
                variant="warning" 
                size="sm" 
                className="me-2 text-white fw-bold"
                onClick={onEditar}
              >
                Editar
              </Button>
              <Button 
                variant="outline-danger" 
                size="sm"
                className="fw-bold"
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