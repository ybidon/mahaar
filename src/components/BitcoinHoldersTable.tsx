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
    entity: 'Strategy (MicroStrategy)',
    country: 'US',
    btc: 650000,
    value: '$60.64 B',
    percentage: '3.095%'
  },
  {
    entity: 'Marathon Digital Holdings Inc',
    country: 'US',
    btc: 52850,
    value: '$4.93 B',
    percentage: '0.252%'
  },
  {
    entity: 'Twenty One Capital (XXI)',
    country: 'US',
    btc: 37229.7,
    value: '$3.47 B',
    percentage: '0.177%'
  },
  {
    entity: 'Metaplanet Inc.',
    country: 'JP',
    btc: 30823,
    value: '$2.88 B',
    percentage: '0.147%'
  },
  {
    entity: 'Bullish',
    country: 'US',
    btc: 24340,
    value: '$2.27 B',
    percentage: '0.116%'
  },
  {
    entity: 'Riot Platforms, Inc.',
    country: 'US',
    btc: 19324,
    value: '$1.80 B',
    percentage: '0.092%'
  },
  {
    entity: 'Galaxy Digital Holdings',
    country: 'CA',
    btc: 17102,
    value: '$1.60 B',
    percentage: '0.081%'
  },
  {
    entity: 'Coinbase Global, Inc.',
    country: 'US',
    btc: 14458,
    value: '$1.35 B',
    percentage: '0.069%'
  },
  {
    entity: 'Hut 8 Corp',
    country: 'CA',
    btc: 13696,
    value: '$1.28 B',
    percentage: '0.065%'
  },
  {
    entity: 'CleanSpark Inc',
    country: 'US',
    btc: 13033,
    value: '$1.22 B',
    percentage: '0.062%'
  }
];

export default function BitcoinHoldersTable() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium !text-gray-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium !text-gray-500 uppercase tracking-wider">Bitcoin Holdings</th>
              <th className="px-6 py-3 text-left text-xs font-medium !text-gray-500 uppercase tracking-wider">Value (USD)</th>
              <th className="px-6 py-3 text-left text-xs font-medium !text-gray-500 uppercase tracking-wider">% of 21m</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {holders.map((holder) => (
              <tr key={holder.entity} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium !text-gray-900">{holder.entity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm !text-gray-900">{holder.btc.toLocaleString('en-US', { maximumFractionDigits: 1 })}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm !text-gray-900">{holder.value}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm !text-gray-900">{holder.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 