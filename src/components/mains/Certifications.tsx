import { useEffect } from 'react';

function Certifications() {
  useEffect(() => {
    document.title = 'Certifications | Tianpeng Xu Resume';
  }, []);

  return (
    <main>
      <section>
        <h2>Certifications</h2>

        <h3>AWS Certified Cloud Practitioner</h3>
        <p><em>Amazon Web Services - Issued 2024</em></p>
        <ul>
          <li>Demonstrated foundational knowledge of AWS cloud concepts, security, architecture, and billing.</li>
          <li>Gained hands-on experience with core services including EC2, S3, IAM, and CloudWatch.</li>
        </ul>

        <h3>Oracle Certified Java Programmer (OCPJP)</h3>
        <p><em>Oracle - Issued 2023</em></p>
        <ul>
          <li>Validated strong understanding of Java syntax, OOP principles, exception handling, and collections.</li>
          <li>Applied best practices in writing efficient, maintainable, and scalable Java applications.</li>
        </ul>

        <h3>Google Data Analytics Certificate</h3>
        <p><em>Google - Issued 2022</em></p>
        <ul>
          <li>Completed an 8-course program covering data cleaning, visualization, SQL, and analytical thinking.</li>
          <li>Built dashboards and reports using spreadsheets, SQL queries, and data storytelling techniques.</li>
        </ul>

        <h3>Scrum Fundamentals Certified (SFC)</h3>
        <p><em>SCRUMstudy - Issued 2022</em></p>
        <ul>
          <li>Learned Agile and Scrum principles including sprint planning, backlog refinement, and team roles.</li>
          <li>Applied Scrum framework in team-based academic and project environments.</li>
        </ul>
      </section>


    </main>
  );
}

export default Certifications;
