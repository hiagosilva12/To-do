import React, { useState } from "react"
import styled from "styled-components"
import "./App.css"

const Container = styled.div `
height: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`

const BoxList = styled.ul `
  list-style: none;
`

const List = styled.li `
  color: blue;
`

const BoxAdd = styled.input `
  width: 300px;
  height: 60px;
  font-size: 25px;
  border: solid 3px green;
  border-radius: 40%;
`

const BtnAdd = styled.button `
  font-size: 20px;
  border-radius: 25%;
  cursor: pointer;
&:hover {
  background-color: aqua;
}
`

const App = () => {
  const [tarefa, setTarefa] = useState("")
  const [lista, setLista] = useState([])
  
  const Add = (event) => {
    const novaTarefa = {
      tarefa: tarefa,
      id: Date.now(),
      setTarefa:""
    };
  setLista([...lista, novaTarefa]);
  setTarefa("")
  event.preventDefault()
}
const Remove = (id) => {
  setLista(lista.filter((item) => item.id !== id))
}

return (
  <Container>
    <form onSubmit={Add}>
      <h1>Todo Hooks</h1>
      <BoxAdd 
      onChange={(ev) => setTarefa(ev.target.value)} placeholder="Adicione uma tarefa..."
      />
      <BtnAdd onClick={Add}>Adicionar</BtnAdd>
      <div>
        {lista.map((item) => (
          <BoxList>
            <List>{item.tarefa}</List>
            <button onClick={() => Remove(item.id)}>X</button>
          </BoxList>
        )
        )}
      </div>
    </form>
  </Container>
)

}
export default App