const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = 
                `<div class="info"> 
                <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                    <div class="data">
                        <h1>${user.name  ?? 'Não possui nome cadastrado 😥'}</h1> 
                        <p> ${user.bio  ?? 'Não possui bio cadastrada 😪'}</p>
                        <p> 👥Seguidores: ${user.followers} <br>  
                            👥 Seguindo: ${user.following} seguindo</p>
                    </div>
                    </div>`
                    
                    let eventsItens = ''
                    if (user.events.length === 0) {
                        eventsItens = '<li><span>O usuário não possui eventos recentes</span></li>';
                    } else {
                        user.events.forEach(event => {
                            if (event.type === 'PushEvent') {
                                eventsItens += `<li> <a href="${event.repo.url}" target="_blank"> ${event.repo.name} </a>
                                                    <span>- ${event.payload.commits[0].message}</span>
                                                </li>`;
                            } else if (event.type === 'CreateEvent') {
                                eventsItens += `<li><a href="${event.repo.url}" target="_blank"> ${event.repo.name} </a>
                                                    <span>- ${event.payload.description} </span>
                                                </li>`;
                            }
                        })
                    }
            
                    this.userProfile.innerHTML += `<div class="event-itens">
                                                        <h2>Eventos Recentes</h2>
                                                        <ul>${eventsItens}</ul>
                                                   </div>`

        
        let repositoriesItens = ''
        user.repositories.forEach(repo=> repositoriesItens += 
                                            `<li> <a href="${repo.html_url}" target="_blank"> ${repo.name} <br>
                                            <span class="emojis">🍴 ${repo.forks_count}
                                            ⭐ ${repo.stargazers_count}
                                            👀 ${repo.watchers_count}
                                            👨🏽‍💻 ${repo.language} </span>
                                            </a>
                                            </li>`)

            if(user.repositories.length > 0 ){
            this.userProfile.innerHTML += ` <div class="repositories section"> 
                                            <h2>Repositórios</h2>
                                            <ul> 
                                            ${repositoriesItens}</ul>
                                            </div>`
        }
        },
        renderNotFound(){
            this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
        },

    
}
export{screen}