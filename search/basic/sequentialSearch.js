// 顺序搜索
Array.prototype.sequentialSearch = function (item) {
    for (let i = 0; i < this.length; ++i) {
        if(this[i] === item){
            return i;
        }
    }
    return -1;
};

const res = [5, 6, 10, 232, 4, 3, 2, 1, 0, -1].sequentialSearch(0);
console.log(res);
