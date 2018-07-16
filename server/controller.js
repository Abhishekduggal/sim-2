module.exports = {
  get: (req, res) => {
    const db = req.app.set("db");

    db.get_houses()
      .then(houses => {
        res.status(200).send(houses);
      })
      .catch(err => res.status(500).send(err));
  },
  add: (req, res) => {
    const db = req.app.set("db");
    let { name, address, city, state, zip, img, mortgage, rent } = req.body;

    db.add_house(
      name,
      address,
      city,
      state,
      parseInt(zip),
      img,
      parseInt(mortgage),
      parseInt(rent)
    )
      .then(home => {
        res.status(200).send(home);
      })
      .catch(err => res.status(500).send(err));
  },
  deleteHome: (req, res) => {
    const db = req.app.set("db");
    let { id } = req.params;

    db.delete_house(parseInt(id))
      .then(house => {
        res.status(200).send(house);
      })
      .catch(err => res.status(500).send(err));
  }
};
