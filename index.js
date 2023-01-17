const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:23}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:24}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:23},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:22},
{name:'Carmen', job:'Marcy Lab School',language:'JavaScript', age:21},
{name:'Itzel', job:'Marcy Lab School',language:'JavaScript', age:22},
{name:'Ray', job:'Square Space',language:'JavaScript', age:21},
{name:'Jan', job:'Square Space',language:'JavaScript', age:22},
{name:'Uzma', job:'Thyme Care',language:'JavaScript', age:22}]

function averageAge(array) {
    return Math.round(array.reduce((accum, person) => accum + person.age, 0)/array.length)
    // let sum = 0;
    // for (let person of array) {
    //     sum += person.age
    // }
    // return Math.round(sum/array.length);
}

console.log(averageAge(alumni))

function orderedAlumni (array) {
    return array.sort((a, b) => b.age - a.age)
}

console.log(orderedAlumni(alumni))

function allUseJavaScript (array) {
    return array.every(e => e.language === 'JavaScript')
}

console.log(allUseJavaScript(alumni))
