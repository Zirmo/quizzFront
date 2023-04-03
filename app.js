import {getThemes} from "./api.js";

import {displayThemes} from "./index-displayThemes.js";

getThemes()
    .then(results => displayThemes(results))
    .catch( error => console.log(error))
