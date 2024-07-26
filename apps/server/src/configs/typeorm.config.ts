import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Article } from 'src/entities/article.entity';
import { Comment } from 'src/entities/comment.entity';
import { Like } from 'src/entities/like.entity';
import { Photo } from 'src/entities/photo.entity';
import { User } from 'src/entities/user.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'mysql',
  database: process.env.DB_NAME || 'hotsix',
  entities: [User, Article, Comment, Photo, Like],
  synchronize: false,
  extra: {
    connectionLimit: 100,
  },
};
