import { useEffect } from 'react';
import Calculator from '../Calculator';

function Projects() {
  useEffect(() => {
    document.title = 'Projects | Tianpeng Xu Resume';
  }, []);

  return (
    <main>
      <p>This is the Projects page.</p>
      <Calculator />
    </main>
  );
}

export default Projects;
