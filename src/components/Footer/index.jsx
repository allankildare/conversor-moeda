import styles from './styles.module.css'
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Made with{' '}
        <img
          src="/images/icons/heart.svg"
          label="Red heart icon"
          aria-label="love"
          className={styles.heart}
        />{' '}
        by{' '}
        <a
          href="https://allankildare.github.io"
          target="_blank"
          rel="noreferrer noopener"
        >
          Allan Kildare
        </a>
      </p>
      <p>2024</p>
    </footer>
  )
}

export default Footer
