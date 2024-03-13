// apiService.js
import axios from "axios";

export const registerUser = async (email, password, setMessage) => {
  try {
    const response = await axios.post("http://localhost:3000/register", {
      email,
      password,
    });
    setMessage(response.data.message);
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // Verifica se a resposta de erro do servidor possui uma mensagem
      setMessage(error.response.data.message);
    } else {
      setMessage("Erro ao cadastrar usuário.");
      console.error("Erro ao cadastrar usuário:", error);
    }
  }
};
