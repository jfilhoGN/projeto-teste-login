Feature: Cadastro site Take Blip
Scenario: Realizar Cadastro com sucesso
Given que o usuário esteja na aba de cadastro do sistema
And informa o "Nome Completo", "Email", "Senha", "Telefone", "Site"
And aceitar termos de serviço
When clicar no botão de cadastro
Then o usuário deve ser cadastrado com sucesso 

Examples:
|Nome Completo | Email | Senha | Telefone | Site |
|"Teste da Silva"| "teste@teste.com" | "12345mudar" | 99999999999 | 'http://url.com' |

Feature: Cadastro site Take Blip
Scenario: Realizar Cadastro com senha menor que 6 caracteres
Given que o usuário esteja na aba de cadastro do sistema
And informa o "Nome Completo", "Email", "Senha", "Telefone", "Site"
And aceitar termos de serviço
When clicar no botão de cadastro
Then o sistema avisa que senha necessita de mais de seis caracteres

Examples:
|Nome Completo | Email | Senha | Telefone | Site |
|"Teste da Silva"| "teste@teste.com" | "12345" | 99999999999 | 'http://url.com' |


Feature: Cadastro site Take Blip
Scenario: Realizar Cadastro sem adicionar email
Given que o usuário esteja na aba de cadastro do sistema
And informa o "Nome Completo", "Senha", "Telefone", "Site"
And aceitar termos de serviço
When clicar no botão de cadastro
Then o sistema avisa que campo é obrigatório

Examples:
|Nome Completo | Senha | Telefone | Site |
|"Teste da Silva"| "12345" | 99999999999 | 'http://url.com' |