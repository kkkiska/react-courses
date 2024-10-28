import logo from './logo.svg';
import './App.css';
import CostItem from './components/CostItem';

export default function App() {
  const data = [
    {
      date: '12.04.2024',
      description: 'Холодильник',
      price: '500'
    },
    {
      date: '12.04.2024',
      description: 'Телефон',
      price: '1000'
    }
  ]

  return (
    <div>
      <CostItem date={data[0].date} description={data[0].description} price={data[0].price} />
      <CostItem date={data[1].date} description={data[1].description} price={data[1].price} />
    </div>
  );
}
