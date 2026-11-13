# FinFlex Suporte

Página pública simples de suporte do aplicativo FinFlex, preparada para Railway.

## Executar localmente
```bash
npm start
```

Acesse `http://localhost:3000`.

## Publicar no Railway
1. Crie um repositório GitHub chamado `finflex-suporte`.
2. Envie todos os arquivos deste pacote para o repositório.
3. No projeto Railway existente, adicione um **novo serviço** conectado a esse repositório.
4. Aguarde o deploy.
5. No novo serviço, abra **Settings > Networking > Public Networking > Generate Domain**.
6. Use a URL gerada pela Railway como `URL de suporte` no App Store Connect.

Healthcheck opcional: `/health`
