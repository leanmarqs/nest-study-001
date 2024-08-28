import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
} from '@nestjs/common'
import { FindAllParametersDto, PostDto } from './post.dto'
import { PostService } from './post.service'

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}
    @Post()
    createPost(@Body() post: PostDto): PostDto {
        return this.postService.createPost(post)
    }

    @Get('/:id')
    findPostById(@Param('id') id: string) {
        return this.postService.findPostById(id)
    }

    @Get()
    findAllPosts(@Query() params: FindAllParametersDto): PostDto[] {
        return this.postService.findAllPosts(params)
    }

    @Put()
    updatePost(@Body() post: PostDto) {
        return this.postService.updatePost(post)
    }

    @Delete('/:id')
    deletePost(@Param('id') id: string) {
        this.postService.deletePost(id)
        return { message: 'Post successfully deleted.' }
    }
}
