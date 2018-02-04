let obj = {
    a: 'aaa',
    b: 'bbb',
    c: 'ccc'
}
for (let key of Object.keys(obj)) {
    console.log(key + ": '" + obj[key] + "'")
}