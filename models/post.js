const uuid = require('uuid')

class Post{
    constructor(name,content,comment = [],id = uuid.v4()){
        this.name = name
        this.content = content
        this.comment = comment
        this.postId = id
    }
}

module.exports = Post