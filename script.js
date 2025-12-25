fetch("data.json")
  .then(response => response.json())
  .then(data => {

    const button = document.getElementById("generate");
    const result = document.getElementById("result");

    button.addEventListener("click", () => {
      const random = Math.floor(Math.random() * data.length);
      const exercise = data[random];

      result.innerHTML = `
        <h2>${exercise.name}</h2>
        <p><strong>Level:</strong> ${exercise.level}</p>
        <p><strong>Muscles:</strong> ${exercise.muscles}</p>
        <p><strong>Tip:</strong> ${exercise.tip}</p>
      `;
    });

  });
