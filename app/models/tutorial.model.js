module.exports = (sequelize, Sequelize) => {
    const my_joke = sequelize.define("my_joke", {
      title: {
        joke: Sequelize.STRING
      },
      description: {
        punchline: Sequelize.STRING
      },
      });
  
    return Tutorial;
  };