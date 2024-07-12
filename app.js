let express = require('express')
const app = express()

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

    res.sendFile(__dirname + "/posts/pages/categories/RendaPassiva/pages/rendapassivaconc.html")

})






app.get("/comercio", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/comerciolocal/index.html")

})

app.get("/comercio/Estrategias-para-Comercio", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/comerciolocal/pages/comerciolocal.html")

})



app.get("/dolar", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/dolar/index.html")

})

app.get("/dolar/formas-de-ganhar-em-dolar", (req, res)=>{

    res.sendFile(__dirname + "/posts/pages/categories/dolar/pages/DolarFormas.html")

})


app.listen(8080)