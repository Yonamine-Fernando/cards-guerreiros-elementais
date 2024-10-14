import { useState } from 'react'
import LegendCard from './components/legendCards'
import LegendList from './components/cardList'
import legends from './components/legendcard'
import "./App.css"


function App() {

  const [ selectedLegendId, setSelectedLegend] = useState ("kaen")

  const selectedLegendData = legends.find((card) => card.id === selectedLegendId)

  return (
    <main>
      <div className="legends">
        <div className="cards-legend">{
          selectedLegendData && (
            <LegendCard
              nome={selectedLegendData.nome}
              numero={selectedLegendData.numero}
              tipo={selectedLegendData.tipo}
              elemento={selectedLegendData.elemento}
              imagem={selectedLegendData.imagem}
              descricao={selectedLegendData.descricao}
            />
          )}</div>
          <LegendList
            legends={legends}
            onSelect={setSelectedLegend}
            selectedLegendId={selectedLegendId}
          />
      </div>
    </main>
  )
}

export default App
