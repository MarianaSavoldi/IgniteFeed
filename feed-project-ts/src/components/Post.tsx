import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  postContent: Content[];
  publishedAt: Date;
}

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(['Post bacana, hein?!']);
  const [newCommentText, setNewCommentText] = useState('');
  //  Formatação da data usando Intl
  // const publishedDateFormat = new Intl.DateTimeFormat('pt-br', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit',
  // }).format(publishedAt)

  // Formatação da data usando date-fns
  const publishedDateFormat = format(post.publishedAt, "dd 'de' LLLL 'às' HH'h'mm", { locale: ptBR });

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const isNewCommentEmpty = newCommentText.length === 0;

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  };

  const handleInvalidComment = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório');
  };

  const deleteComment = (commentToDelete: string) => {
    const newCommentsList = comments.filter(comment => comment !== commentToDelete);
    setComments(newCommentsList);
  };

  return (
    <>
      <article className={ styles.post }>
        <header>
          <div className={ styles.author }>
            <Avatar src={ post.author.avatarUrl } alt="Author's avatar" />
            <div className={ styles.authorInfo }>
              <strong>{ post.author.name }</strong>
              <span>{ post.author.role }</span>
            </div>
          </div>

          <time title={ publishedDateFormat } dateTime={ post.publishedAt.toISOString() }>{ publishedDateRelativeToNow }</time>
        </header>

        <div className={ styles.content }>
          { post.postContent.map(line => {
            if (line.type === 'paragraph') {
              return <p key={ line.content }>{ line.content }</p>;
            } else if (line.type === 'link') {
              return <p key={ line.content }><a href="#">{ line.content }</a></p>;
            }
          }) }
        </div>

        <form onSubmit={ handleCreateNewComment } className={ styles.commentForm }>
          <strong>Deixe seu feedback</strong>
          <textarea
            name='comment'
            placeholder='Deixe um comentário'
            value={ newCommentText }
            onChange={ handleNewCommentChange }
            onInvalid={ handleInvalidComment }
            required
          />
          <footer>
            <button
              type='submit'
              disabled={ isNewCommentEmpty }
            >
              Publicar
            </button>
          </footer>
        </form>

        <div className={ styles.commentList }>
          { comments.map(comment => {
            return (
              <Comment
                key={ comment }
                content={ comment }
                onDeleteComment={ deleteComment }
              />
            );
          }) }
        </div>

      </article>
    </>
  );
}
