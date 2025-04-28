import { useState, useEffect } from 'react';
import { Form, Button, Row, Col, FormGroup, FormControl, FormLabel, FormSelect, Modal } from 'react-bootstrap';

const FormularioRoupa = ({ roupa, onSalvar, onCancelar }) => {
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    tipo: '',
    tamanho: '',
    cor: '',
    preco: '',
    marca: ''
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
        marca: ''
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
    <Modal show={true} onHide={onCancelar} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{roupa ? 'Editar Roupa' : 'Adicionar Nova Roupa'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <FormGroup>
                <FormLabel>Nome</FormLabel>
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
              <FormGroup>
                <FormLabel>Tipo</FormLabel>
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
              <FormGroup>
                <FormLabel>Tamanho</FormLabel>
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
              <FormGroup>
                <FormLabel>Cor</FormLabel>
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
              <FormGroup>
                <FormLabel>Marca</FormLabel>
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

          <FormGroup className="mb-4">
            <FormLabel>Preço (R$)</FormLabel>
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

          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={onCancelar}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              {roupa ? 'Atualizar Roupa' : 'Adicionar Roupa'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormularioRoupa;