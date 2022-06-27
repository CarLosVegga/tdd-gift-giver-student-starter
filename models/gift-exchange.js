
const {ExpressError, BadRequestError, NotFoundError} = require("../utils/errors")


class GiftExchange{
    constructor(){}
    static pairs(names) {
        const paired = []
        if (names.length%2 !== 0) {
            throw new BadRequestError("The number of names should not be odd") 
        }
        else {
            shuffle(names)
            for (let i = 0; i < names.length; i+=2){
                paired.push([names[i], names[i+1]])
            }
            return paired
        }
    }
    static traditional(names) {
        let gifts = []
        const newNames = shuffle(names);
        for (let i=0; i < newNames.length-1; i++) {
            gifts.push(`${newNames[i]} is giving a gift to ${newNames[i+1]}`);
        }
        gifts.push(`${newNames[newNames.length-1]} is giving a gift to ${newNames[0]}`)
        return gifts;
    }
    // static traditional(names) {
    //     const paired = []
    //     shuffle(names)
    //     for (let i = 0; i < names.length; i++){
    //         if (i === names.length - 1) {
    //             paired.push(`${names[i]} is giving a gift to ${names[0]}`)
    //         }
    //         else {
    //             paired.push(`${names[i]} is giving a gift to ${names[i+1]}`)
    //         }   
    //     }
    //     return paired
    // }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  

module.exports = GiftExchange