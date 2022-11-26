import React, { useState } from 'react'

const Main = () => {
    const [coinnum, setCoin] = useState(1)
    const rollCoin = ()=>{
        const coinRanNum = Math.floor(Math.random() *2)+1
        setCoin(coinRanNum)
    }
  return (
    <>
    <img width={370} height={370} src={require(`../assets/${coinnum}.png`)} alt="Coin Image {E404}" /> <br />
    <button onClick={rollCoin} className="btn btn-primary my-3">Roll Coin</button> <br />
    </>
  )
}

export default Main