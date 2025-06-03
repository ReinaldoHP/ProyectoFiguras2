import FiguraController from '../controllers/FiguraController.js';
import { Figura } from '../models/FiguraModel.js';

// Mock de la clase Figura
jest.mock('../models/FiguraModel.js');

describe('FiguraController', () => {
  let controller;
  let mockReq, mockRes;

  beforeEach(() => {
    controller = new FiguraController();
    mockRes = {
      render: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
    
    // Resetear mocks antes de cada test
    Figura.mockClear();
  });

  describe('calcularRectangulo', () => {
    it('debería calcular el área correctamente', () => {
      mockReq = {
        body: { base: '5', altura: '3', tipoOperacion: 'area' }
      };
      
      Figura.validarNumerosPositivos.mockReturnValue(null);
      Figura.calcularAreaRectangulo.mockReturnValue(15);

      controller.calcularRectangulo(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith('rectangulo', {
        resultadoArea: 'El área del rectángulo es 15.00',
        resultadoPerimetro: null,
        error: null
      });
    });

    it('debería manejar errores de validación', () => {
      mockReq = {
        body: { base: '-5', altura: '3', tipoOperacion: 'area' }
      };
      
      Figura.validarNumerosPositivos.mockReturnValue('Error de validación');

      controller.calcularRectangulo(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith('rectangulo', {
        resultadoArea: null,
        resultadoPerimetro: null,
        error: 'Error de validación'
      });
    });
  });

  describe('calcularRombo', () => {
    it('debería calcular el perímetro correctamente', () => {
      mockReq = {
        body: { D: '8', d: '6', lado: '5', tipoOperacion: 'perimetro' }
      };
      
      Figura.validarNumerosPositivos.mockReturnValue(null);
      Figura.calcularPerimetroRombo.mockReturnValue(20);

      controller.calcularRombo(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith('rombo', {
        resultadoArea: null,
        resultadoPerimetro: 'El perímetro del rombo es 20.00',
        error: null
      });
    });
  });

  describe('calcularTrapecio', () => {
    it('debería calcular el área y perímetro correctamente', () => {
      // Test para área
      mockReq = {
        body: { 
          baseMayor: '10', 
          baseMenor: '6', 
          altura: '4', 
          tipoOperacion: 'area' 
        }
      };
      
      Figura.validarNumerosPositivos.mockReturnValue(null);
      Figura.calcularAreaTrapecio.mockReturnValue(32);

      controller.calcularTrapecio(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith('trapecio', {
        resultadoArea: 'El área del trapecio es 32.00',
        resultadoPerimetro: null,
        error: null
      });

      // Test para perímetro
      mockReq = {
        body: { 
          baseMayor: '10', 
          baseMenor: '6', 
          lado1: '5', 
          lado2: '5', 
          tipoOperacion: 'perimetro' 
        }
      };
      
      Figura.calcularPerimetroTrapecio.mockReturnValue(26);

      controller.calcularTrapecio(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith('trapecio', {
        resultadoArea: null,
        resultadoPerimetro: 'El perímetro del trapecio es 26.00',
        error: null
      });
    });
  });

  // Pruebas adicionales para cobertura completa
  describe('Validación de entradas', () => {
    it('debería manejar valores no numéricos', () => {
      mockReq = {
        body: { base: 'abc', altura: '3', tipoOperacion: 'area' }
      };
      
      Figura.validarNumerosPositivos.mockReturnValue('Valor inválido');

      controller.calcularRectangulo(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith('rectangulo', {
        resultadoArea: null,
        resultadoPerimetro: null,
        error: 'Valor inválido'
      });
    });
  });
});