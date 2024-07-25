let store = []
let initial = null
function undoRedo(object) {
    if(initial===null){
        store.push({'init' : {...object}})
    }

    return {
        set: function(key, value) {
            object[key] = value
            store.push({'set': {...object}})

        },
        get: function(key) {
            return object[key]
        },
        del: function(key) {
            delete object[key]
            store.push({'del':{...object}})
        },
        undo: function() {
            if(store.length !== 1){
                object = store[store.length - 2]
                store.push({'undo':store[store.length - 2]})
            }else {
                return false
            }

        },
        redo: function() {}

    };

}

let obj = {
    x: 1,
    y: 2
};
let unRe = undoRedo(obj);
unRe.set('y', 10);
unRe.undo();
console.log(store)
// unRe.del('x');