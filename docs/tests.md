# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Tela de login/cadastro**
 :--------------: | ------------
**Procedimento**  | 1) O usuário deseja criar uma conta nova <br>2) O usuário deseja logar em uma conta já existente.
**Requisitos associados** | RF-005
**Resultado esperado** | Login com sucesso dado email e senha, criação no banco de dados com as informações dadas na tela de cadastro.
**Dados de entrada** | A escolha do usuário.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT01 - Tela de perfil**
 :--------------: | ------------
**Procedimento**  | 1) O usuário deseja visualizar seu perfil
**Requisitos associados** | RF-005
**Resultado esperado** | Usuário consegue acessar sua tela de perfil em qualquer tela do site e ver suas informações em display.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Tela de edição de perfil**
 :--------------: | ------------
**Procedimento**  | 1) O usuário deseja mudar suas informações de perfil.
**Requisitos associados** | RF-005
**Resultado esperado** | Usuário consegue acessar sua tela de edição de perfil em qualquer tela do site e mudar suas informações.
**Dados de entrada** | Nome do usuário, link para imagem, bio, jogos favoritos (checklist).
**Resultado obtido** | Erro.

**Caso de Teste** | **CT03 - Sala de Jogos**
 :--------------: | ------------
**Procedimento**  | 1) Usuário escolhe qual sala e qual jogo deseja entrar<br>
**Requisitos associados** | RF-007
**Resultado esperado** | Redirecionamento para a sala de lobby
**Dados de entrada** | A escolha do usuário
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Sala De Lobby**
 :--------------: | ------------
**Procedimento**  | 1) O usuário entrou na sala que deseja.<br>2)A aplicação permite que o usuário converse no chat e escolha um time.
**Requisitos associados** | RF-008
**Resultado esperado** | Dialogo pelo chat e adição de usuario ao time direcionado.
**Dados de entrada** | A escolha do usuário.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Sala de Denúncias**
 :--------------: | ------------
**Procedimento**  | 1) O usuário escolhe um player para denunciar. <br>2)Seleciona quais opções descrevem mais o que ele presenciou e preenche o formulário <br>3) A aplicação retorna um email para a equipe e para o usuário.
**Requisitos associados** | RF-0010
**Resultado esperado** | Email de retorno para o usuário e para equipe matchtime.
**Dados de entrada** | Nome, Email, Seleção de checkbox e descrição do ocorrido.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 - Eventos**
 :--------------: | ------------
**Procedimento**  | 1) O usuário encontra qual evento mais lhe agrada<br>2)O usuário é direcionado a sala de evento.<br>3)O usuário pode conversar e escolher seu time dentro do evento.
**Requisitos associados** | RF-001
**Resultado esperado** | Redirecionamento para o evento referente a escolha, dialogo pelo chat e adição de usuario ao time direcionado.
**Dados de entrada** | A escolha do evento.
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.


|*Caso de Teste*                                 |*TC-01 - Usuarios*                                         |
|---|---|
|Requisito Associado | RF-005 - Registrar Usuário e fazer o login do novo usuário. |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1XhLJqyYSPc4fosH5j25n1VW0gYaLz-Pw/view?usp=drive_link | 
|Requisito Associado | RF-005 - Fazer Login do usuário já registrado. |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1eujiVRZSNUXFhbmJlRoXi7KAjxYp6dre/view?usp=drive_link | 

|*Caso de Teste*                                 |*TC-02 -Tela de edição*                                         |
|---|---|
|Requisito Associado | RF-005 - Editar perfil usuário. |
|Link do vídeo do teste realizado: |  https://drive.google.com/file/d/1ilpuP0XcPek5XRgxwnQF1TglieEOEALn/view | 

|*Caso de Teste*                                 |*TC-03 - Sala de Jogos*                                         |
|---|---|
|Requisito Associado | RF-007 - Usuários podem escolher qual sala vão entrar de acordo com o jogo.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1By1BCWNo_-_koQo8uD3UY_Mo1gNvJwut/view?usp=drive_link | 

|*Caso de Teste*                                 |*TC-04 - Sala De Lobby*                                         |
|---|---|
|Requisito Associado | RF-008 - Usuários podem se comunicar pelo chat |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1SUAi0m_Egk7nzbhiUDPrhDdLGylzpGXC/view?usp=drive_link | 

|*Caso de Teste*                                 |*TC-05 - Sala de Denúncias*                                         |
|---|---|
|Requisito Associado | RF-010 - Usuários podem reportar outros de acordo com as diretrizes da comunidade.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1Li6P4XWrefTPHNgcBf3idJTvm0uG6JfX/view?usp=drive_link | 

|*Caso de Teste*                                 |*TC-06 - Eventos*                                         |
|---|---|
|Requisito Associado | RF-001 - Eventos Disponíveis para os Usuários. |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1K-C0pJrIxkzFRgLYV253hVsBN9gayNZK/view?usp=drive_link |


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.



## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



