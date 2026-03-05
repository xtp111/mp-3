import { useEffect } from 'react';

function Education() {
  useEffect(() => {
    document.title = 'Education | Tianpeng Xu Resume';
  }, []);

  return (
    <main>
      <section>
        <h2>Education Background</h2>
        <p>
          Xi'an Jiaotong-Liverpool University, International Business with a Language, 2020-2024
        </p>
        <p>
          Boston University, Master of Software Development, 2025-2026
        </p>
      </section>
    </main>
  );
}

export default Education;
