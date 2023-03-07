const mensaje1 = ' Prueba de test   ';
const mensaje2 = mensaje1.trim();

test('Comparación de constantes', () => {
    expect(mensaje1).toBe(' Prueba de test   ');
    expect(mensaje2).toBe('Prueba de test');
  });
