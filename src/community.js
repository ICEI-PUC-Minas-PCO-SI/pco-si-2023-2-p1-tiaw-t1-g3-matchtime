URL1 = 'https://match-time-backend.vercel.app/users'
URL2 = 'https://match-time-backend.vercel.app/comunidades'

const tempContainer = document.querySelector("#album");

const renderCommunities = async () => {

    const res1 = await fetch(URL1);
    const res2 = await fetch(URL2);
    const profiles = await res1.json();
    const comms = await res2.json();

    const idUsuarioLogado = localStorage.getItem("idUsuarioLogado");

    if (profiles[idUsuarioLogado].comunidadesEntradas.length != 0) {

        let commsFill = '';
        //commsFill += `<div id="album" class="row m-5">`;
        for (let i = 0; i < profiles[idUsuarioLogado].comunidadesEntradas.length; i++) {
            commsFill += `
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <a href="${comms[i].link}">
                        <div class="card text-white bg-dark mb-3">
                            <img src="${comms[i].imagem}" class="card-img-top img-fluid" alt="...">
                            <div class="card-body pag">
                                <h5>${comms[i].nome}</h5>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        }
        //commsFill += `</div>`;

        tempContainer.innerHTML = commsFill;
    }
}


window.addEventListener('DOMContentLoaded', (e) => renderCommunities());