import { forwardRef, Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from 'src/entities/article.entity';
import { CommentsModule } from 'src/comments/comments.module';
import { LikesModule } from 'src/likes/likes.module';
import { LikesService } from 'src/likes/likes.service';
import { Like } from 'src/entities/like.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Article, Like]), forwardRef(() => CommentsModule), LikesModule],
  controllers: [ArticlesController],
  providers: [ArticlesService, LikesService],
  exports: [ArticlesService],
})
export class ArticlesModule {}
