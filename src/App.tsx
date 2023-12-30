import { FC } from 'react'
import './App.css'
import RandomNumbers from './components/RandomNumbers'

const App: FC = () => {

  return (
    <div>
      <h1 className='font-extrabold text-3xl'>Sortings</h1>
      <p>This app will display how different methods of sorting work</p>
      <div className=' text-left w-1/3'>
        <ol className='list-decimal'>
          <li>Bubble Sort</li>
          <li>Selection Sort</li>
          <li>Insertion Sort</li>
          <li>Merge Sort</li>
          <li>Quick Sort</li>
          <li>Heap Sort</li>
          <li>Counting Sort</li>
          <li>Radix Sort</li>
        </ol>
      </div>
      <RandomNumbers />
    </div>
  )
}

export default App
