const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


let NextUrls = ["/Renda-Fixa/O-que-e-cdb", "/Renda-Fixa/Tesouro-Direto", "/Renda-Fixa/Entendo-As-Debentures", "/Renda-Variavel/Fundos-Imobiliarios", "/Renda-Fixa/Poupanca", "/Renda-Fixa/guia-completo-para-lc", "/Renda-Variavel/Investir-em-Dolar", "/comercio/Estrategias-para-Comercio", "/dolar/formas-de-ganhar-em-dolar", "/renda-passiva/entendendo-o-conceito", "/dolar/dicas-de-ecommerce", "/renda-passiva/produtos-digitais", "/comercio/Analise-Swot", "/dolar/aprenda-ingles-online", "/renda-passiva/aluguel-de-imoveis", "/comercio/Plano-de-Marketing", "/renda-passiva/investir-em-royalties-e-licencas", "/dolar/criar-conteudo", "/comercio/Plano-de-Emergencia", "/dolar/trabalhar-remotamente", "/renda-passiva/marketing-de-afiliado", "/comercio/Analise-de-Mercado", "/sair-do-pais"]
let Users = []

app.use(express.static(__dirname + "/posts"))

app.get("/", (req, res)=>{
  
    res.sendFile(__dirname +"/posts/indexes/1index.html")
})

app.get("/2", (req, res)=>{
    res.sendFile(__dirname +"/posts/indexes/2index.html")
})
app.get("/3", (req, res)=>{
    res.sendFile(__dirname +"/posts/indexes/3index.html")
})
app.get("/4", (req, res)=>{
    res.sendFile(__dirname +"/posts/indexes/4index.html")
})
app.get("/5", (req, res)=>{
    res.sendFile(__dirname +"/posts/indexes/5index.html")
})



app.get("/sobre", (req, res)=>{

    res.sendFile(__dirname + "/posts/sobre.html")

})
app.get("/contato", (req, res)=>{

    res.sendFile(__dirname + "/posts/contato.html")

})
app.get("/politica-de-privacidade", (req, res)=>{

    res.sendFile(__dirname + "/posts/politica.html")

})





app.get("/Renda-Fixa/O-que-e-cdb", (req, res)=>{
    res.sendFile(__dirname + "/posts/pages/categories/allpages/1cdb.html")
})

app.get("/Renda-Fixa/Tesouro-Direto", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/allpages/2TesouroDireto.html")

})
app.get("/Renda-Fixa/Entendo-As-Debentures", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/allpages/3Debentures.html")

})

app.get("/Renda-Fixa/Poupanca", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/allpages/5Poupança.html")

})
app.get("/Renda-Fixa/guia-completo-para-lc", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/allpages/6LCs.html")

})





app.get("/Renda-Variavel/O-que-sao-acoes", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/allpages/0OQueSaoAçoes.html")

})
app.get("/Renda-Variavel/Fundos-Imobiliarios", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/allpages/4FundosImobiliarios.html")

})
app.get("/Renda-Variavel/Investir-em-Dolar", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/allpages/7dolar.html")

})







app.get("/Renda-Fixa", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/rendas/RendaFixa.html")

})

app.get("/Renda-Variavel", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/rendas/RendaVariavel.html")

})





app.get("/renda-passiva", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/RendaPassiva/index.html")

})
app.get("/renda-passiva/entendendo-o-conceito", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/RendaPassiva/pages/0rendapassivaconc.html")

})
app.get("/renda-passiva/produtos-digitais", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/RendaPassiva/pages/1produtosdigitais.html")

})
app.get("/renda-passiva/aluguel-de-imoveis", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/RendaPassiva/pages/2AluguelDeImovel.html")

})
app.get("/renda-passiva/investir-em-royalties-e-licencas", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/RendaPassiva/pages/3InvestirRoyaltieseLicencas.html")

})
app.get("/renda-passiva/marketing-de-afiliado", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/RendaPassiva/pages/4marketingdeafiliados.html")

})





app.get("/comercio", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/comerciolocal/index.html")

})

app.get("/comercio/Estrategias-para-Comercio", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/comerciolocal/pages/0comerciolocal.html")

})
app.get("/comercio/Analise-Swot", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/comerciolocal/pages/1analiseswot.html")

})
app.get("/comercio/Plano-de-Marketing", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/comerciolocal/pages/2PlanodeMarketing.html")

})
app.get("/comercio/Plano-de-Emergencia", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/comerciolocal/pages/3PlanodeEmergencia.html")

})
app.get("/comercio/Analise-de-Mercado", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/comerciolocal/pages/4AnalisedeMercado.html")

})








app.get("/dolar", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/dolar/index.html")

})

app.get("/dolar/formas-de-ganhar-em-dolar", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/dolar/pages/0DolarFormas.html")

})
app.get("/dolar/dicas-de-ecommerce", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/dolar/pages/1e-commerce.html")

})
app.get("/dolar/aprenda-ingles-online", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/dolar/pages/2aprendaingles.html")

})
app.get("/dolar/criar-conteudo", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/dolar/pages/3criar-conteudo.html")

})
app.get("/dolar/trabalhar-remotamente", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/dolar/pages/4TrabalharRemotamente.html")

})


app.get("/sair-do-pais", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/allpages/8SairdoPais.html")

})


app.get("/robots.txt", (req, res)=>{

    res.sendFile(__dirname + "/robots.txt")

})
app.get("/sitemap", (req, res)=>{

    res.sendFile(__dirname +"/sitemap.xml")

})

server.listen(8080)
