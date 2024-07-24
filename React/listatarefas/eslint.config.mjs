import { defineConfig } from 'eslint-config-react-app';

export default defineConfig({
  extends: [
    'react-app',
    'react-app/jest'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    // Adicione regras personalizadas aqui
  }
});
