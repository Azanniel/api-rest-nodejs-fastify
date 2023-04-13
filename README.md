# Cookies

É uma forma de manter contexto entre requisições. Utilizamos principalmente por redes sociais.
Também usado como forma de armazenar informações sem o usuário estar logado ou ter criado uma conta ainda.

# Requisitos Funcionais

- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um resumo da sua conta;
- [x] O usuário deve poder listar todas as transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

# Regras de Negócio

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito que subtrairá;
- [ ] Deve ser possível identificarmos o usuário entre as requisições;
- [ ] O usuário só pode visualizar transações o qual ele criou;

# Sobre os testes

- Unitários: Testam uma unidade isolada da aplicação
- Integração: Testam a comunicação entre duas ou mais unidades da aplicação
- E2E (Ponta a ponta): Simulam um usuário operando na nossa aplicação

Para os testes E2E:

No Frontend seria exatamente a ação do usuário de abrir uma página de login por exemplo e realizar
todas as operações para se autenticar na aplicação.

No backend é testado as portas de comunicação com a aplicação, desde a requisição até o banco de dados.
Seja por meio de protocolo HTTP ou WebSockets
