// import background from "../data/welcome-bg.svg";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Stacked, PieChart, Button, SparkLine } from "../components";

import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
  
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-14 flex justify-center items-center flex-col">
      <div className="flex flex-wrap lg:flex-nowrap justify-center  ">
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 
            rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center image"
        >
          {/* <img src={background} alt="" className='absolute top-0 right-0' /> */}

          <div className="flex justify-between items-center z-20 ">
            <div>
              <p className="font-bold text-gray-400 ">Earnings</p>
              <p className="text-2xl text-gray-800 dark:text-gray-100">
                $63,448.78
              </p>
            </div>
          </div>

          <div className="mt-6  left-10 top-24">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-90 rounded-3xl p-4 hover:drop-shadow-xl "
              >
                {item.icon}
              </button>

              <p className="mt-3 ">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>

              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>

              <p className="flex items-center gap-2 text-green-600 dark:text-green-300 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r border-color dark:border-gray-200 m-4 pr-10 ">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 dark:text-gray-200 mt-1">Budget</p>
              </div>

              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,438</span>
                </p>
                <p className="text-gray-500 dark:text-gray-200 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor="white"
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>

              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>

            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-10 flex gap-10 flex-wrap justify-center w-[300px]"
        style={{ background: { currentColor } }}
      >
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Earnings</p>
            <p className="flex flex-col gap-3">
              <span className="text-xl font-semibold">$63,448.78</span>
              <span className="text-gray-300 text-sm">Monthly revenue</span>
            </p>
          </div>

          <div className="mt-4">
            <SparkLine
              currentColor={currentColor}
              id="column-sparkLine"
              height="100px"
              type="Column"
              data={SparklineAreaData}
              width="320"
              color="rgb(242, 252, 253)"
            />
          </div>
        </div>
      </div>


      <div className="mt-10 flex gap-10 flex-wrap justify-center w-[300px]">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 flex gap-10 items-center">
            <div>
              <p>$43,246</p>
              <p className='text-gray-400'>Yearly sales</p>
            </div>

            <div className="w-40">
              <PieChart id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            </div>

        </div>
      </div>



    </div>
  );
};

export default Ecommerce;
