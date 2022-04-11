const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const salesController = require('../../../controllers/salesController');
const salesService = require('../../../services/salesService');
const salesModel = require('../../../models/salesModel');

const answerAll = [
  {
    sale_id: 1,
    date: '2022-04-11T14:29:56.000Z',
    product_id: 1,
    quantity: 5
  },
  {
    sale_id: 1,
    date: '2022-04-11T14:29:56.000Z',
    product_id: 2,
    quantity: 10
  },
  {
    sale_id: 2,
    date: '2022-04-11T14:29:56.000Z',
    product_id: 3,
    quantity: 15
  }
]

const serializedAnswer = [
  {
      "saleId": 1,
      "date": "2022-04-11T14:29:56.000Z",
      "productId": 1,
      "quantity": 5
  },
  {
      "saleId": 1,
      "date": "2022-04-11T14:29:56.000Z",
      "productId": 2,
      "quantity": 10
  },
  {
      "saleId": 2,
      "date": "2022-04-11T14:29:56.000Z",
      "productId": 3,
      "quantity": 15
  }
]

describe('Sales Model', () => {
  describe('when getAll is requested', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([ answerAll ])
    })
    after(() => {
      connection.execute.restore();
    })
    it('should return all sales', async () => {
      const result = await salesModel.getAll();
      expect(result).to.be.deep.equal(serializedAnswer);
    })
  })
})