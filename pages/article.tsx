const Article = () => {
  return (
    <div className="container mx-auto">
      <section className="articles-container">
        <h2></h2>

        <article>
          <div className="info">
            <ul>
              <li>Publicada el</li>
              <li>
                <a href="https://creativecommons.org/licenses/by/4.0/deed.es" target="_blank">
                  <span className="cc">c</span> Obra liberada bajo licencia Creative Commons
                  Atribución 4.0 Internacional.
                </a>
              </li>
              <li className="list-disc list-inside italic mt-5"></li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Article
