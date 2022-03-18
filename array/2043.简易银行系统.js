/**
 * @param {number[]} balance
 */
var Bank = function (balance) {
    this.balance = balance;
    this.n = balance.length;
};
Bank.prototype.check = function (account) {
    return account > 0 && account <= this.n;
};
/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function (account1, account2, money) {
    if (this.check(account1) && this.check(account2) &&
        money <= this.balance[account1 - 1]) {
        this.balance[account1 - 1] = this.balance[account1 - 1] - money;
        this.balance[account2 - 1] = this.balance[account2 - 1] + money;
        return true;
    }
    return false;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function (account, money) {
    if (!this.check(account)) return false;
    this.balance[account - 1] += money;
    return true;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function (account, money) {
    if (this.check(account) && money <= this.balance[account - 1]) {
        this.balance[account - 1] -= money;
        return true;
    }
    return false;
};

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */

// ["Bank","deposit","transfer","transfer"]
// [[[0]],[1,2],[1,1,1],[1,1,3]]
