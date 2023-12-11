# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.


## Tela Inicial


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
