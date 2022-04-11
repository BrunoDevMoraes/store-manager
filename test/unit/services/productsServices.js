const { expect } = require('chai');
const sinon = require('sinon');

const productsController = require('../../../controllers/productsController');
const productsService = require('../../../services/productsService');
const productsModel = require('../../../services/productsModel');

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

describe('Products Services', () => {
  describe('when asking for all products succeeds', () => {
    before(() => {
      sinon.stub(productsModel, 'getAll').resolves(fakeDataBase)
    })
    after(() => {
      productsModel.getAll.restore();
    })
    it('should return an array of products', async () => {
      const result = await productsService.getAll();
      expect(result).to.be.equals(fakeDataBase);
    })
  })
});