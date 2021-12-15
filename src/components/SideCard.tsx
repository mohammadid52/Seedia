import Card from 'components/atoms/Card'
import { map } from 'lodash'

const news = [
  { name: 'WHO sets global vaccination goals', readers: '54,460' },
  { name: 'WHO sets global vaccination goals', readers: '54,460' },

  { name: 'WHO sets global vaccination goals', readers: '54,460' },
]

const SideCard = () => {
  return (
    <Card
      className=""
      secondary
      cardTitle="13RMS News"
      content={
        <div className="text-left  cursor-pointer ">
          <ul className="flex flex-col gap-y-4">
            {map(news, (_news, idx: number) => (
              <li key={idx} className=" pl-2">
                <h6 className="text-xs font-semibold mb-1 uppercase link-hover dark:text-white text-gray-900 ">
                  {_news.name}
                </h6>
                <p className="text-gray-500 uppercase text-xs italic">
                  Top news • {_news.readers} readers
                </p>
              </li>
            ))}
          </ul>
        </div>
      }
    />
  )
}

export default SideCard
