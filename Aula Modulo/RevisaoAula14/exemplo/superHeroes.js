const superHeroes = 
[
  {
      name: "Wonder Woman",
      power: "Super Strength",
      greeting: function ()
        {
        return "Hello, I'm the" + this.name;
        }
  },
      {
      name: "Iron Man",
      power: "Super Rich",
      greeting: function ()
      {
       return "Hello, I'm the" + this.name;
      }
  }

];

module.exports = superHeroes;
