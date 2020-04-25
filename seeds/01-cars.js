
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car').insert([
        {VIN:'1C4HJXDN4LW267481', Make:'Jeep ', Model:'Wrangler', Mileage:'0', Transmission:'8-Speed Automatic', Title:'clean' },
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'}
      ]);
    });
};
