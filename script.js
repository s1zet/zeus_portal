fetch('https://api.mcsrvstat.us/2/earth.zeus-mc.com')
    .then(resp=>{resp.json().then(data=>{document.getElementById('server-players').innerHTML=data.players.online;});});

fetch('https://api.mcsrvstat.us/2/earth.zeus-mc.com')
    .then(resp=>{resp.json().then(data=>{document.getElementById('player-counter').innerHTML=data.players.online;});});