import { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import FormularioRoupa from './components/FormularioRoupa';
import CardRoupa from './components/CardRoupas';
import Header from './components/Header';
import { obterRoupas, salvarRoupas } from './servicos/Armazenamento';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [roupas, setRoupas] = useState([]);
  const [roupaAtual, setRoupaAtual] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    const roupasCarregadas = obterRoupas();
    setRoupas(roupasCarregadas);
  }, []);

  const handleSalvarRoupa = (roupa) => {
    let roupasAtualizadas;
    
    if (roupa.id) {
      roupasAtualizadas = roupas.map(r => r.id === roupa.id ? roupa : r);
    } else {
      const novaRoupa = { 
        ...roupa, 
        id: crypto.randomUUID(),
        imagem: roupa.imagem || 'https://via.placeholder.com/300x300?text=Sem+Imagem'
      };
      roupasAtualizadas = [...roupas, novaRoupa];
    }
    
    setRoupas(roupasAtualizadas);
    salvarRoupas(roupasAtualizadas);
    setMostrarFormulario(false);
    setRoupaAtual(null);
  };

  const handleExcluir = (id) => {
    const roupasAtualizadas = roupas.filter(r => r.id !== id);
    setRoupas(roupasAtualizadas);
    salvarRoupas(roupasAtualizadas);
  };

  return (
    <>
      <Header />
      <Container className="py-4">
        <div className="text-center mb-4">
          <Button 
            variant="success" 
            size="lg"
            onClick={() => {
              setRoupaAtual(null);
              setMostrarFormulario(true);
            }}
            className="fw-bold shadow"
          >
            + Adicionar Roupa
          </Button>
        </div>

        {mostrarFormulario && (
          <FormularioRoupa 
            roupa={roupaAtual} 
            onSalvar={handleSalvarRoupa} 
            onCancelar={() => setMostrarFormulario(false)} 
          />
        )}

        <Row xs={1} md={2} lg={3} className="g-4">
          {roupas.map(roupa => (
            <Col key={roupa.id}>
              <CardRoupa 
                roupa={roupa} 
                onEditar={() => {
                  setRoupaAtual(roupa);
                  setMostrarFormulario(true);
                }} 
                onExcluir={() => handleExcluir(roupa.id)} 
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;