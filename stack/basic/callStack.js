const func1 = () => {
    func2();
};
const func2 = () => {
    func3();
};
const func3 = () => { };

// 调试时关注调用堆栈
func1();
