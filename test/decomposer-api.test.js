import request from 'supertest';
import app from '../src/shared/http/server';

describe('Integration test API Decomposer', () => {
    it('/decomposer/:number', async () => {
        await request(app).get('/decomposer/10').expect(200);
    });

    it('check invalid number', async () => {
        await request(app).get('/decomposer/aaa').expect(400);
    });
})