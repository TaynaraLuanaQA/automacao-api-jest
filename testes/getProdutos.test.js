const request = require('supertest');
const apiUrl = 'http://localhost:3000';

describe("Suíte de testes destinada as validações de consulta de produtos.", ()=>{
    it("CE01: Ao consultar a api de produtos sem passar nenhum parâmetro, então deve retornar todos os produtos.", async ()=>{
        const response = await request(apiUrl).get('/products');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        console.log(response.body)
    })
})