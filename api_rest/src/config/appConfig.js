import dotenv from 'dotenv';
dotenv.config()

const port = process.env.PORT || 3001;

export default {
  url: `http://localhost:${port}`
}
