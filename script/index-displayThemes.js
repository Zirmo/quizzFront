fetch('http://localhost:8000/api/themes')
    .then(response => response.json())
    .then(data => {
        const liste = document.querySelector(".dropdown-menu"); // Récupérer la liste déroulante
        data.forEach(theme => {
            const li = document.createElement("li");
            const aTheme = document.createElement("a");
            aTheme.textContent = theme.nom;
            aTheme.setAttribute("href", "#"); // Ajouter un lien vide pour chaque élément de liste
            li.appendChild(aTheme);
            liste.appendChild(li); // Ajouter chaque élément à la liste déroulante

            aTheme.addEventListener("click", () => {
                location.href = `select.html?theme=${theme.nom}`; // Rediriger vers la page du thème
            });
        });
    });


const urlParams = new URLSearchParams(window.location.search);
const themeName = urlParams.get('theme');
const themeTitle = document.getElementById('theme-title');
themeTitle.textContent = `Thème : ${themeName}`;