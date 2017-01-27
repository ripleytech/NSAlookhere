info = [
  {firstname: 'christian', dinner: 'snacks'},
  {firstname: 'alex', dinner: 'pizza'},
  {firstname: 'charlie', dinner: 'burrito'},
  {firstname: 'joshua', dinner: 'nothing'},
  {firstname: 'alden', dinner: 'club mate'},
  {firstname: 'sea', dinner: 'spanakopita'},
  {firstname: 'tamara', dinner: ''},
  {firstname: 'lauren', dinner: 'veggie burrito'},
  {firstname: 'colin', dinner: 'sardines + avocado'},
  {firstname: 'lark', dinner: 'quinoa + greens'}
  {firstname: 'ripley', dinner: 'kale + figs'}
]

var eat = function(info){
  Object.keys(info).forEach(function(meal){
    var food = info[meal];
    console.log(food.firstname + ' ate ' + food.dinner + ' for dinner!' );
  })
}
eat(info);
