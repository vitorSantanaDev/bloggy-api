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
    try {
      const posts = await Post.find()
      return response.status(200).json(posts)
    } catch (error) {
      return response.status(404).json({ error: 'Posts not found.' })
    }
  }

  async index(request, response) {
    try {
      const posts = await Post.find({ user: request.params.user_id })
      return response.status(200).json(posts)
    } catch (error) {
      return response.status(404).json({ error: 'Post not found.' })
    }
  }

  async show(request, response) {
    try {
      const post = await Post.find({ _id: request.params.post_id })
      return response.status(200).json(post)
    } catch (error) {
      return response.status(404).json({ error: 'Post not found.' })
    }
  }
}

export default new PostController()
