import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { PostDto } from './post.dto'
import { PostService } from './post.service'

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}
    @Post()
    createPost(@Body() post: PostDto): PostDto {
        this.postService.createPost(post)
        return post
    }

    @Get('/:id')
    findPostById(@Param('id') id: string) {
        return this.postService.findPostById(id)
    }

    @Put()
    updatePost(@Body() post: PostDto) {
        this.postService.updatePost(post)
    }
}
