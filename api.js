

const getThemes = () => {
    return fetch('http://localhost:8000/api/themes')
        .then(response => {
            //tester si la reponse est OK
            if( response.ok){
                return response.json()
            }
            throw new Error("une erreur a ete detecter . Verifier le endpoint")
        })
}
// rendre disponible cet fonction dans d'autre modules
export {getThemes}