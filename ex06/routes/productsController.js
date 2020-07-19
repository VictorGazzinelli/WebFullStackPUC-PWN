let items = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Product1 description',
        price: 19.00
    }
];

module.exports = {
    get(_, res) {
        res.json({items});
    },
    getById(req, res) {
        if (!req.params.id) {
            res.json({ error: 'Should receive an id' })
        }

        let item = items.find(product => product.id === req.params.id)
        res.json({ item })
    },
    insert(req, res){
        if (!req.body.name || req.body.name === "") {
            res.json({ error: 'Should receive an valid name' })
            return;
        }
        if (!req.body.description || req.body.description.length < 10) {
            res.json({ error: 'Should receive an valid description' })
            return;
        }
        if (!req.body.price || req.body.price < 0) {
            res.json({ error: 'Should receive an valid price' })
            return;
        }
        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
        const id = items.length + 1

        const product = {
            id,
            name,
            description,
            price,
        }

        items.push(product)

        res.json({id});
    }
};
