# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.


## Tela Inicial
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-g3-matchtime/assets/142946762/5ec4184b-4e51-4db8-8e52-d410b1ef10af)

##Pagina Inicial Logado
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-g3-matchtime/assets/142946762/02ecebc3-4f15-4551-9ad3-a681f69f1701)

##Escolha de Sala
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-g3-matchtime/assets/142946762/8f1d01e7-ebba-4764-8b99-218cd12c5da4)

##Sala
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-g3-matchtime/assets/142946762/47f250ff-ca93-4655-b73a-477de8e998d4)

##Tela de Login
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-g3-matchtime/assets/142946762/901278b9-29cf-4640-a27a-5d2d8181f19b)

##Tela de Cadastro
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-g3-matchtime/assets/142946762/cde0c7fa-927a-4681-8b2b-ad8a06a5f3b7)

##Tela de Perfil
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-g3-matchtime/assets/142946762/d0e5b7c4-840a-4a26-9e04-a10e8baa5975)

##Edição de Perfil
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-g3-matchtime/assets/142946762/2219c778-d041-492a-ba90-15023b525424)

##Evento
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-g3-matchtime/assets/142946762/1833b4a2-b310-4df7-881a-0e9e964996e3)
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-g3-matchtime/assets/142946762/6c248c13-8195-4399-9f79-70a0acd4562c)

##Denuncias
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2023-2-p1-tiaw-t1-g3-matchtime/assets/142946762/0d5d2f81-d7d9-455b-93cd-b412d56c3405)


## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| Os Desenvolvedores poderam criar eventos específicos para o site. Entrando em uma sala especifica somente para o evento. | ALTA | EventScreen.html |
|RF-002| Deve ser possível configurar as opções de adesão ao evento, decidindo se ele será aberto a todos ou apenas para membros selecionados. Isso é crítico para controlar quem pode participar. | ALTA | event.js |
|RF-005| Cada usuário deve poder ter um perfil personalizável para exibir suas estatísticas, conquistas e preferências de jogos. | ALTA | Gprofile.html e main.js |
|RF-007| Os jogadores devem poder participar de partidas competitivas, casuais e personalizadas, onde são agrupados com base em classificações e histórico de desempenho. | ALTA | GameRoom.html |
|RF-008| Incluir fóruns de discussão e recursos de voice chat para facilitar a comunicação entre jogadores. Isso pode ser desenvolvido após a implementação dos recursos essenciais. | ALTA | Lobby-Room.html |
|RF-010| A plataforma deve disponibilizar uma área de denúncia para os usuários, acessível por meio de seus perfis ou durante partidas, permitindo que relatem comportamentos inadequados, toxicidade, assédio, discriminação ou qualquer outra violação das diretrizes da comunidade. | ALTA | ReportChannel.html |

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RNF-001| A plataforma deve garantir que todas as páginas e funcionalidades carreguem de forma rápida e eficiente, independentemente do dispositivo usado. | ALTA | Vercel |
|RNF-008| Garantir que a interface seja intuitiva para jogadores menos experientes. | ALTA | index.html |
|RNF-009| Assegurar que a interface seja amigável e fácil de usar. | ALTA | index.html |
|RNF-012| Implementar um sistema de backup e recuperação para proteger dados e informações em caso de falhas. | ALTA | 2° Deploy Vercel |
|RNF-013| O sistema deve manter um registro de todas as denúncias de usuários, incluindo data, hora, descrição da denúncia e ação subsequente tomada pela moderação. Esse registro deve ser mantido com alta disponibilidade e segurança para fins de auditoria e transparência na gestão de comportamentos inadequados. | ALTA | ReportChannel.js |
|RNF-014| Garantir a privacidade dos denunciantes na área de denúncia. | ALTA | ReportChannel.js |
|RNF-016| A plataforma deve fornecer feedback aos denunciantes sobre o status de suas denúncias, como "em análise" ou "resolvida", para mantê-los informados sobre o progresso das investigações. | ALTA | ReportChannel.js |
|RNF-017| As denúncias enviadas pelos usuários devem ser encaminhadas para a equipe de moderação para avaliação e ação apropriada. | ALTA | ReportChannel.js |
