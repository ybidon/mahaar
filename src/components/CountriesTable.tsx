import Image from 'next/image';

interface CountryBitcoinHolder {
  country: string;
  flag: string;
  sources: string;
  BTC: number;
  value: number;
  percentage: number;
}

const countries: CountryBitcoinHolder[] = [
  {
    country: 'USA',
    flag: 'us',
    sources: 'News',
    BTC: 207189,
    value: 17540687040,
    percentage: 0.987
  },
  {
    country: 'China',
    flag: 'cn',
    sources: 'News',
    BTC: 194000,
    value: 16424102080,
    percentage: 0.924
  },
  {
    country: 'UK',
    flag: 'gb',
    sources: 'News',
    BTC: 61000,
    value: 5164279520,
    percentage: 0.29
  },
  {
    country: 'Ukraine',
    flag: 'ua',
    sources: 'News',
    BTC: 46351,
    value: 3924090492,
    percentage: 0.221
  },
  {
    country: 'Bhutan',
    flag: 'bt',
    sources: 'News',
    BTC: 13029,
    value: 1103039309,
    percentage: 0.062
  },
  {
    country: 'El Salvador',
    flag: 'sv',
    sources: 'Filing | News',
    BTC: 6089,
    value: 515496688,
    percentage: 0.029
  },
  {
    country: 'Finland',
    flag: 'fi',
    sources: 'News',
    BTC: 1981,
    value: 167712093,
    percentage: 0.009
  }
];

export default function CountriesTable() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bitcoin Holdings</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value (USD)</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% of 21m</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {countries.map((country) => (
            <tr key={country.country} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{country.country}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{country.BTC.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${(country.value / 1000000000).toFixed(2)}B</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{country.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 