const start = new Date().getTime();
const content = [];
for (let i = 0; i < 100000; i++) {
    content.push({
        id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        type: 'rootxxx',
        location: {
            x: 1000,
            y: 2000,
            prev: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            next: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            parent: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        },
        data: {
            content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        },
    });
}

const jsonStr = JSON.stringify(content);
const length = jsonStr.length;

console.log(length);

JSON.parse(jsonStr);

const end = new Date().getTime();
console.log(start, end, end - start);
