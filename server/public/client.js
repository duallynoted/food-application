console.log('js');

let foodApp = angular.module('FoodApp', [])
let foods = [
    {name:'cereal', deliciousness: 75 },
    {name:'beer', deliciousness: 80 },
    {name:'cheese', deliciousness: 95 }];

foodApp.controller('WelcomeController', function () {
    let self = this

    self.foods = foods;
    self.inputFood = ''
    self.foodRating = ''
    self.ready = function () {

        foods.push()
        console.log('angular is ready', foods);
    }
})
