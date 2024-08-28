export interface PostDto {
    id: string // ID único do post
    userId: string // ID do usuário que fez o post
    content: string // Conteúdo do post (texto)
    createdAt: Date // Data e hora de criação do post
    likesCount: number // Número de curtidas
    retweetsCount: number // Número de retweets
    repliesCount: number // Número de respostas
    mediaUrls?: string[] // URLs de mídia (opcional)
}
