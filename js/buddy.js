const loadBuddies = () => fetch('https://randomuser.me/api/?results=5').then(res => res.json()).then(data => displayBuddies(data))

const displayBuddies = data => {
    const buddies = data.results;
    const buddiesdiv = document.getElementById('buddies')
    for(const buddie of buddies){
        console.log(buddie.email)
        const p = document.createElement('p')
        p.innerText = `name: ${buddie.name.title}:${buddie.name.first} ${buddie.name.last} email:${buddie.email}`;
        buddiesdiv.appendChild(p)
    }
}