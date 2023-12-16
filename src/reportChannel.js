
function enviar() {
    if(validarCampos()){
        sendMail();
        sendMail2();
    }
    
}


var meusIds = [];

document.getElementById("email").addEventListener("input", function () {
    validarEmailEmTempoReal();
});

document.getElementById("denunciado").addEventListener("input", function () {
    validarNomeEmTempoReal();
});

function validarEmailEmTempoReal() {
    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        emailInput.style.borderColor = "red";
        emailInput.style.borderWidth = "2px";
    } else {
        emailInput.style.borderColor = "";
    }
}

function validarNomeEmTempoReal() {
    var nomeInput = document.getElementById("denunciado");
    var nomeValue = nomeInput.value;

    if (!meusIds.includes(nomeValue)) {
        nomeInput.style.borderColor = "red";
        nomeInput.style.borderWidth = "2px";
    } else {
        nomeInput.style.borderColor = "";
    }
}

function validarCampos() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var denunciado = document.getElementById("denunciado");
    var campoNada = [];
    var erroNome = true;
    var erroEmail = false;

    if (!meusIds.includes(denunciado.value)) {
        denunciado.style.borderColor = "red";
        denunciado.style.borderWidth = "2px";
        erroNome = false;
    } else {
        denunciado.style.borderColor = "";
    }

    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        emailInput.style.borderColor = "red";
        emailInput.style.borderWidth = "2px";
        erroEmail = true;
    } else {
        emailInput.style.borderColor = "";
    }

    if (name === "") {
        campoNada.push("name");
    }

    if (message === "") {
        campoNada.push("message");
    }

    if (denunciado.value === "") {
        campoNada.push("denunciado");
    }

    if (!erroNome) {
        alert("Escolha um nome de usuário disponível");
        return false;
    }

    if (erroEmail) {
        alert("Digite um email valido");
        return false;
    }

    if (campoNada.length > 0) {
        alert("Por favor, preencha os seguintes campos obrigatórios: " + campoNada.join(", "));
        return false;
    }

    return true;
}

function sendMail() {
    if(validarCampos()){
        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
            denunciado: document.getElementById("denunciado").value,
        };
    }
   

    const serviceID = "service_q2ympqp";
    const templateID = "template_kkni0a8";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            document.getElementById("denunciado").value = "";
            console.log(res);
            alert("Denuncia recebida com sucesso!!")

        })
        .catch(err => console.log(err));
}

function sendMail2() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        denunciado: document.getElementById("denunciado").value,
    };

    const serviceID = "service_q2ympqp";
    const templateID = "template_mrrhqdf";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            document.getElementById("denunciado").value = "";
            console.log(res);
        })
        .catch(err => console.log(err));
}

function updateMessageField() {
    var checkboxes = document.querySelectorAll('.Checkbox input[type="checkbox"]:checked');
    var messageField = document.getElementById('message');

    if (checkboxes.length > 3) {
        alert("Você pode selecionar no máximo 3 opções.");
        checkboxes[checkboxes.length - 1].checked = false;
    } else {
        messageField.value = "Opções selecionadas:\n";
        checkboxes.forEach(function (checkbox) {
            messageField.value += "- " + checkbox.value + "\n";
        });

        updateSubmitButton();
    }
}

$(document).ready(function () {
    $.ajax({
        url: 'https://match-time-backend.vercel.app/users',
        dataType: 'json',
        success: function (data) {
            mostraIds(data);
        },
        error: function (xhr, status, error) {
            console.error('Erro ao carregar dados:', status, error);
        }
    });
});

function mostraIds(users) {
    var cardGroup = $('#usuariosDisponiveis');

    $.each(users, function (index, userData) {
        meusIds.push(userData.nome)
        var cardHtml = `
            <div class="user-sample w-100 mr-3" style="text-align: left; font-size: 22px;">
                <img src="${userData.foto}" alt="${userData.nome}" style="max-width: 60px; max-height: 60px; border-radius: 50%;" class="mb-2">
                ${userData.nome}
            </div>
        `;
        cardGroup.append(cardHtml);
    });
}
