export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Missing question in request body.' });
  }

  const resposta = `Você perguntou: "${question}". Esta é uma resposta simulada.`;

  return res.status(200).json({ answer: resposta });
}
