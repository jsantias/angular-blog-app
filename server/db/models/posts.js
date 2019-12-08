module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('posts', {
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING,
    },
    subjectURL: {
      type: DataTypes.STRING
    }
  });
  return Post;
}