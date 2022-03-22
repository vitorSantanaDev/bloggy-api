import Post from '../models/Post'
import User from '../models/User'

class PostController {
  async store(request, response) {
    const { title, subtitle, tags, cover, content } = request.body

    const post = await Post.create({
      title,
      subtitle,
      tags,
      cover,
      content,
      user: request.userId
    })

    await post.save()

    const user = await User.findOne({ _id: request.userId })
    user.posts.push(post)
    await user.save()

    return response.status(201).json(post)
  }

  async indexAll(request, response) {
    const posts = await Post.find()
    return response.status(200).json(posts)
  }

  async index(request, response) {
    const posts = await Post.find({ user: request.params.userId })
    return response.status(200).json(posts)
  }
}

export default new PostController()
