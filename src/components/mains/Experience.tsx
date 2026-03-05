import { useEffect } from 'react';

function Experience() {
  useEffect(() => {
    document.title = 'Experience | Tianpeng Xu Resume';
  }, []);

  return (
    <main>
      <section>
        <h2>Professional Experience</h2>

        <h3>Software Development Intern - TechNova Solutions</h3>
        <p><em>June 2024 - August 2024</em></p>
        <ul>
          <li>Developed backend features using Java and Spring Boot, improving API response time by 18% through optimized query handling and caching strategies.</li>
          <li>Collaborated with a cross-functional team to design and implement a secure file-upload module using AWS S3 and Redis for metadata management.</li>
          <li>Wrote automated integration tests and improved code coverage from 62% to 85% across core services.</li>
          <li>Participated in daily stand-ups, sprint planning, and code reviews, gaining hands-on experience with Agile development practices.</li>
        </ul>

        <h3>Web Application Developer - University Project</h3>
        <p><em>January 2025 - May 2025</em></p>
        <ul>
          <li>Built a full-stack web application using Node.js, Express, and MongoDB to manage student health records securely.</li>
          <li>Designed responsive UI components with HTML, CSS, and JavaScript, ensuring accessibility and mobile-friendly layouts.</li>
          <li>Integrated authentication and role-based access control to protect sensitive data and meet project compliance requirements.</li>
          <li>Led a 4-person team, coordinated task assignments, and maintained detailed documentation for project deliverables.</li>
        </ul>

        <h3>Teaching Assistant - Introduction to Programming</h3>
        <p><em>September 2023 - December 2023</em></p>
        <ul>
          <li>Assisted 80+ students with foundational programming concepts in Python, including loops, functions, and data structures.</li>
          <li>Held weekly office hours and debugging sessions, helping students improve problem-solving skills and assignment quality.</li>
          <li>Graded homework and provided constructive feedback to support student learning and course progression.</li>
        </ul>
      </section>
    </main>
  );
}

export default Experience;
