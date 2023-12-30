import { FC, useMemo } from 'react'

const RandomNumbers: FC = () => {
  const randomArray: number[] = useMemo(() => Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)), [])

  return (
    <div className='flex justify-center gap-1 w-3/4'>
      {randomArray.map((n, index) => (
      <span key={index}>{n}</span>
    ))}
    </div>
  )
}

export default RandomNumbers