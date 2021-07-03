module.exports = function sortCategoriesForInsert(inputJson) {

    let map = { root: [] };

    for (let category of inputJson) {
        let parentId = null;
        if (category.parent_id != null)
            parentId = category.parent_id;

        if (parentId == null) {
            map.root.push({ ...category });
        }
        else if (map[category['parent_id']] === undefined) {
            map[category['parent_id']] = [{ ...category }];
        }
        else
            map[category['parent_id']].push({ ...category });
    }

    // console.log("==>>>map", map);

    function traverse(element) {
        let insertionOrder = [];
        if (element.id != 'root')
            insertionOrder.push({ ...element });
        if (map[element.id]) {
            for (let x of map[element.id]) {
                insertionOrder.push(...traverse(x));
            }
        }
        return insertionOrder;
    }

    return traverse({ id: 'root' });;
}