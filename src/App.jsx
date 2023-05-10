import clsx from 'clsx'
import { useState } from 'react'
import { Perguntas } from './data/perguntas'

import { CheckCircle } from 'phosphor-react'

function App() {
  const [pergunta, setPergunta] = useState(0)
  const [resposta, setResposta] = useState('')
  const [finished, setFinished] = useState(false)
  const ask = Perguntas[pergunta]

  function handleAnswerAsk() {
    if (resposta.length == 0) return
    if (pergunta + 1 + 1 > Perguntas.length) {
      setFinished(true)
      setResposta('')
      setPergunta(0)
      return
    }
    setResposta('')
    setPergunta(pergunta + 1)
  }

  if (finished)
    return (
      <div className="flex max-w-xl">
        <span className="text-zinc-300 text-justify font-texto">
          Oi meu amor, sei que eu poderia muito bem ter te enviado essa mensagem
          mas não vejo motivos de não colocar um pouco de loucura nisso kkk.
          Ontem finalizamos e iniciamos mais um ciclo. Foram 17 meses que já se
          passaram desde o seu &quot;sim&quot;, nunca me arrependerei de ter feito esta
          pergunta e espero que você também não se arrependa de ter me aceito.
          Sou tão granto a Deus por ter me enviado a sua melhor criação a mim, 
          farei o possível e necessário para a conquistar todos os dias,
          obrigado por ser a mulher, a pessoa, a criatura, a ser, a menina, a
          bebê mais perfeita que existe. A cada dia que passa o meu amor por
          você só engrandece, sou apaixonado por ti e serei, se permitir, o seu
          grande amor! Obrigado por me amar do jeito que sou, sei que sou
          enjoado e insistente; me desculpe por isso. As vezes sinto vontade de
          te dar meus olhos para se enxergar e ver como eu a vejo, para você
          pode ser mil defeitos, mas para mim sera, e sempre sera, mil
          qualidades. Já disse e passarei a minha vida interia dizendo que eu
          amo o jeito como você fala, eu amo o jeito como você anda, eu amo o
          jeito que você com, eu amo o jeito como você ri, eu amo o jeito que
          você me olha, eu amo o jeito que você se veste, eu amo o seu beijo, eu
          amo quando você me morde, eu amo o som da sua respiração, eu amo ouvir
          seus áudios, eu amo falar com você,, eu amo o seu corpo, eu amo o seu
          cheiro, eu amo o seu perfume, eu amo o seu cabelo, amo você por
          inteira e sempre será a minha princesa, a minha pipoca que por qual
          tenho tanto orgulho e admiração. Te amo meu amor, você é incrível ❤️!!!!
        </span>
      </div>
    )

  return (
    <div className="flex flex-col items-center justify-center bg-white/30 p-5 rounded-md w-[550px] h-[380px]">
      <span className="text-zinc-300 text-sm">
        Pergunta {pergunta + 1} de {Perguntas.length}
      </span>
      <h1 className="font-bold text-xl mt-3 text-center">{ask.pergunta}</h1>
      <ul className="grid grid-cols-2 mt-5 mb-5 gap-5">
        {ask.opcoes.map((option) => (
          <li
            onClick={() => setResposta(option)}
            key={option}
            className={clsx(
              'relative p-2 text-center flex items-center justify-center  select-none cursor-pointer transition-all ease-linear hover:opacity-75',
              {
                'bg-green-600 rounded-md hover:opacity-100': resposta == option,
              }
            )}
          >
            {option}
            <CheckCircle
              className={clsx(
                'absolute top-0 left-0 -translate-y-2 -translate-x-2 visible',
                {
                  invisible: resposta != option,
                }
              )}
              size={24}
              color="black"
              weight="bold"
            />
          </li>
        ))}
      </ul>
      <button
        onClick={handleAnswerAsk}
        className="mt-2 p-3 bg-red-600 rounded-md uppercase font-bold"
      >
        Responder
      </button>
    </div>
  )
}

export default App
