const chai = require('chai');
chai.use(require('chai-json-schema'));
const expect = chai.expect;

const { get, getById, insert } = require('../../routes/productsController');

const res = {
    jsonCalledWith: {},
    json(arg) {
        this.jsonCalledWith = arg
    }
}

let productSchema = {
    title: 'productSchema',
    type: 'object',
    required: ['id', 'name', 'description', 'price'],
    properties: {
      id: {
        type: 'number',
      },
      name: {
        type: 'string'
      },
      description: {
        type: 'string',
      },
      price: {
        type: 'number',
      },
    }
  };

describe('Products Route', function() {

    describe('get() function', function() {
        it('should return an array of products ', function() {
            let req = {
                body: {},
                params: {},
            };
            get(req, res);
            expect(res.jsonCalledWith).to.be.have.key('items');
            expect(res.jsonCalledWith.items).to.be.an('array');
            res.jsonCalledWith.items.forEach(product => expect(product).to.be.jsonSchema(productSchema));
        });
    });

    describe('getById() function', function() {
        it('should return a product when given a valid id ', function() {
            let req = {
                body: {},
                params: {id: 1},
            };
            getById(req, res);
            expect(res.jsonCalledWith).to.be.have.key('item');
            expect(res.jsonCalledWith.item).to.be.jsonSchema(productSchema);
        });
    });

    describe('insert() function', function() {

        it('should insert a product and return a valid id ', function() {
            let req = {
                body: {
                    name: 'Javascript for dummies',
                    description: 'A book about programming',
                    price: 20.99
                },
                params: {},
            };
            insert(req, res);
            expect(res.jsonCalledWith).to.be.have.key('id');
            expect(res.jsonCalledWith.id).to.be.a('number');
            req = {
                body: {},
                params: {id : res.jsonCalledWith.id},
            }
            getById(req, res);
            expect(res.jsonCalledWith).to.be.have.key('item');
            expect(res.jsonCalledWith.item).to.be.jsonSchema(productSchema);
        });

        it('should return error message on description.length < 10 ', function() {
            let req = {
                body: {
                    name: 'Javascript for dummies',
                    description: '123456789',
                    price: 20.99
                },
                params: {},
            };
            insert(req, res);
            expect(res.jsonCalledWith).to.be.have.key('error');
        });

        it('should return error message on price <= 0', function() {
            let req = {
                body: {
                    name: 'Javascript for dummies',
                    description: 'A book about programming',
                    price: 0
                },
                params: {},
            };
            insert(req, res);
            expect(res.jsonCalledWith).to.be.have.key('error');
        });

    });
    

});