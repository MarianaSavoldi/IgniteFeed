import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src="https://github.com/MarianaSavoldi.png" alt="Author's avatar"/>
            <div className={styles.authorInfo}>
              <strong>Mari Savoldi</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title="24 de Janeiro às 20h14" dateTime="2024-01-24 20:14:00">Publicado há 1h</time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p>👉 <a href="https://github.com/MarianaSavoldi/ignite-feed">jane.design/doctorcare</a></p>
          <p>
            <a href="https://github.com/MarianaSavoldi/ignite-feed">#novoprojeto</a>
            {' '}
            <a href="https://blog.rocketseat.com.br/tag/nlw/">#nlw</a>
            {' '}
            <a href="https://www.rocketseat.com.br/">#rocketseat</a>
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea placeholder='Deixe um comentário'/>
          <footer>
            <button type='submit'>Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>

      </article>
    </>
  )
}
