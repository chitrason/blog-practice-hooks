import mongoose from 'mongoose'

export{
  Blog
}

const commentSchema = new mongoose.Schema(
  {
    content: String,
    author: {type: mongoose.SchemaTypes.ObjectId, ref:'Profile'}
  },
  {
    timestamps: true
  }
)

const blogSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    author: {type: mongoose.SchemaTypes.ObjectId, ref:'Profile'},
    comments: [commentSchema]
  },
  {
    timestamps: true
  }
)


const Blog = mongoose.model('Blog', blogSchema) 