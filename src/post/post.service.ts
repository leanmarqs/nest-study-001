import {
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException,
} from '@nestjs/common'
import { PostDto } from './post.dto'

@Injectable()
export class PostService {
    private posts: PostDto[] = []

    createPost(post: PostDto) {
        this.posts.push(post)
        console.log(this.posts)
    }

    findPostById(id: string): PostDto {
        const foundPost = this.posts.find((post) => post.id === id)

        if (!foundPost) {
            throw new HttpException(
                `Post ${id} not found`,
                HttpStatus.NOT_FOUND
            )
        }

        return foundPost
    }

    updatePost(post: PostDto) {
        const postIndex = this.posts.findIndex((p) => p.id === post.id)

        if (postIndex < 0) {
            throw new HttpException(
                `Post ${post.id} not found`,
                HttpStatus.BAD_REQUEST
            )
        }

        this.posts[postIndex] = post
    }
}
