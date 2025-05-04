const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Habilita CORS e JSON
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Rota de verificação no navegador
app.get('/', (req, res) => {
  res.send('API da URA Médica está ativa.');
});

// Rota de perguntas
app.post('/pergunta', (req, res) => {
  const pergunta = (req.body.pergunta || '').toLowerCase();
  let resposta = 'Desculpe, não entendi. Pode repetir?';

  if (pergunta.includes('convênio') || pergunta.includes('plano de saúde')) {
    resposta = 'O Dr. Lucas Pereira não atende por plano de saúde. Os atendimentos são exclusivamente particulares.';
  } else if (pergunta.includes('espirometria') && pergunta.includes('preparo')) {
    resposta = 'Para fazer a espirometria, suspenda broncodilatadores: Aerolin ou Berotec por 6h, Atrovent por 4h, Salmeterol ou Formoterol por 12h, Tiotrópio ou Vilanterol por 24h. Consulte a atendente se estiver em dúvida.';
  } else if (pergunta.includes('caruaru')) {
    resposta = 'O Dr. Lucas Pereira atende em Caruaru, no Clinical Center, às terças-feiras.';
  } else if (pergunta.includes('palmares')) {
    resposta = 'O Dr. Lucas Pereira atende em Palmares, na Clínica Santa Joana, às sextas-feiras.';
  } else if (pergunta.includes('gravatá') || pergunta.includes('gravata')) {
    resposta = 'O Dr. Lucas Pereira atende em Gravatá, no Clinical Center, às quartas-feiras alternadas.';
  } else if (pergunta.includes('limoeiro')) {
    resposta = 'O Dr. Lucas Pereira atende em Limoeiro, na Clínica Radiológica Magalhães Pedrosa, às segundas-feiras.';
  } else if (pergunta.includes('jaboatão')) {
    resposta = 'O Dr. Lucas Pereira atende em Jaboatão Centro, na Clínica + Saúde, às segundas alternadas.';
  } else if (pergunta.includes('prazeres') || pergunta.includes('cajueiro')) {
    resposta = 'O Dr. Lucas Pereira atende em Cajueiro Seco (Prazeres), na Clínica dos Feirantes, às quintas-feiras.';
  }

  res.json({ resposta });
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
