/*
This is a function called createTable that takes in an array of data as a parameter and creates an HTML table based on that data.

The function starts by getting any filter parameters from the URL using the URLSearchParams object. It then applies any filters to the data using Array.filter.

Next, the function creates an empty table element and checks if the filtered data array is empty. If it is, the function creates a simple "No data found" message in a single table cell. Otherwise, the function creates the table headers and rows using template literals and the Array.map method.

Finally, the function sets the HTML content of the table element to the generated HTML, and appends the table to the document body.

To use this function, you would need to call it with an array of data as the argument. The resulting table would then be added to the document body.
*/

export function createTable(data) {
  // Récupération des paramètres de filtrage dans l'URL
  const queryParams = new URLSearchParams(window.location.search);
  const eyeColorFilter = queryParams.get('eyeColor');
  const ageFilter = queryParams.get('age');

  // Filtrage des données en fonction des paramètres
  let filteredData = data;
  if (eyeColorFilter) {
    filteredData = filteredData.filter(person => person.eyeColor === eyeColorFilter);
  }


  if (ageFilter) {
    const ageRanges = [
      { query: "20-25", min: 20, max: 25 },
      { query: "26-30", min: 26, max: 30 },
      { query: "31-35", min: 31, max: 35 },
      { query: "36-41", min: 36, max: 41 }
    ];
    const ageRange = ageRanges.find(range => range.query === ageFilter);
    filteredData = ageRange ? filteredData.filter(person => person.age >= ageRange.min && person.age <= ageRange.max) : [];
  }

  // Création du tableau HTML
  const table = document.createElement('table');
  let tableHTML;
  if (filteredData.length === 0) {
    tableHTML = `
      <tbody>
        <tr>
          <td colspan="5">No data found</td>
        </tr>
      </tbody>
    `;
  } else {
    tableHTML = `
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Âge</th>
          <th>Couleur des yeux</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        ${filteredData.map(person => `
          <tr>
            <td>${person.name.last}</td>
            <td>${person.name.first}</td>
            <td>${person.age}</td>
            <td>${person.eyeColor}</td>
            <td>${person.email}</td>
          </tr>
        `).join('')}
      </tbody>
    `;
  }
  table.innerHTML = tableHTML;
  document.body.appendChild(table);
}
