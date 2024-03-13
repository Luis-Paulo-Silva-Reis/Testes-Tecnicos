//handleLogin.jsx
import axios from "axios";


export const handleLogin = async (email, password, setMessage) => {
  try {
    const response = await axios.post("https://20.206.205.50:3000/login", {
      // se for testar local troca o ip por localhost
      email,
      password,
    });
    if (response.status === 200) {
      setMessage(response.data.token);
      // Aqui você pode redirecionar o usuário para outra página ou fazer qualquer outra ação necessária após o login bem-sucedido
    } else {
      setMessage("Erro ao fazer login.");
      console.error(
        "Erro ao fazer login. Status de resposta:",
        response.status
      );
    }
  } catch (error) {
    setMessage("Erro ao fazer login.");
    console.error("Erro ao fazer login:", error);
  }
};
