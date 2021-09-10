// 题目：https://leetcode-cn.com/problems/lru-cache/
// ----------------------------------双向链表----------------------------------
// 解析：https://leetcode-cn.com/problems/lru-cache/solution/bu-yong-yu-yan-nei-jian-de-map-gua-dang-feng-zhuan/
class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.hash = {};
        this.count = 0;
        this.dummyHead = new ListNode();
        this.dummyTail = new ListNode();
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }
    get(key) {
        let node = this.hash[key];
        if (node === undefined) return -1;
        this.moveToHead(node);
        return node.value;
    }
    put(key, value) {
        let node = this.hash[key];
        if (node === undefined) {
            if (this.count == this.capacity) {
                this.removeLRUItem();
            }
            let newNode = new ListNode(key, value);
            this.hash[key] = newNode;
            this.addToHead(newNode);
            this.count++;
        } else {
            node.value = value;
            this.moveToHead(node);
        }
    }
    moveToHead(node) {
        this.removeFromList(node);
        this.addToHead(node);
    }
    removeFromList(node) {
        [node.next.prev, node.prev.next] = [node.prev, node.next];
    }
    addToHead(node) {
        [node.next, node.prev] = [this.dummyHead.next, this.dummyHead];
        [this.dummyHead.next.prev, this.dummyHead.next] = [node, node];
    }
    removeLRUItem() {
        let tail = this.popTail();
        delete this.hash[tail.key];
        this.count--;
    }
    popTail() {
        let tail = this.dummyTail.prev;
        this.removeFromList(tail);
        return tail;
    }
}
// ----------------------------------使用Map模拟----------------------------------
var LRUCache = function (capacity) {
    this.cache = new Map();
    this.capacity = capacity;
};

LRUCache.prototype.get = function (key) {
    //存在就更新
    if (this.cache.has(key)) {
        let tmp = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, tmp);
        return tmp;
    }
    return -1;
};

LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        // 存在即更新（删除后加入）
        this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
        // 不存在即加入
        // 缓存超过最大值，则移除最近没有使用的，this.cache.keys()返回的是新的Iterator对象，包含按照顺序插入Map对象中的每个元素的key值；
        this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
};