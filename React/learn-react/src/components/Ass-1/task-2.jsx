import './task-2.css'

const Task2 = () => {
  return (
    <div>
      <header>
        <h1>Sachin Tendulkar</h1>
        <p>Master Blaster of Cricket</p>
      </header>

      <nav>
        <a href="#">Home</a>
        <a href="#">Career</a>
        <a href="#">Records</a>
        <a href="#">Contact</a>
      </nav>

      <main>
        <section>
          <article>
            <h2>About Sachin</h2>
            <p>
              Sachin Tendulkar is a legendary Indian cricketer known for his
              exceptional batting skills and records.
            </p>
          </article>

          <article>
            <h2>Career Highlights</h2>
            <p>
              He scored 100 international centuries and is regarded as one of
              the greatest batsmen in cricket history.
            </p>
          </article>
        </section>

        <aside>
          <h3>Quick Facts</h3>
          <ul>
            <li>Born: April 24, 1973</li>
            <li>Country: India</li>
            <li>Nickname: Master Blaster</li>
          </ul>
        </aside>
      </main>

      <footer>
        <p>© 2026 Sachin Tendulkar Fan Page</p>
      </footer>
    </div>
  );
};

export default Task2;
