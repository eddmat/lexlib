import Articles from '../components/Articles'

const Home = () => (
  <div className="container mx-auto">
    <main>
      <div className="container mx-auto">
        <header className="container mx-auto main-header">
          <h1>Lexico Libertario</h1>
          <h2>Ensayos</h2>
        </header>
      </div>

      <Articles />
    </main>

    <footer></footer>
  </div>
)

export default Home
