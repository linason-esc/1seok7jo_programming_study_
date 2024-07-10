function solution(numbers) {
    const map = new Map([
        ['zero', '0'],
        ['one', '1'],
        ['two', '2'],
        ['three', '3'],
        ['four', '4'],
        ['five', '5'],
        ['six', '6'],
        ['seven', '7'],
        ['eight', '8'],
        ['nine', '9']
    ]);

    for (let [key, value] of map) {
        const regex = new RegExp(key, 'g');
        numbers = numbers.replace(regex, value);
    }

    return parseInt(numbers, 10);
}

