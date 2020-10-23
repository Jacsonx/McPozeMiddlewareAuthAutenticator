const jwt = require("jsonwebtoken");

/**
 * @param {} naMoita
 * @param {PublicKeyCredential} chaveDeComunidade
 * @param {Algorithm} codigoDosCuringaDoMengo
 */

async function pegaOsBagulho(
  naMoita,
  chaveDeComunidade,
  codigoDosCuringaDoMengo
) {}

async function validaEssesCookieTaLigado(req, res, next) {
  const token = req.cookie.jwt;

  if (!token)
    return res
      .status(401)
      .send({ error: "Ta de Sacanaje não passo o bagulho pra nois meno" });

  jwt.verify(token);
}

async function validaPeloHeaderMeno(req, res, next) {
  const tokenzin = req.headers.authorization;

  if (!tokenzin)
    return res
      .status(401)
      .send({ error: "Ta de Sacanaje não passo o bagulho pra nois meno" });

  const alemao = tokenzin.split(" "); //EM PARTES KKKKK

  if (!alemao.length === 2)
    return res
      .status(401)
      .send({ error: "Ai Menozada Fatiaram o Alemão errado" });

  const [scheme, token] = alemao;

  if (!/^Bearer$/i.test(scheme))
    return res
      .status(401)
      .send({ error: "Qual foi cumpade gero o bagulho com a bunda meno" });

  jwt.verify(token);
}

module.exports = {
  pegaOsBagulho,
  validaEssesCookieTaLigado,
};
