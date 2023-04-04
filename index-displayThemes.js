const displayThemes = ( themes) => {
    const ul = document.querySelector("ul")
    //Creér une ligne dans la table pour chaque utilisateur
    themes.forEach(theme => {
        const li = document.createElement('li')
        const aTheme= document.createElement("a href=\"#\"")
        aTheme.textContent = theme.nom
        li.appendChild(aTheme)
        ul.appendChild(li)

    })
}
export {displayThemes}