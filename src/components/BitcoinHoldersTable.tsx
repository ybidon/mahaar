import Image from 'next/image';

interface BitcoinHolder {
  entity: string;
  country: string;
  btc: number;
  value: string;
  percentage: string;
}

const holders: BitcoinHolder[] = [
  {
    entity: 'MicroStrategy',
    country: 'US',
    btc: 499096,
    value: '$42,186,054,463',
    percentage: '2.377%'
  },
  {
    entity: 'Marathon Digital Holdings Inc',
    country: 'US',
    btc: 40435,
    value: '$3,417,765,544',
    percentage: '0.193%'
  },
  {
    entity: 'Riot Platforms, Inc.',
    country: 'US',
    btc: 18221,
    value: '$1,540,128,749',
    percentage: '0.087%'
  },
  {
    entity: 'Tesla, Inc',
    country: 'US',
    btc: 11509,
    value: '$972,797,419',
    percentage: '0.055%'
  },
  {
    entity: 'CleanSpark Inc',
    country: 'US',
    btc: 10556,
    value: '$892,245,161',
    percentage: '0.05%'
  },
  {
    entity: 'Hut 8 Corp',
    country: 'CA',
    btc: 10096,
    value: '$853,363,693',
    percentage: '0.048%'
  },
  {
    entity: 'Coinbase Global, Inc.',
    country: 'US',
    btc: 9000,
    value: '$760,724,369',
    percentage: '0.043%'
  },
  {
    entity: 'Block, Inc.',
    country: 'US',
    btc: 8211,
    value: '$694,034,200',
    percentage: '0.039%'
  },
  {
    entity: 'Galaxy Digital Holdings',
    country: 'CA',
    btc: 8100,
    value: '$684,651,933',
    percentage: '0.039%'
  },
  {
    entity: 'Bitcoin Group SE',
    country: 'DE',
    btc: 3830,
    value: '$323,730,481',
    percentage: '0.018%'
  }
];

export default function BitcoinHoldersTable() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bitcoin Holdings</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value (USD)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% of Treasury</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {holders.map((holder) => (
              <tr key={holder.entity} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{holder.entity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{holder.btc.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{holder.value}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{holder.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 