const fs = require('fs');

module.exports = (caminho, dados) => {
    fs.writeFileSync(caminho, dados, {flag: 'w'});
}
