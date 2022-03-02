const division = (a,b) =>{
    if(b ===0 || (typeof(a)!== 'number' || typeof(b)!=='number')){
        return "Invalid"
    }
    return a/b;
}
// console.log(division(5,3))

module.exports = {division}