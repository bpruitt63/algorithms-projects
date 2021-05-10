function curriedAdd(total) {
    let tot = total || 0;
    if (!total) return tot;
    return function add(total) {
        if (!total) return tot;
        tot += total;
        return add;
    };
};


module.exports = { curriedAdd };
