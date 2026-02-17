# 📘 Guia Essencial – React + Vite

Este documento resume os principais conceitos para iniciar no desenvolvimento com **React**, utilizando **Vite**, **TailwindCSS**, **shadcn/ui**, Hooks, Context API e Custom Hooks.

---

## 🚀 1. O que é React

React é uma biblioteca JavaScript para criação de interfaces de usuário baseadas em **componentes reutilizáveis**.

### Principais características:
- Componentização
- Reutilização de código
- Virtual DOM (melhor performance)
- Fluxo de dados unidirecional
- Baseado em SPA (Single Page Application)
- Forte ecossistema e comunidade

### Estrutura básica de um componente:

```bash
function App() {
  return (
    <div>
      <h1>Minha Aplicação</h1>
    </div>
  );
}

export default App;
```

---

## ⚡ 2. Criando um Projeto React + Vite

Vite é uma ferramenta moderna de build extremamente rápida.

### Criando o projeto:

```bash
npm create vite@latest meu-projeto
cd meu-projeto
npm install
npm run dev
```

### Estrutura inicial importante:

```
src/
 ├── App.jsx
 ├── main.jsx
 └── assets/
```

- `main.jsx` → ponto de entrada da aplicação
- `App.jsx` → componente principal

---

## 🧩 3. Conceito de Componentes e Props

### 🔹 Componentes
Funções que retornam JSX.

```bash
function Saudacao() {
  return <h1>Olá!</h1>;
}
```

### 🔹 Props
Passam dados entre componentes.

```bash
function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

<Saudacao nome="Maria" />
```

---

## 🎨 4. Tailwind CSS

Framework CSS utilitário que permite estilizar diretamente no JSX.

### Instalação:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Exemplo:

```bash
<div className="flex items-center justify-center h-screen bg-gray-100">
  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
    Clique aqui
  </button>
</div>
```

- Customização no `tailwind.config.js`

---

## 🪝 5. Trabalhando com Hooks Básicos

Hooks permitem gerenciar estado e ciclo de vida.

### 🔹 useState

```bash
const [contador, setContador] = useState(0);
```

### 🔹 useEffect

```bash
useEffect(() => {
  console.log("Executa ao montar");
}, []);
```

### Outros hooks importantes:
- useContext
- useRef
- useMemo
- useCallback

---

## 🧱 6. Conhecendo a Biblioteca shadcn/ui

shadcn/ui é uma coleção de componentes reutilizáveis construídos com base moderna e foco em acessibilidade.

### 🔎 Base Tecnológica

| Tecnologia | Função |
|------------|--------|
| React | Estrutura de componentes |
| TailwindCSS | Estilização |
| Radix UI | Acessibilidade e comportamentos |

---

### 📦 Exemplos de Componentes

| Componente | Uso |
|------------|------|
| Button | Botões customizáveis |
| Card | Containers organizados |
| Dialog | Modais |
| Input | Campos de formulário |
| Form | Estrutura para formulários |

---

## 📝 7. Trabalhando com Formulários no React

Formulários controlados utilizam estado.

```bash
const [email, setEmail] = useState("");

function handleSubmit(e) {
  e.preventDefault();
  console.log(email);
}

<form onSubmit={handleSubmit}>
  <input 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <button type="submit">Enviar</button>
</form>
```

### Conceitos importantes:
- Componentes controlados
- Validação manual ou com bibliotecas
- Integração com APIs
- Bibliotecas comuns: React Hook Form + Zod

---

## 🌐 8. Context API (Prática)

Permite compartilhar dados globalmente.

```bash
import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
```

### Uso:

```bash
<AuthProvider>
  <App />
</AuthProvider>
```

```bash
const { user } = useContext(AuthContext);
```

---

## 🔁 9. Custom Hooks (Prática)

Permitem reutilizar lógica.

```bash
import { useState } from "react";

export function useContador() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador((prev) => prev + 1);
  }

  return { contador, incrementar };
}
```

---

# 🧠 Resumo Geral

| Conceito | Função |
|----------|--------|
| React | Criação de interfaces |
| Vite | Ambiente rápido de desenvolvimento |
| Componentes | Blocos reutilizáveis |
| Props | Comunicação entre componentes |
| Hooks | Controle de estado e efeitos |
| Tailwind | Estilização rápida |
| shadcn/ui | Componentes modernos |
| Context API | Estado global |
| Custom Hooks | Reutilização de lógica |

---
