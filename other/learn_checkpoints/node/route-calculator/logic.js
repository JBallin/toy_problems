const calculate = ({num1, operator, num2}) => {
  const [n1, n2] = [num1, num2].map(Number);
  if (Number.isNaN(n1 + n2)) throw { status: 400, message: `"${num1}" and/or "${num2}" is not a number` };
  switch(operator) {
    case 'plus': return n1 + n2
    case 'minus': return n1 - n2
    case 'times': return n1 * n2
    case 'over': return n1 / n2
    default: throw { status: 400, message: 'Invalid operator. Options: plus, minus, times, over' };
  };
};

module.exports = calculate;
