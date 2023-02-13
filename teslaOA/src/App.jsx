import { useState, useEffect } from 'react';
import data from './data';

function App() {
  const [items, setItems] = useState([]);
  const [regionFilter, setRegionFilter] = useState('all');
  const [modelFilter, setModelFilter] = useState('all');

  const onRegionChange = (e) => {
    setRegionFilter(e.target.value);
  }

  const onModelChange = (e) => {
    setModelFilter(e.target.value);
  }

  useEffect(() => {
    if (regionFilter === 'all' && modelFilter === 'all') {
      setItems(data);
    } else {
      let temp = data.filter(item =>
        regionFilter === 'all' ? item : item.region === regionFilter
      );
      let temp2 = temp.filter(item =>
        modelFilter === 'all' ? item: item.model === modelFilter)
      setItems(temp2);
    }
  }, [regionFilter, modelFilter])

  return (
    <div>
      <div>
        <label>Region Filter</label>
        <select name="" id="regions" onChange={onRegionChange}>
          <option value="all">all</option>
          <option value="US">US</option>
          <option value="EU">EU</option>
          <option value="CA">CA</option>
        </select>
      </div>
      <div>
        <label>Model Filter</label>
        <select name="" id="models" onChange={onModelChange}>
          <option value="all">all</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
      </div>
      <table>
        <tr>
          <th>region</th>
          <th>model</th>
          <th>sales</th>
        </tr>
        {items.map((item) => {
          return (
            <tr>
              <td>{item.region}</td>
              <td>{item.model}</td>
              <td>{item.sales}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default App
