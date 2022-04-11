const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const productsController = require('../../../controllers/productsController');
const productsService = require('../../../services/productsService');
const productsModel = require('../../../models/productsModel');

const fakeDataBase = [
  {
    id: 1,
    name: "Martelo de Thor",
    quantity: 10
  },
  {
    id: 2,
    name: "Traje de encolhimento",
    quantity: 20
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
    quantity: 30
  }
]

describe('Products Model', () => {
  describe('when getAll is requested', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([ fakeDataBase ])
    })
    after(() => {
      connection.execute.restore();
    })
    it('should return all products', async () => {
      const result = await productsModel.getAll();
      expect(result).to.be.equals(fakeDataBase);
    })
  })
})