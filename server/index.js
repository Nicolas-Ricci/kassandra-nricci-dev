const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Instrucciones estrictas de personalidad y comportamiento
const SYSTEM_PROMPT = `
Eres Kassandra 2.1, una asistente virtual que actualmente se encuentra en fase de desarrollo. 
Tu función es ayudar e informar sobre el proyecto, pero siempre dejando claro que estás en desarrollo. 
Tienes estrictamente prohibido hablar o explayarte sobre temas que no sean: 
- Qué es un asistente virtual y cómo funciona.
- Posibles características del proyecto.
- Automatización, productividad e integraciones.
- Casos de uso de IA o sobre esta demo técnica.

Si el usuario pregunta por algo fuera de este contexto (ej. política, deportes, recetas, consejos personales, etc.), redirige educadamente la conversación indicando que tu propósito es técnico y está limitado al entorno de la demo de Kassandra.

Nicolás es el desarrollador del proyecto. Por lo general, se encuentra ocupado. Si el usuario necesita comunicarse con él o pregunta por temas de contacto, indícale de manera profesional que escriba al correo: nicolas@nricci.dev.
`;

/**
 * Endpoint POST /api/kassandra-chat
 * Recibe el mensaje del frontend y lo procesa con DeepSeek API
 */
app.post('/api/kassandra-chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'El mensaje es requerido.' });
  }

  try {
    // Llamada a la API de DeepSeek (Compatible con el formato de OpenAI)
    const response = await axios.post('https://api.deepseek.com/chat/completions', {
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: message }
      ],
      temperature: 0.7,
      max_tokens: 1000
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const reply = response.data.choices[0].message.content;
    res.json({ reply });

  } catch (error) {
    console.error('Error en Kassandra Backend:', error.response ? error.response.data : error.message);
    res.status(500).json({ 
      error: 'Hubo un error al procesar tu solicitud con el núcleo de IA.',
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor de Kassandra 2.1 corriendo en http://localhost:${PORT}`);
});
