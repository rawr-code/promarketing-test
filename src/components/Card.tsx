import { useMemo, useState } from 'react'
import Image from 'next/image'

// Models
import { PromarketingModels } from '@models'

// Assets
import evoplay from '@assets/evoplay.png'
import playtech from '@assets/playtech.png'
import pragmaticplay from '@assets/pragmaticplay.png'
import spinomenal from '@assets/spinomenal.png'

// Utils
import { twclsx } from '@utils'

function Card({
  supplier,
  name,
  src,
  info,
  disabled,
}: PromarketingModels.Promarketing) {
  const [showInfo, setInfo] = useState(false)

  // TODO esto podría ir en un servicio para que al hacer fetch lo reemplace automaticamente la UI no se entere
  const imageSrc = useMemo(() => {
    if (supplier === 'evoplay') return evoplay.src
    else if (supplier === 'playtech') return playtech.src
    else if (supplier === 'pragmatic') return pragmaticplay.src
    else if (supplier === 'spinomenal') return spinomenal.src

    return ''
  }, [supplier])

  const handleShowInfo = () => {
    setInfo(p => !p)
  }

  return (
    <div className="group relative h-[200px] w-[249px] overflow-hidden rounded-2xl">
      <Image src={src} alt="bg" fill className="" />
      <div
        className={twclsx(
          'absolute inset-0 z-10 p-2',
          showInfo && 'bg-card-hover-gradient ',
          disabled ? 'bg-black/60' : 'group-hover:bg-card-hover-gradient',
        )}
      >
        <div
          className={twclsx(
            'relative h-[24px] w-[75px] rounded-md bg-[#010101CC]',
            disabled && 'opacity-60',
          )}
        >
          {imageSrc?.length ? (
            <Image
              src={imageSrc}
              alt="bg"
              fill
              className="absolute !top-1/2 !h-auto w-full !-translate-y-1/2 p-1"
            />
          ) : null}
        </div>
        {disabled ? (
          <button
            disabled
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  cursor-not-allowed select-none rounded-lg bg-[#E8E8E8] px-[18px] py-2 text-xs font-bold uppercase leading-[14px] text-[#909090]"
          >
            No disponible
          </button>
        ) : (
          <>
            <button
              className={twclsx(
                'absolute right-2 top-2 z-30 rounded-md bg-[#010101CC] p-1',
                showInfo && 'absolute bottom-2 top-auto',
              )}
              onClick={handleShowInfo}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_1425)">
                  <path
                    d="M8 0C3.58125 0 0 3.58125 0 8C0 12.4187 3.58125 16 8 16C12.4187 16 16 12.4187 16 8C16 3.58125 12.4187 0 8 0ZM8 15C4.14062 15 1 11.8594 1 8C1 4.14062 4.14062 1 8 1C11.8594 1 15 4.14062 15 8C15 11.8594 11.8594 15 8 15ZM8 5.75C8.41406 5.75 8.75 5.41437 8.75 5C8.75 4.58594 8.41406 4.25 8 4.25C7.58594 4.25 7.25 4.58437 7.25 5C7.25 5.41563 7.58437 5.75 8 5.75ZM9.5 11H8.5V7.5C8.5 7.225 8.275 7 8 7H7C6.725 7 6.5 7.225 6.5 7.5C6.5 7.775 6.725 8 7 8H7.5V11H6.5C6.225 11 6 11.225 6 11.5C6 11.775 6.225 12 6.5 12H9.5C9.77612 12 10 11.7761 10 11.5C10 11.225 9.775 11 9.5 11Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1425">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            {!showInfo ? (
              <button className="bg-primary/60 active:bg-primary absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none rounded-lg px-[18px] py-2 text-xs font-bold uppercase leading-[14px] text-white group-hover:block">
                Jugar ahora
              </button>
            ) : null}
            <div
              className={twclsx(
                'absolute bottom-[18px] left-3 flex-col',
                showInfo ? 'flex' : 'hidden group-hover:flex',
              )}
            >
              <h2 className="mb-[6px] font-bold leading-4 text-white">
                {name}
              </h2>
              {showInfo ? (
                <div className="flex flex-wrap gap-1">
                  <div className="bg-primary/20 flex w-max space-x-1 rounded-md p-1 text-xs font-bold uppercase leading-[14px] text-white">
                    <p>Version:</p>
                    <span>{info.version}</span>
                  </div>
                  <div className="bg-primary/20 flex w-max space-x-1 rounded-md p-1 text-xs font-bold uppercase leading-[14px] text-white">
                    <p>rtp:</p>
                    <span>{info.rtp}</span>
                  </div>
                  <div className="bg-primary/20 flex w-max space-x-1 rounded-md p-1 text-xs font-bold uppercase leading-[14px] text-white">
                    <p>votalidad</p>
                    <span>alta</span>
                  </div>
                </div>
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Card
