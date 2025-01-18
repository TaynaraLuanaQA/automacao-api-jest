const request = require('supertest');
const apiUrl = 'http://localhost:3000';

describe("Suíte de testes destinada as validações de cadastro de produtos.", ()=>{
    
    it("CE01: Cadastrando um novo produto...", async ()=>{
        const camposBodyProduto = {
            name: "Produto Teste",
            price: 19.99
        }

        const response = await request(apiUrl).post('/products').send(camposBodyProduto);
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe(camposBodyProduto.name);
        expect(response.body.price).toBe(camposBodyProduto.price);

        console.log(response.body)
    })
})