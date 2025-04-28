import { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import FormularioRoupa from './components/FormularioRoupa';
import CardRoupa from './components/CardRoupas';
import Alerta from './components/Alerta';
import { obterRoupas, salvarRoupas } from './servicos/Armazenamento';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [roupas, setRoupas] = useState([]);
  const [roupaAtual, setRoupaAtual] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [alerta, setAlerta] = useState({ mostrar: false, mensagem: '', variante: 'success' });

  useEffect(() => {
    const roupasCarregadas = obterRoupas();
    setRoupas(roupasCarregadas);
  }, []);

  const handleSalvarRoupa = (roupa) => {
    let roupasAtualizadas;
    
    if (roupa.id) {
      roupasAtualizadas = roupas.map(r => r.id === roupa.id ? roupa : r);
    } else {
      const novaRoupa = { ...roupa, id: crypto.randomUUID() };
      roupasAtualizadas = [...roupas, novaRoupa];
    }
    
    setRoupas(roupasAtualizadas);
    salvarRoupas(roupasAtualizadas);
    setMostrarFormulario(false);
    setRoupaAtual(null);
    mostrarAlerta('Roupa salva com sucesso!', 'success');
  };

  const handleExcluir = (id) => {
    const roupasAtualizadas = roupas.filter(r => r.id !== id);
    setRoupas(roupasAtualizadas);
    salvarRoupas(roupasAtualizadas);
    mostrarAlerta('Roupa removida com sucesso!', 'danger');
  };

  const mostrarAlerta = (mensagem, variante) => {
    setAlerta({ mostrar: true, mensagem, variante });
    setTimeout(() => setAlerta({ ...alerta, mostrar: false }), 3000);
  };

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Catálogo de Roupas</h1>
          
          {alerta.mostrar && (
            <Alerta 
              variante={alerta.variante} 
              mensagem={alerta.mensagem} 
              onClose={() => setAlerta({...alerta, mostrar: false})} 
            />
          )}

          <div className="text-center mb-4">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => {
                setRoupaAtual(null);
                setMostrarFormulario(true);
              }}
            >
              + Adicionar Roupa
            </Button>
          </div>
        </Col>
      </Row>

      {mostrarFormulario && (
        <FormularioRoupa 
          roupa={roupaAtual} 
          onSalvar={handleSalvarRoupa} 
          onCancelar={() => setMostrarFormulario(false)} 
        />
      )}

      <Row xs={1} md={2} lg={3} className="g-4">
        {roupas.length > 0 ? (
          roupas.map(roupa => (
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
          ))
        ) : (
          <Col className="text-center py-5">
            <h4>Nenhuma roupa cadastrada ainda</h4>
            <p>Clique no botão acima para adicionar sua primeira peça</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default App;