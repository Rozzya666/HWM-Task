import React, { useState } from 'react'
import Resource from './Resource'
import "../style.css"


function PayResource() {
    
    const [goldState, setGoldState] = useState(0)
    const [inputText, setInputText] = useState({
        nameUser: '',
        desc: ''
    })
    
    const percent = goldState * 0.0000012
    const result = Math.round((percent + 1) * goldState)
       
    
    const [isResource, setIsResource] = useState([
        
        {name: 'wood',img: 'https://dcdn.heroeswm.ru/i/r/48/wood.png?v=3.23de65'}, 
        {name: 'ore',img: 'https://dcdn3.heroeswm.ru/i/r/48/ore.png?v=3.23de65'}, 
        {name: 'mercury',img: 'https://dcdn.heroeswm.ru/i/r/48/mercury.png?v=3.23de65'}, 
        {name: 'sulfur',img: 'https://dcdn2.heroeswm.ru/i/r/48/sulfur.png?v=3.23de65'}, 
        {name: 'crystals',img: 'https://dcdn3.heroeswm.ru/i/r/48/crystals.png?v=3.23de65'}, 
        {name: 'gems',img: 'https://dcdn1.heroeswm.ru/i/r/48/gems.png?v=3.23de65'}
    ])
    const goldInfo = {name: 'gold',img: 'https://dcdn2.heroeswm.ru/i/r/48/gold.png?v=3.23de65'}
    
  return (
    <div>
        <div className='container'>
            <form>
                <h3>Имя Игрока</h3>
                <input onChange={(e) => setInputText({...inputText, nameUser: e.target.value})} value={inputText.nameUser}></input>
                <h3>Передаваемые ресурсы</h3>
                <ul>
                    <li className='resource'>
                        <img alt={goldInfo.name} src={goldInfo.img}></img>
                        <input onChange={(e) => setGoldState(e.target.value)} value={goldState}></input>
                        
                    </li>
                    {goldState > 0
                            ? <li style={{textAlign: 'left', marginLeft: '10px'}}>Будет снято: {result}</li>
                            : null
                        }
                    {isResource.map((resource1, idx) => {
                        return <Resource resource={resource1} key={idx} />
                    })}
                </ul>
                <h3>Описание перевода</h3>
                <input onChange={(e) => setInputText({...inputText, desc: e.target.value})} value={inputText.desc}></input>
                <button className='send'>Передать</button>
            </form>
        </div>
    </div>
  )
}

export default PayResource;