Feature: Login site Take Blip
Scenario: Realizar Login com sucesso
Given que o usuário esteja cadastrado no sistema
And informa o "Email" 
And informa a "Senha"
When clicar em Entrar
Then o sistema deve informar "mensagem" de erro ou sucesso

Examples:
| Email | Senha | mensagem |
| "teste@teste.com" | "12345mudar" | sim |

Feature: Login site Take Blip
Scenario: Realizar Login com email incorreto
Given que o usuário esteja cadastrado no sistema
And informa o "Email" 
And informa a "Senha"
When clicar em Entrar
Then o sistema deve informar mensagem de erro ou sucesso
Examples:
| Email | Senha | mensagem |
| "teste123@teste.com" | "12345mudar" | nao | 