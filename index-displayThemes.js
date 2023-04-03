const displayThemes = ( themes) => {
    const tbody = document.querySelector("tbody")
    //Creér une ligne dans la table pour chaque utilisateur
    themes.forEach(theme => {
        const tr = document.createElement("tr");
        const tdTheme= document.createElement("td")
        tdTheme.textContent = theme.nom
        tr.appendChild(tdTheme)
        tbody.appendChild(tr)

    })
}
export {displayThemes}