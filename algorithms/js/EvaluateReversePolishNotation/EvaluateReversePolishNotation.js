/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    const queue = [];
    const operators = ['+', '-', '*', '/'];
    for (const c of tokens) {
        if (c >= -200 && c <= 200) {
            queue.push(c);
        } else {
            let num2 = parseInt(queue.pop());
            let num1 = parseInt(queue.pop());
            if (c === '+') {
                queue.push(num1 + num2);
            } else if (c === '-') {
                queue.push(num1 - num2);
            } else if (c === '*') {
                queue.push(num1 * num2);
            } else if (c === '/') {
                queue.push(Math.trunc(num1 / num2));
            }
        }
    }
    return queue[0];
};