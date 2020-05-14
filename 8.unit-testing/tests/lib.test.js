const lib = require('../lib');

describe('absolute', () => {
  it('should return positive number if input is positive', () => {
    const result = lib.absolute(10);
    expect(result).toBe(10);
  });

  it('should return positive number if input is negative', () => {
    const result = lib.absolute(-10);
    expect(result).toBe(10);
  });

  it('should return 0 number if input is 0', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe('greet', () => {
  it('should return the greeting message', () => {
    const result = lib.greet('Jimmy');
    expect(result).toMatch(/Jimmy/); //! using regex
    // expect(result).toContain('Jimmy'); //! this would work too
  });
});

describe('getCurrencies', () => {
  it('should return supported currencies', () => {
    const result = lib.getCurrencies();
    //! Too general:
    expect(result).toBeDefined();
    expect(result).not.toBeNull();
    //! Too specific:
    expect(result[0]).toBe('USD');
    expect(result[1]).toBe('AUD');
    expect(result[2]).toBe('EUR');
    expect(result.length).toBe(3);
    //* Proper way
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
    //* Ideal way
    expect(result).toEqual(expect.arrayContaining(['USD', 'AUD', 'EUR']));
  });
});

describe('getProduct', () => {
  it('should return the product with the given id', () => {
    const result = lib.getProduct(1);
    expect(result).toEqual({ id: 1, price: 10 }); //! must exactly equal object
    expect(result).toMatchObject({ id: 1, price: 10 }); //! passes as long as these values exist in the received obj
    expect(result).toHaveProperty('id', 1);
  });
});

describe('registerUsername', () => {
  it('should throw if username is falsy', () => {
    const args = [null, undefined, NaN, '', 0, false];
    args.forEach((a) => {
      expect(() => {
        lib.registerUsername(a);
      }).toThrow();
    });
  });
  it('should return a user object if valid username is passed', () => {
    const result = lib.registerUser('Jimmy');
    expect(result).toMatchObject({ username: 'Jimmy' });
    expect(result.id).toBeGreaterThan(0);
  });
});
