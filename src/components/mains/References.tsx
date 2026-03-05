import { useEffect } from 'react';

function References() {
  useEffect(() => {
    document.title = 'References | Tianpeng Xu Resume';
  }, []);

  return (
    <main>
      <h2>Professional References</h2>
      <table className="ref-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mr. X</td>
            <td>Boss</td>
            <td>617-850-5743</td>
          </tr>
          <tr>
            <td>Ms. Y</td>
            <td>Colleague</td>
            <td>617-850-5743</td>
          </tr>
        </tbody>
      </table>

      <h2>Personal References</h2>
      <table className="ref-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Relation</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sholeh</td>
            <td>Mom</td>
            <td>617-850-5743</td>
          </tr>
          <tr>
            <td>Telli</td>
            <td>Sister</td>
            <td>617-850-5743</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default References;
