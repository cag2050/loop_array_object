let obj = {
    a: 'aaa',
    b: 'bbb',
    c: 'ccc'
}
for (let [key, value] of Object.entries(obj)) {
    console.log(key + ": '" + value + "'")
}