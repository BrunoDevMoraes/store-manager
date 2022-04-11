const { expect } = require('chai');
const sinon = require('sinon');

const productsController = require('../../../controllers/productsController');
const productsService = require('../../../services/productsService');
const productsModel = require('../../../models/productsModel');


describe('Products Controller', () => {
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

  const addProductAnswer = { "id": 1, "name": "produto", "quantity": 10 }

  const response = {};
  const request = {};

  const requestById = {params: {id: 1}};

  const requestAddProduct = {body: { "name": "produto", "quantity": 10 }};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);
    response.send = sinon.stub().returns(response);
  })

  describe('when getAll is requested', () => {
    before(() => {
      sinon.stub(productsService, 'getAll').resolves(fakeDataBase);
    })
    after(() => {
      productsService.getAll.restore();
    })
    it('should execute right status and json', async () => {
      await productsController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith(fakeDataBase)).to.be.equal(true);
    })
  })

  describe('when getById is requested', () => {
    before(() => {
      sinon.stub(productsService, 'getById').resolves(fakeProduct);
    })
    after(() => {
      productsService.getById.restore();
    })
    it('should execute right status and json', async () => {
      await productsController.getById(requestById, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith(fakeProduct)).to.be.equal(true);
    })
  })

  describe('when addProduct is requested', () => {
    before(() => {
      sinon.stub(productsService, 'addProduct').resolves(addProductAnswer);
    })
    after(() => {
      productsService.addProduct.restore();
    })
    it('should execute right status and json', async () => {
      await productsController.addProduct(requestAddProduct, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
      expect(response.json.calledWith(addProductAnswer)).to.be.equal(true);
    })
  })
})