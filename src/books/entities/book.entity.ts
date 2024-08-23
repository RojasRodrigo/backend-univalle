import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Author } from '../authors/author.entity';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  isbn: string;

  @Column()
  publisher: string;

  @Column()
  publication_year: number;

  @Column()
  genre: string;

  @ManyToOne(() => Author, author => author.books, { onDelete: 'CASCADE' })
  author: Author;
}
