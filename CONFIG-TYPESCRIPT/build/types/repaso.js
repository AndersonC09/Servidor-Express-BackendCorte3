const nombre = 'Tatiana';
let sentimiento = '';
const sentimientos = ['amar', 'odiar'];
sentimiento = sentimientos[Math.floor(Math.random() * sentimientos.length)];
function meAma() {
    if (sentimiento === 'amor') {
        return true;
    }
}
if (meAma()) {
    console.log('Tatiana tine ' + sentimiento, 'hacia Yadir XD');
}
else {
    console.log('Tatiana no quiere  ' + sentimiento, ' a Yadir :(');
}
//# sourceMappingURL=repaso.js.map