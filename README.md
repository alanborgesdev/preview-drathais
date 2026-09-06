# Sorriso & Confiança Digital

# O NEGÓCIO
- Nicho: Odontologia (cirurgia odontológica)
- Nome do negócio: Dra. Thaís Menezes
- Cidade / bairro: Jardim Vergueiro, Sorocaba - SP
- WhatsApp: 5515992726363
- Serviço que ele mais quer vender: Cirurgias odontológicas particulares
- Maior dor dele hoje: não tem site, depende só do Google Maps/indicação pra ser encontrado
- Diferencial real: atendimento particular personalizado, consultas sem sobreposição de horário, acompanhamento próximo do pré ao pós-operatório
- Cor da marca: #1B3A3A (verde-petróleo escuro), com #C17A54 (terracota) como cor de apoio

# FOTOS REAIS (já tenho, não usar placeholder)
Salvei 3 arquivos na mesma pasta do index.html:
- foto-hero.jpg: Dra. Thaís de jaleco branco, de pé ao lado da cadeira odontológica, sorrindo, ambiente da clínica visível ao fundo
- foto-sobre.jpg: selfie dela de perto, sorrindo, jaleco azul-marinho com nome bordado
- foto-expertise.jpg: ela sentada, concentrada, ajustando um modelo/molde odontológico de gesso

Use essas 3 fotos reais desde o início, com <img src="nome-do-arquivo.jpg">, NÃO crie bloco de placeholder com gradiente para elas.

# QUEM VOCÊ É
Você é um dev front-end sênior que também escreve copy de resposta direta.
Seu trabalho não é "fazer um site bonito". É fazer um site que faça o cliente local
chamar esse negócio no WhatsApp. O resultado do negócio é o fim, o site é o meio.

# O QUE ENTREGAR
Um arquivo `index.html` ÚNICO, self-contained: CSS e JS inline, sem build, sem framework,
sem lib externa. As únicas requisições externas permitidas são a fonte Ubuntu do Google Fonts
e os 3 arquivos de imagem locais (foto-hero.jpg, foto-sobre.jpg, foto-expertise.jpg).
Tem que abrir com duplo clique e funcionar.

# DESIGN (isto é o que separa site profissional de site genérico)
- Fonte: Ubuntu (Google Fonts), pesos 400/500/700. font-display: swap + preconnect.
- Paleta: UMA cor de marca (#1B3A3A) + terracota (#C17A54) como apoio + neutros. Fundo claro, texto #1a1a1a. Contraste mínimo AA.
- Hierarquia forte: h1 com clamp(2rem, 5vw, 3.5rem), corpo 1.0625rem, altura de linha 1.6.
- Respiro: seções com padding vertical de 80px no desktop e 48px no mobile.
  Conteúdo em max-width 1120px, centralizado.
- Mobile-first. Layout tem que funcionar em 360px de largura.
- NÃO tente desenhar pessoa, rosto ou corpo em SVG. Ícone SVG só pra forma simples e abstrata
  (relógio, check, local, seta).
- NÃO faça: sombra pesada, borda arredondada exagerada, emoji no lugar de ícone,
  parágrafo longo centralizado, lorem ipsum, "efeito" que não serve pra nada.

# SEÇÕES, nesta ordem
1. Topo enxuto: nome do negócio + botão de WhatsApp.
2. Hero: foto-hero.jpg como imagem principal, headline de RESULTADO (não "bem-vindo ao nosso site"),
   uma linha de apoio, CTA primário no WhatsApp e CTA secundário que rola pros serviços.
3. Serviços / benefícios: 3 a 6 cards, cada um com título curto e uma linha de benefício.
4. Sobre: foto-sobre.jpg ao lado do texto. Um parágrafo curto, humano, sem
   "somos uma empresa comprometida com a excelência".
5. Pilares / diferenciais: foto-expertise.jpg ao lado dos cards de diferenciais
   (atendimento particular personalizado, consultas sem sobreposição de horário,
   acompanhamento próximo do pré ao pós-operatório).
6. Prova social: 3 depoimentos. Marque cada um com [PLACEHOLDER: trocar por depoimento real].
7. Localização e horário: Av. Juscelino Kubitschek de Oliveira, 660, Jardim Vergueiro, Sorocaba - SP,
   CEP 18035-060. Horário: [PLACEHOLDER: horário de funcionamento]. Link do Google Maps (link, não iframe).
8. Rodapé: contato, redes, CNPJ como placeholder.
+ Botão flutuante de WhatsApp visível em TODAS as telas, inclusive mobile,
  apontando pra https://wa.me/5515992726363 com mensagem pronta no parâmetro ?text=

# REGRAS PARA AS IMAGENS REAIS
- width e height explícitos em cada <img> (baseado na proporção real do arquivo), pra evitar layout shift (CLS).
- loading="lazy" nas fotos abaixo da dobra (sobre e expertise); a foto do hero carrega sem lazy.
- alt descritivo e real em cada imagem, nunca vazio ou genérico:
  - foto-hero.jpg → "Dra. Thaís Menezes, cirurgiã-dentista, em consultório odontológico em Sorocaba"
  - foto-sobre.jpg → "Dra. Thaís Menezes sorrindo, cirurgiã-dentista em Sorocaba"
  - foto-expertise.jpg → "Dra. Thaís Menezes realizando procedimento odontológico de precisão"
- object-fit: cover com aspect-ratio fixo pra manter enquadramento consistente sem distorcer a foto.

# COPY
- Português do Brasil. Tom de quem resolve, não de quem vende. Frases curtas.
- Headline = [resultado] + [pra quem] + [onde].
- PROIBIDO usar travessão (— ou –) em qualquer texto. Use vírgula, ponto ou parênteses.
- PROIBIDO prometer número que não dá pra provar ("aumente 300% suas vendas").
- Sem lorem ipsum. Escreva copy de verdade e marque o que for suposição com [PLACEHOLDER: ...].
- Não invente prêmio, ano de fundação ou número de clientes. Use benefício honesto e genérico,
  ou deixe [PLACEHOLDER: ...]. Não inclua nota/avaliações do Google.

# TÉCNICO
- lang="pt-BR". <title> e <meta name="description"> com "cirurgiã-dentista" + "Sorocaba". Open Graph básico.
- HTML semântico: header/main/section/footer, um único h1, alt em tudo que for imagem.
- Performance alvo: PageSpeed mobile 90+. Sem JS pesado. CSS inline.
- Acessibilidade: foco visível no teclado e contraste AA.
- Área de toque de 44px de altura em TODO alvo clicável que não está dentro de uma frase:
  botão, logo do topo, link do menu, link do rodapé, botão flutuante.

# ANIMAÇÃO (entrada profissional dos elementos, obrigatória)
- Ao rolar, cada bloco aparece com fade + leve subida (translateY de 20px pra 0), duração 0.5s a 0.7s,
  easing suave (cubic-bezier(0.16, 1, 0.3, 1)).
- Stagger: dentro de uma seção, os itens (cards, bullets, depoimentos) entram em cascata, atraso de
  70ms a 100ms entre eles.
- O hero anima no load, sem esperar scroll: foto, nome, headline, linha de apoio e CTA em cascata rápida.
- Microinteração no hover: botão e card sobem de leve (translateY -2px) com sombra, transição 0.2s.
- COMO FAZER: só CSS (transition/transform/opacity) + um IntersectionObserver pequeno em JS puro.
- Anime SÓ transform e opacity. Nunca top/left/height/width/margin.
- ZERO layout shift (CLS 0). Respeite prefers-reduced-motion: reduce.
- Fallback sem JS obrigatório: script inline no topo adiciona classe "js" no <html>; estado escondido
  só vale dentro de "html.js".
- A animação não segura o LCP: a foto do hero e o texto são legíveis de imediato.
- Nada de exagero: sem bounce, sem zoom grande, sem girar.

# SEO (o cliente quer aparecer no Google local)
- <title> único e <meta name="description"> (150 a 160 caracteres) com "cirurgiã-dentista" + "Sorocaba".
- Open Graph (og:title, og:description, og:type, og:locale, og:image apontando pra foto-hero.jpg).
  canonical e og:url dependem da URL final: deixe como COMENTÁRIO pronto pra descomentar ao publicar.
- Favicon inline (SVG data-uri, a letra "T" na cor de marca #1B3A3A).
- Dados estruturados JSON-LD com o NAP: nome "Dra. Thaís Menezes", telefone (15) 99272-6363,
  endereço (Av. Juscelino Kubitschek de Oliveira, 660, Jardim Vergueiro, Sorocaba, SP, Brasil,
  CEP 18035-060), link do mapa. Use @type "Dentist". Horário: OMITA a chave (não foi informado).
- <meta name="robots" content="index, follow">. Um h1 só, títulos sem pular nível.

# SEGURANCA
- Todo link com target="_blank" (mapa, redes, WhatsApp em nova aba) TEM rel="noopener noreferrer".
- NUNCA chave de API, token ou senha no HTML.
- Só recurso https além dos arquivos locais de imagem.

# PERFORMANCE (alvo: Lighthouse mobile 90+, CLS ~0)
- CSS 100% inline no <head>. Sem @import, sem CSS morto, sem CDN de CSS.
- Fonte: preconnect + font-display: swap + só os pesos usados.
- Imagem: SEMPRE width e height explícitos, loading="lazy" abaixo da dobra, dimensão real
  (não jogue uma imagem de 3000px num espaço de 400px, redimensione/otimize se necessário).
- JS mínimo e inline (só o IntersectionObserver da animação). Zero biblioteca.
- Favicon inline (data-uri) economiza 1 requisição.

# ORDEM DE TRABALHO
Antes do código, me devolva 5 linhas: headline escolhida, cor de marca, as seções,
o CTA e o que você assumiu. NÃO espere minha confirmação, emende direto no código completo.

Depois do código, me entregue:
1. Checklist de personalização por cliente.
2. Como publicar na Vercel em 3 passos (incluindo como subir os 3 arquivos de imagem junto).
3. Autoverificação, item a item:
   - tem travessão (— ou –) em algum texto?
   - o link do wa.me está certo, com país e DDD, em todos os botões?
   - tem um h1 só, títulos sem pular nível?
   - todo texto passa em contraste AA, inclusive em cima da cor de marca?
   - as 3 fotos reais estão todas usadas (hero, sobre, expertise), com alt descritivo e sem placeholder restante?
   - as animações usam só transform/opacity, respeitam prefers-reduced-motion e não causam layout shift?
   - se o JavaScript não rodar, todo o conteúdo ainda aparece?
   - funciona em 360px sem rolagem lateral?
   - JSON-LD com NAP real, sem inventar rua/CEP/horário?
   - todo target="_blank" tem rel="noopener"? favicon inline?
   - imagens com width/height + loading lazy? Lighthouse Performance mobile 90+?

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://preview-drathais.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5a6afd56-a03d-4666-bb3d-cd7c2c4b04ab).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
