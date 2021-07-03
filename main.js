var order = require('./InsertionOrder');
let result = order([
    { "id": 1, "parent_id": null, "name": 'Z' },
    { "id": 4, "parent_id": null, "name": 'A' },
    { "id": 2, "parent_id": 1, "name": 'H' },
    { "id": 8, "parent_id": 2, "name": 'G' },
    { "id": 5, "parent_id": 4, "name": 'M' },
    { "id": 6, "parent_id": 4, "name": 'N' },
    { "id": 3, "parent_id": 1, "name": 'Z' },
    { "id": 7, "parent_id": 2, "name": 'L' }
])
// result = result.slice(1,);
console.log("Output===>>", result);