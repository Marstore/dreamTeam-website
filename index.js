import express from "express"
const app = express()

app.disable("x-powered-by")
app.get("", (_, res) => res.send({ status: "Online" }))

app.use((_, res) => res.send({ status: "Caminho não encontrado." }))

app.listen(8080, "0.0.0.0", () => console.log("Saphire-Site Online"))