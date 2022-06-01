import inquirer from "inquirer";
import { getDivisores, getDivisoresPrimos } from "./modules/decomposer/services";

(async () => {
  const resposta = await inquirer.prompt([{name: "number", message: "Digite um número: "}]);
  const numero = parseInt(resposta["number"]);
  if (isNaN(numero) || numero < 0) {
    console.log("Erro, você não passou um número válido");
    return;
  }
  const divisores = getDivisores(numero);
  const primos = getDivisoresPrimos(divisores);
  console.log("\n");
  console.log("********************RESULTADO**********************");
  console.log("Número de entrada: ", numero);
  console.log("Divisores: ", divisores);
  console.log("Primos: ", primos);
})();