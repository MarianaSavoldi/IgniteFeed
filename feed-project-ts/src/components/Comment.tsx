import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likesCount, setLikesCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleLikeComment = () => {
    setLikesCount((previousLikesCount) => previousLikesCount + 1);
  };

  return (
    <div className={ styles.comment }>
      <Avatar hasBorder={ false } src="https://github.com/MarianaSavoldi.png" alt="User's avatar" />
      <div className={ styles.commentBox }>
        <div className={ styles.commentContent }>
          <header>
            <div className={ styles.authorAndTime }>
              <strong>Mari Savoldi</strong>
              <time title="24 de Janeiro às 20h14" dateTime="2024-01-24 20:14:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={ handleDeleteComment } title='Deletar comentário'>
              <Trash size={ 24 } />
            </button>
          </header>
          <p>{ content }</p>
        </div>

        <footer>
          <button onClick={ handleLikeComment }>
            <ThumbsUp />
            Aplaudir <span>{ likesCount }</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
