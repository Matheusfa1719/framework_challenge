import { getDivisores, getDivisoresPrimos } from "./services";

class DecomposerController {
  decomposeNumber(req, res, next) {
    try {
      const number = req.params.id;
      if (isNaN(number) || number < 0) {
        res.status(400).json({error: true, message: "Não foi passado um número válido"});
      }
      const divisores = getDivisores(number);
      const primos = getDivisoresPrimos(divisores);
      res.json({ sucesso: true, numeroDeEntrada: number, divisores: divisores, primos: primos });
    } catch (err) {
      next(err);
    }
  }

}

export default new DecomposerController();