import axios from 'axios';

export default async (req:any, res:any) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const response = await axios.post('https://your-login-api-endpoint', {
        email,
        password,
      });

      const { token } = response.data;

      res.status(200).json({ token });
    } catch (error) {
      res.status(error.response.status).json({ message: error.response.data.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
