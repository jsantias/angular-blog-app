/* 
* Save new post in the db
*
* params 
*   @postModel - the defined postModel
*   @data - Object containing title, body, category, and subject URL
*/
function createPost(postModel, data) {
  return new Promise(async (resolve, reject) => {
    postModel.create({
      title: data.title,
      body: data.body,
      category: data.category,
      subjecturl: data.subjecturl
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error);
    })
  })
}

/* 
* Returns all posts from the db
*
* params
*   @userModel - the defined userModel
*   @email - user's email/username
*/
async function getPosts(postModel) {
  // Find all posts
  const posts = await postModel.findAll();

  if (posts.length == 0) {
    throw new Error('No user with the email provided');
  }
  return posts[0].dataValues;
}

module.exports =
  {
    createPost,
    getPosts
  }