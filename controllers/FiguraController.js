import { Figura } from '../models/FiguraModel.js';
 
class FiguraController {
  calcularRectangulo(req, res) {
    const { base, altura, tipoOperacion } = req.body;
    const valores = { base, altura };
    const error = Figura.validarNumerosPositivos(valores);
 
    let resultadoArea = null;
    let resultadoPerimetro = null;
 
    if (error) {
      return res.render('rectangulo', { resultadoArea, resultadoPerimetro, error });
    }
 
    const baseNum = parseFloat(base);
    const alturaNum = parseFloat(altura);
 
    if (tipoOperacion === 'area') {
      const area = Figura.calcularAreaRectangulo(baseNum, alturaNum);
      resultadoArea = `El área del rectángulo es ${area.toFixed(2)}`;
    }
 
    if (tipoOperacion === 'perimetro') {
      const perimetro = Figura.calcularPerimetroRectangulo(baseNum, alturaNum);
      resultadoPerimetro = `El perímetro del rectángulo es ${perimetro.toFixed(2)}`;
    }
 
    res.render('rectangulo', { resultadoArea, resultadoPerimetro, error: null });
  }
 
  calcularRombo(req, res) {
    const { D, d, lado, tipoOperacion } = req.body;
    const valores = { D, d, lado };
    const error = Figura.validarNumerosPositivos(valores);
 
    let resultadoArea = null;
    let resultadoPerimetro = null;
 
    if (error) {
      return res.render('rombo', { resultadoArea, resultadoPerimetro, error });
    }
 
    const Dnum = parseFloat(D);
    const dnum = parseFloat(d);
    const ladoNum = parseFloat(lado);
 
    if (tipoOperacion === 'area') {
      const area = Figura.calcularAreaRombo(Dnum, dnum);
      resultadoArea = `El área del rombo es ${area.toFixed(2)}`;
    }
 
    if (tipoOperacion === 'perimetro') {
      const perimetro = Figura.calcularPerimetroRombo(ladoNum);
      resultadoPerimetro = `El perímetro del rombo es ${perimetro.toFixed(2)}`;
    }
 
    res.render('rombo', { resultadoArea, resultadoPerimetro, error: null });
  }
 
  calcularTrapecio(req, res) {
    const { baseMayor, baseMenor, altura, lado1, lado2, tipoOperacion } = req.body;
 
    let resultadoArea = null;
    let resultadoPerimetro = null;
    let error = null;
 
    if (tipoOperacion === 'area') {
      error = Figura.validarNumerosPositivos({ baseMayor, baseMenor, altura });
      if (!error) {
        const area = Figura.calcularAreaTrapecio(
          parseFloat(baseMayor),
          parseFloat(baseMenor),
          parseFloat(altura)
        );
        resultadoArea = `El área del trapecio es ${area.toFixed(2)}`;
      }
    }
 
    if (tipoOperacion === 'perimetro') {
      error = Figura.validarNumerosPositivos({ baseMayor, baseMenor, lado1, lado2 });
      if (!error) {
        const perimetro = Figura.calcularPerimetroTrapecio(
          parseFloat(baseMayor),
          parseFloat(baseMenor),
          parseFloat(lado1),
          parseFloat(lado2)
        );
        resultadoPerimetro = `El perímetro del trapecio es ${perimetro.toFixed(2)}`;
      }
    }
 
    res.render('trapecio', { resultadoArea, resultadoPerimetro, error });
  }
}
 
export default FiguraController;
 