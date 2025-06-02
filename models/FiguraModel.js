export class Figura {
  static calcularAreaRectangulo(base, altura) {
    return base * altura;
  }
 
  static calcularPerimetroRectangulo(base, altura) {
    return 2 * (base + altura);
  }
 
  static calcularAreaRombo(D, d) {
    return (D * d) / 2;
  }
 
  static calcularPerimetroRombo(lado) {
    return 4 * lado;
  }
 
  static calcularAreaTrapecio(baseMayor, baseMenor, altura) {
    return ((baseMayor + baseMenor) * altura) / 2;
  }
 
  static calcularPerimetroTrapecio(baseMayor, baseMenor, lado1, lado2) {
    return baseMayor + baseMenor + lado1 + lado2;
  }
 
  // Utilidad para validación
  static validarNumerosPositivos(campos) {
    for (const [nombre, valor] of Object.entries(campos)) {
      const numero = parseFloat(valor);
      if (isNaN(numero) || numero <= 0) {
        return `El valor de "${nombre}" debe ser un número positivo.`;
      }
    }
    return null;
  }
}