import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from 'src/entities/article.entity';
import { JwtModule } from '@nestjs/jwt';
import { Comment } from 'src/entities/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Article, Comment]),
    JwtModule.register({
      secret: 'Secret', // 오픈되어선 안되는 정보 -> 따로 빼야됨
      signOptions: { expiresIn: '5m' },
    }),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
