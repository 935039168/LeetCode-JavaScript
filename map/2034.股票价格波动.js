var StockPrice = function () {
    this.map = new Map();
    this.cur = 0;
    this.max = null;
    this.min = null;
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function (timestamp, price) {
    if (timestamp > this.cur) this.cur = timestamp;
    const oldVal = this.map.get(timestamp) === undefined ? 0 : this.map.get(timestamp);
    // 如果是更新操作
    if (oldVal !== 0) {
        // 如果修改位置的值时最值，则将最值设为空
        if (oldVal === this.max) this.max = null;
        if (oldVal === this.min) this.min = null;
    }
    // 如果是第一组数据或可判断出是最值，则更新最值
    if (this.map.length = 0 || (this.max !== null && price > this.max)) this.max = price;
    if (this.map.length = 0 || (this.min !== null && price < this.min)) this.min = price;
    this.map.set(timestamp, price);
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function () {
    return this.map.get(this.cur);
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function () {
    if (this.max !== null) return this.max;
    // 通过遍历获取最值
    let res = 0;
    for (const [key, val] of this.map) {
        if (res < val) res = val;
    }
    this.max = res;
    return res;
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function () {
    if (this.min !== null) return this.min;
    // 通过遍历获取最值
    let res = Infinity;
    for (const [key, val] of this.map) {
        if (res > val) res = val;
    }
    this.min = res;
    return res;
};

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */