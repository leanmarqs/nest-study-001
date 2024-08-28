import {
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException,
} from '@nestjs/common'
import { FindAllParametersDto, PostDto } from './post.dto'

@Injectable()
export class PostService {
    private posts: PostDto[] = []

    createPost(post: PostDto): PostDto {
        this.posts.push(post)
        return post
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

    findAllPosts(params: FindAllParametersDto): PostDto[] {
        return this.posts.filter((p) => {
            let match = true
            if (
                params.userId != undefined &&
                !p.userId.includes(params.userId)
            ) {
                match = false
            }
            if (
                params.content != undefined &&
                !p.content.includes(params.content)
            ) {
                match = false
            }

            return match
        })
    }

    updatePost(post: PostDto): PostDto {
        const postIndex = this.posts.findIndex((p) => p.id === post.id)

        if (postIndex < 0) {
            throw new HttpException(
                `Post ${post.id} not found`,
                HttpStatus.BAD_REQUEST
            )
        }

        this.posts[postIndex] = post
        return post
    }

    deletePost(id: string) {
        const postIndex = this.posts.findIndex((post) => post.id === id)

        if (postIndex < 0) {
            throw new HttpException(
                `Post ${id} not found`,
                HttpStatus.BAD_REQUEST
            )
        }

        this.posts.splice(postIndex, 1)
    }
}
