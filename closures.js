function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

const first = a()()()
consol.log(first)


const boo = string => name => name2 => console.log(`${string} ${name} ${name2}`)
boo('hey')('tim')('david')
// output:  hey tim david

function callMeMaybe() {
    const callMe = 'Hey there I am now here!'
    setTimeout(function () {  // this is the closure
        console.log(callMe)
    }, 4000)
}
callMeMaybe();
