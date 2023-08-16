import ListGroup from "./components/ListGroup";

function App(){
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
];

const handleSlectItem = (item: string) => {
  console.log(item);
}

  return <div><ListGroup items={items} heading="Cities" onSelection={handleSlectItem}/></div>
}

export default App;
