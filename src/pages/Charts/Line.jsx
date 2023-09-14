import { LineChart, Header } from "../../components"


const Line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 bg-white dark:bg-secondary-dark-bg p-10 rounded-3xl'>
      <Header category="Chart" title="Inflation Rate"/>
      <div className='w-full'>
        <LineChart />
      </div>
    </div>
  )
}

export default Line
