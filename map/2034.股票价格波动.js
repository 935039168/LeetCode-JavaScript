// 题解1 ============================================================================================================
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

// 题解2 ============================================================================================================
// 链接：https://leetcode-cn.com/problems/stock-price-fluctuation/solution/zhou-sai-t3-by-lianxin-9ymv/
class Heap {
	constructor(data, compare) {
		this.data = data;
		this.compare = compare;

		for (let i = (data.length >> 1) - 1; i >=0 ; i--) {
			this.heapify(i);
		}
	}
	heapify(index) {
		let target = index;
		let left = index * 2 + 1;
		let right = index * 2 + 2;
		if (left < this.data.length && this.compare(this.data[left], this.data[target])) {
			target = left;
		}
		if (right < this.data.length && this.compare(this.data[right], this.data[target])) {
			target = right;
		}
		if (target !== index) {
			this.swap(target, index);
			this.heapify(target);
		}
	}
	swap(l, r) {
		let data = this.data;
        
        let tmp = data[r].index;
        data[r].index = data[l].index;
        data[l].index = tmp;

		[data[l], data[r]] = [data[r], data[l]];
        
	}
	push(item) {
		this.data.push(item);
		let index = this.data.length - 1;
        item.index = index;
        this.upperFix(index);
	}
    // 向上维护堆  正常板子里不会把这段逻辑拆出来  都是方法push方法里，  因为平时不做更新堆中某个节点的操作...
    upperFix(index) {
        let father = ((index + 1) >> 1) - 1;
		while (father >= 0) {
			if (this.compare(this.data[index], this.data[father])) {
				this.swap(index, father);
				index = father;
				father = ((index + 1) >> 1) - 1;
			} else {
				break;
			}
		}
    }
	pop() {
		this.swap(0, this.data.length - 1);
		let ret = this.data.pop();
		this.heapify(0);
		return ret;
	}
}

var StockPrice = function() {
    // current
    this.price = 0;
    this.timeStamp = 0;
    
    // {2 : {timeStamp:2, price: 100}};
    this.mapLow = {};
    this.mapHigh = {};

    // 小顶堆
    this.lower = new Heap([], (lower, higher) => {
		if (lower.price <= higher.price) {
			return true;
		} else {
			return false;
		}
	});
    // 大顶堆
    this.higher = new Heap([], (lower, higher) => {
		if (lower.price >= higher.price) {
			return true;
		} else {
			return false;
		}
	});
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
	// 维护current
    if (timestamp >= this.timeStamp) {
        this.price = price;
        this.timeStamp = timestamp;
    }
    
    if (this.mapLow[timestamp] == void 0) {
        // 新增小顶堆
        let instance = {
            timestamp,
            price,
        }
        this.mapLow[timestamp] = instance;
        this.lower.push(instance);
		
		// 新增大顶堆
        instance = {
            timestamp,
            price,
        }
        this.mapHigh[timestamp] = instance;
        this.higher.push(instance); 
    } else {
        // 更新小顶堆
        let instance = this.mapLow[timestamp];
        instance.price = price;
		// 向下维护
        this.lower.heapify(instance.index);
		// 向上维护
        this.lower.upperFix(instance.index);
        
		// 更新大顶堆
        instance = this.mapHigh[timestamp];
        instance.price = price;
		// 向下维护
        this.higher.heapify(instance.index);
		// 向上维护
        this.higher.upperFix(instance.index);
    }
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
    return this.price;
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
    return this.higher.data[0].price;
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
    return this.lower.data[0].price;
};

// 题解3 ============================================================================================================

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function (timestamp, price) {
    if (timestamp >= this.timeStamp) {
        this.price = price;
        this.timeStamp = timestamp;
    }

    if (this.mapLow[timestamp] == void 0) {
        // 新增
        let instance = {
            timestamp,
            price,
        }
        this.mapLow[timestamp] = instance;
        this.lower.push(instance);

        instance = {
            timestamp,
            price,
        }
        this.mapHigh[timestamp] = instance;
        this.higher.push(instance);
    } else {
        // 更新
        let instance = this.mapLow[timestamp];
        instance.price = price;

        this.lower.heapify(instance.index);
        this.lower.upperFix(instance.index);

        instance = this.mapHigh[timestamp];
        instance.price = price;

        this.higher.heapify(instance.index);
        this.higher.upperFix(instance.index);

    }
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function () {
    return this.price;
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function () {
    return this.higher.data[0].price;
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function () {
    return this.lower.data[0].price;
};