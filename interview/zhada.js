function steal(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    const func = (arr) => {
        let prevMax = 0
        let currMax = 0
        for (const num of arr) {
            const temp = currMax
            currMax = Math.max(prevMax + num, currMax)
            prevMax = temp
        }
        return currMax
    }
    const case1 = func(nums.slice(0, -1))
    const case2 = func(nums.slice(1))
    return Math.max(case1, case2)
}

// 测试示例
console.log(steal([2, 3, 2]))    // 输出: 3
console.log(steal([1, 2, 3, 1])) // 输出: 4
console.log(steal([1, 2, 3]))     // 输出: 3




function canMeasureWater(x, y, target) {
    // 边界条件：如果 target 是 0，直接返回 true
    if (target === 0) return true;
    // 如果目标水量超过两个壶的总容量，不可能实现
    if (target > x + y) return false;

    // 计算 x 和 y 的最大公约数（gcd）
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const divisor = gcd(x, y);

    // 检查 target 是否是 gcd 的倍数
    return target % divisor === 0;
}

// 测试示例
console.log(canMeasureWater(3, 5, 4));  // true (gcd(3,5)=1, 4%1=0)
console.log(canMeasureWater(2, 6, 5));  // false (gcd(2,6)=2, 5%2≠0)
console.log(canMeasureWater(1, 2, 3));  // true (gcd(1,2)=1, 3%1=0)
