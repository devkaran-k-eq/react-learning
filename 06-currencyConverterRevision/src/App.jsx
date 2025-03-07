import { useState } from 'react'
import InputBox from './components/InputBox';
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)


  // get currency object from fetching
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo);

  const convert = function(){
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://imageio.forbes.com/specials-images/imageserve/635baebc4ff6bcaf46003fad/Global-economy--currency-exchange-rates-panel-with-data--maps--charts/960x0.jpg?format=jpg&width=960')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            currencyOptions = {options}
                            amount={amount}
                            onAmountChange={(amount) => setAmount(amount)}
                            onCurrencyChange= {(currency) => setFrom(currency)}
                            selectCurrency={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={
                              swap
                            }
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                    <InputBox
                            label="To"
                            currencyOptions = {options}
                            amount={convertedAmount}
                            onAmountChange={(amount) => setConvertedAmount(amount)}
                            onCurrencyChange= {(currency) => setTo(currency)}
                            selectCurrency={to}
                            onAmountDisable= {true}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);

}

export default App
