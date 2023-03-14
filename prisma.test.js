import { createTable } from './src/helpers';

describe("createTable", () => {
  // Test pour un tableau vide
  it("should display 'No data found' message when given an empty array", () => {
    const data = [];
    document.body.innerHTML = "";
    createTable(data);
    expect(document.querySelector("td").textContent).toBe("No data found");
  });

  // Test pour un tableau avec des filtres vides
  it("should display all data when given an array and no filters", () => {
    const data = [
      { name: { first: "John", last: "Doe" }, age: 30, eyeColor: "blue", email: "john.doe@example.com" },
      { name: { first: "Jane", last: "Doe" }, age: 25, eyeColor: "green", email: "jane.doe@example.com" }
    ];
    document.body.innerHTML = "";
    createTable(data);
    const rows = document.querySelectorAll("tr");
    expect(rows.length).toBe(3); // compte les en-têtes
    expect(rows[1].querySelectorAll("td")[0].textContent).toBe("Doe");
    expect(rows[1].querySelectorAll("td")[1].textContent).toBe("John");
    expect(rows[1].querySelectorAll("td")[2].textContent).toBe("30");
    expect(rows[1].querySelectorAll("td")[3].textContent).toBe("blue");
    expect(rows[1].querySelectorAll("td")[4].textContent).toBe("john.doe@example.com");
    expect(rows[2].querySelectorAll("td")[0].textContent).toBe("Doe");
    expect(rows[2].querySelectorAll("td")[1].textContent).toBe("Jane");
    expect(rows[2].querySelectorAll("td")[2].textContent).toBe("25");
    expect(rows[2].querySelectorAll("td")[3].textContent).toBe("green");
    expect(rows[2].querySelectorAll("td")[4].textContent).toBe("jane.doe@example.com");
  });
});
