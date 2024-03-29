import { useState } from 'react';
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components';

function App() {
  const [amount,setAmount] = useState(0);
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)

  const option = Object.keys(currencyInfo)
  // console.log(option);

  const swap = ()=>{
    setFrom(to);
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // console.log(currencyInfo);
  // console.log(currencyInfo[to]);
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to]);
  }


  return (
    <>
   <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat rounded-md'
    style={{
    backgroundImage : `url('https://images.pexels.com/photos/258209/pexels-photo-258209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
   }}
   >
    <div className='w-full'>
      <div className='w-full max-w-md mx-auto border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        <form action=""
        onSubmit={ (e)=> {
          e.preventDefault();
          convert();
        }}>

          <div className='w-full mb-1'>
            <InputBox
            label="From" 
            amount={amount} 
            currencyOption={option}
            onCurrencyChange={(currency) => setAmount(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
            >
            </InputBox>
          </div>


            <div className='relative w-full h-0.5'>
              <button
              type='button'
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-nonemd bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}> swap
              </button>
            </div>

            <div className='w-full mt-1 mb-4'>
              <InputBox
              label="To"
              amount={convertedAmount}
              currencyOption={option}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={from}
              amountDisable
              >
              </InputBox>
            </div>

            <button type="submit" className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
              convert{from.toUpperCase()} to {to.toUpperCase()}
            </button>
        </form>
      </div>

    </div>

   </div>
   </>
  );
}

export default App
