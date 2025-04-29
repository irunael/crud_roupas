import { useState, useEffect } from 'react';
import { Form, Button, Row, Col, FormGroup, FormControl, FormLabel, FormSelect, Modal } from 'react-bootstrap';

const FormularioRoupa = ({ roupa, onSalvar, onCancelar }) => {
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    tipo: '',
    tamanho: '',
    cor: '',
    preco: '',
    marca: '',
    imagem: ''
  });

  useEffect(() => {
    if (roupa) {
      setDadosFormulario(roupa);
    } else {
      setDadosFormulario({
        nome: '',
        tipo: '',
        tamanho: '',
        cor: '',
        preco: '',
        marca: '',
        imagem: ''
      });
    }
  }, [roupa]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosFormulario(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const roupaParaSalvar = {
      ...dadosFormulario,
      preco: parseFloat(dadosFormulario.preco)
    };
    onSalvar(roupaParaSalvar);
  };

  const tiposRoupa = [
    'Camiseta', 'Camisa', 'Calça', 'Short', 'Vestido', 
    'Saia', 'Jaqueta', 'Casaco', 'Moletom', 'Roupa íntima'
  ];

  const tamanhos = ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XXG'];

  return (
    <Modal show={true} onHide={onCancelar} size="lg" centered>
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="fw-bold">
          {roupa ? 'Editar Roupa' : 'Adicionar Nova Roupa'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <FormGroup className="mb-3">
                <FormLabel className="fw-bold">Nome</FormLabel>
                <FormControl
                  type="text"
                  name="nome"
                  value={dadosFormulario.nome}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="mb-3">
                <FormLabel className="fw-bold">Tipo</FormLabel>
                <FormSelect
                  name="tipo"
                  value={dadosFormulario.tipo}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione um tipo</option>
                  {tiposRoupa.map(tipo => (
                    <option key={tipo} value={tipo}>{tipo}</option>
                  ))}
                </FormSelect>
              </FormGroup>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <FormGroup className="mb-3">
                <FormLabel className="fw-bold">Tamanho</FormLabel>
                <FormSelect
                  name="tamanho"
                  value={dadosFormulario.tamanho}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione um tamanho</option>
                  {tamanhos.map(tamanho => (
                    <option key={tamanho} value={tamanho}>{tamanho}</option>
                  ))}
                </FormSelect>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup className="mb-3">
                <FormLabel className="fw-bold">Cor</FormLabel>
                <FormControl
                  type="text"
                  name="cor"
                  value={dadosFormulario.cor}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup className="mb-3">
                <FormLabel className="fw-bold">Marca</FormLabel>
                <FormControl
                  type="text"
                  name="marca"
                  value={dadosFormulario.marca}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <FormGroup className="mb-3">
                <FormLabel className="fw-bold">Preço (R$)</FormLabel>
                <FormControl
                  type="number"
                  name="preco"
                  value={dadosFormulario.preco}
                  onChange={handleChange}
                  required
                  min="0.01"
                  step="0.01"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="mb-3">
                <FormLabel className="fw-bold">URL da Imagem</FormLabel>
                <FormControl
                  type="url"
                  name="imagem"
                  value={dadosFormulario.imagem}
                  onChange={handleChange}
                  placeholder="Cole a URL da imagem aqui"
                  required
                />
              </FormGroup>
            </Col>
          </Row>

          {dadosFormulario.imagem && (
            <div className="text-center mb-4">
              <div style={{ 
                height: '200px', 
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                border: '1px solid #dee2e6'
              }}>
                <img 
                  src={dadosFormulario.imagem} 
                  alt="Preview" 
                  style={{ 
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }} 
                />
              </div>
            </div>
          )}

          <div className="d-flex justify-content-end gap-2 mt-3">
            <Button variant="secondary" onClick={onCancelar} className="fw-bold">
              Cancelar
            </Button>
            <Button variant="success" type="submit" className="fw-bold">
              {roupa ? 'Atualizar Roupa' : 'Adicionar Roupa'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormularioRoupa;