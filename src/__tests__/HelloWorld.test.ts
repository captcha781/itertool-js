import { HelloWorld } from '../index';
test('My Greeter', () => {
    expect(HelloWorld('Carl')).toBe('Hello Carl');
});