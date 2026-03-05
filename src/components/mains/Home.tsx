import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.title = 'Home | Tianpeng Xu Resume';
  }, []);

  return (
    <main>
      <section>
        <h2>Profile Summary</h2>
        <img src="/images/headshot.png" alt="Tianpeng Xu's Profile Picture" width="248" />
        <p>
          Graduate-level software development student with a strong focus on
          Java backend engineering.
          Experienced in building Spring Boot applications with Redis,
          MySQL/PostgreSQL, and message queues.
        </p>
        <p>
          Familiar with backend system design patterns including asynchronous
          processing, distributed locking, and eventual consistency.
          Actively strengthening full-stack and cloud-deployed application
          development skills.
        </p>
      </section>
    </main>
  );
}

export default Home;
