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

const fakeProduct = {
  id: 1,
  name: "Martelo de Thor",
  quantity: 10
}

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
  describe('when getById is requested', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([[ fakeProduct ]])
    })
    after(() => {
      connection.execute.restore();
    })
    it('should return all products', async () => {
      const result = await productsModel.getById(1);
      expect(result).to.be.equals(fakeProduct);
    })
  })
  describe('when addProduct is requested', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 1 }])
    })
    after(() => {
      connection.execute.restore();
    })
    it('should add a new product', async () => {
      const result = await productsModel.addProduct(fakeProduct.name, fakeProduct.quantity);
      expect(result).to.be.deep.equal(fakeProduct);
    })
  })
})