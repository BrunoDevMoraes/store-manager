const { expect } = require('chai');
const sinon = require('sinon');

const productsController = require('../../../controllers/productsController');
const productsService = require('../../../services/productsService');
const productsModel = require('../../../models/productsModel');


describe('Products Model', () => {
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
  const response = {};
  const request = {};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);
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
})