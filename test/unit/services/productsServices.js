const { expect } = require('chai');
const sinon = require('sinon');

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

const fakeProduct = {
  id: 1,
  name: "Martelo de Thor",
  quantity: 10
}


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
  describe('when asking for a product by its id succeeds', () => {
    before(() => {
      sinon.stub(productsModel, 'getById').resolves(fakeProduct)
    })
    after(() => {
      productsModel.getById.restore();
    })
    it('should return an array of products', async () => {
      const result = await productsService.getById(1);
      expect(result).to.be.equals(fakeProduct);
    })
  })
  describe('when asking for addProduct succeeds', () => {
    before(() => {
      sinon.stub(productsModel, 'checkProduct').resolves([])
      sinon.stub(productsModel, 'addProduct').resolves(fakeProduct)
    })
    after(() => {
      productsModel.addProduct.restore();
    })
    it('should return an array of products', async () => {
      const result = await productsService.addProduct(fakeProduct.name, fakeProduct.quantity);
      expect(result).to.be.equals(fakeProduct);
    })
  })
});