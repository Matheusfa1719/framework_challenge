import { getDivisores, getDivisoresPrimos } from '../src/modules/decomposer/services';

describe('Check application services', () => {
    it('Decomposer should return array with divisors number from other number', () => {
      const divisores = getDivisores(45);
      expect(divisores).toEqual([1, 3, 5, 9, 15, 45])
    });

    it('Decompose should filter primes number for array', () => {
        const divisores = [1, 3, 5, 9, 15, 45];
        const primos = getDivisoresPrimos(divisores);
        expect(primos).toEqual([3, 5])
    });

  });