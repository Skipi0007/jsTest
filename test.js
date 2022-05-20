let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

let filter = (mass, params) => {
let resutMass = []
    if (params[0] === null && params[1] != null){
        mass.forEach(element => {
            if (element.prices[0] != null && element.prices[0] <= params[1]){
                resutMass.push(element)
            } else if (element.prices[1] != null && element.prices[1] <= params[1]) {
                resutMass.push(element)
            } else if (element.prices[0] === null) {
                resutMass.push(element)
            }  else {}
        })

    } else if (params[1] === null && params[0] != null) {
        mass.forEach(element => {
        if (element.prices[0] != null && element.prices[0] >= params[0]){
            resutMass.push(element)
        } else if (element.prices[1] != null && element.prices[1] >= params[0]) {
            resutMass.push(element)
        } else {}
        })
    } else if (params[1] != null && params[0] != null) {
        mass.forEach(element => {
        if (element.prices[0] != null && element.prices[1] != null && element.prices[0] >= params[0] && element.prices[1] <= params[1]){
                resutMass.push(element)
        } else if (element.prices[0] != null && element.prices[0] >= params[0] && element.prices[0] <= params[1]) {
                resutMass.push(element)
        } else {}
    })
    
    } else {
        console.log('значения не указаны')
    }
    return(resutMass.sort((a, b) => a.prices[0] - b.prices[0]))
}

console.log(filter(courses, requiredRange1))
console.log(filter(courses, requiredRange2))
console.log(filter(courses, requiredRange3))
