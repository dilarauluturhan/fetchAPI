// Sayfa yüklendiğinde tüm ülke isimlerinin verileriini fetch etmek istiyorum
// Bunun için useEffect kullanıyorum
// Verileri state içinde tutuyorum
// Sayfa yüklendiğinde bir fonksiyon oluştur ve çağır diyorum(getCountry)
// axios için -> npm i axios

import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [country, setCountry] = useState([])

  useEffect(() => {
    const getCountry = async() => {
      const data = await axios.get('https://restcountries.com/v3.1/all')
      setCountry(data)
    }
    // Çağırmak için...
    getCountry()
  }, [])

  return (
    <div>
      {/* data'ların name'lerini ekrana bastırmak için map kullandım */}

      {
        country?.data?.map((dt, i) => (
          <div key={i}>{dt.name.official}</div>
        ))
      }
    </div>
  );
}

export default App;
