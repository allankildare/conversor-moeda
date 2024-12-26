import styles from './styles.module.css'
function Credits() {
  return (
    <section className={styles.credits}>
      <p>
        <a href="https://docs.awesomeapi.com.br/api-de-moedas" target="_blank"
            rel="noreferrer noopener">
          AwesomeAPI Currency API
        </a>{' '}
        used to query monetary values and data
      </p>
      <p>
        <span>Built with React, deployed with Vercel.</span>
        <br />
        <span>
          Text set in{' '}
          <a
            href="https://rsms.me/inter/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Inter
          </a>{' '}
          typeface.
        </span>
        <br />
        <span>
          Icons by{' '}
          <a
            href="https://icons8.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Icons8
          </a>
          .
        </span>
      </p>
    </section>
  )
}

export default Credits
