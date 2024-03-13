import axios from "axios";

export const registerUser = async (email, password, setMessage) => {
  try {
    const response = await axios.post("http://20.206.205.50:3000/register", { // se for testar local troca o ip por localhost
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
