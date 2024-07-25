// https://coderun.yandex.ru/problem/yandexformers?currentPage=1&difficulty=EASY&groups=frontend&pageSize=20
function Func (N, staff, K) {
    const res = staff.reduce((acc, i) => {
        if (acc.hasOwnProperty(i)) {
            acc[i] += 1;
        } else {
            acc[i] = 1;
        }

        return acc;
    }, {})
    debugger
    let dev_remains = K;
    let sum = 0;
    let keys = Object.keys(res);
    let i = 1

    while (dev_remains > 0) {
        let current_level = keys[keys.length - i]
        let current_count = res[keys[keys.length - i]]

        if (current_count >= dev_remains) {
            sum += dev_remains * current_level
            dev_remains -= dev_remains
        } else {
            sum += current_count * current_level
            dev_remains -= current_count
        }
        i++;

    }

    console.log(sum)

}


Func(8,  [5, 13, 8, 4, 4, 15, 1, 9], 8)


