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
    sources: 'Filing',
    BTC: 198012,
    value: 18470000000,
    percentage: 0.943
  },
  {
    country: 'China',
    flag: 'cn',
    sources: '',
    BTC: 194000,
    value: 18100000000,
    percentage: 0.924
  },
  {
    country: 'UK',
    flag: 'gb',
    sources: 'Filing',
    BTC: 61245,
    value: 5710000000,
    percentage: 0.292
  },
  {
    country: 'Ukraine',
    flag: 'ua',
    sources: '',
    BTC: 46351,
    value: 4320000000,
    percentage: 0.221
  },
  {
    country: 'Bhutan',
    flag: 'bt',
    sources: '',
    BTC: 11286,
    value: 1050000000,
    percentage: 0.054
  },
  {
    country: 'El Salvador',
    flag: 'sv',
    sources: 'Filing',
    BTC: 7475.4,
    value: 697330000,
    percentage: 0.036
  }
];

export default function CountriesTable() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium !text-gray-500 uppercase tracking-wider">Country</th>
              <th className="px-6 py-3 text-left text-xs font-medium !text-gray-500 uppercase tracking-wider">Bitcoin Holdings</th>
              <th className="px-6 py-3 text-left text-xs font-medium !text-gray-500 uppercase tracking-wider">Value (USD)</th>
              <th className="px-6 py-3 text-left text-xs font-medium !text-gray-500 uppercase tracking-wider">% of 21m</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {countries.map((country) => (
              <tr key={country.country} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium !text-gray-900">{country.country}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm !text-gray-900">{country.BTC.toLocaleString('en-US', { maximumFractionDigits: 1 })}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm !text-gray-900">
                  {country.value >= 1000000000 
                    ? `$${(country.value / 1000000000).toFixed(2)} B`
                    : `$${(country.value / 1000000).toFixed(2)} M`}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm !text-gray-900">{country.percentage.toFixed(3)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 