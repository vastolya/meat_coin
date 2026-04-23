import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import MailIcon from '../icons/MailIcon'
import Telegram from './Telegram'

const Footer = () => {
  return (
    <footer className="mx-auto max-w-360 px-20 py-11">
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-4 flex h-full flex-col justify-between gap-4">
          <div className="gap7 flex flex-col gap-7">
            <h3 className="text-accent pb-2 text-2xl leading-[116%] font-extrabold tracking-normal underline">
              Санкт-Петербург
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm leading-[148%] font-medium tracking-[1%] text-(--color-gray)">
                Адрес
              </p>
              <p className="text-base leading-[148%] font-medium tracking-[1%]">
                ул. Рубинштейна • 4
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm leading-[148%] font-medium tracking-[1%] text-(--color-gray)">
              Контакты
            </p>
            <div className="flex items-center gap-2">
              <a href="tel:84992831911" className="text-accent">
                +7 (499) 283-19-11
              </a>
              <a href="" target="_blank" className="px-4 py-2">
                <MailIcon width={24} height={24} />
              </a>
              <a href="" target="_blank" className="px-4 py-2">
                <Telegram width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-4 flex h-full flex-col justify-between gap-4">
          <div className="gap7 flex flex-col gap-7">
            <h3 className="text-accent pb-2 text-2xl leading-[116%] font-extrabold tracking-normal underline">
              Москва
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm leading-[148%] font-medium tracking-[1%] text-(--color-gray)">
                Адрес
              </p>
              <p className="text-base leading-[148%] font-medium tracking-[1%]">
                Смоленская площадь • 5 &quot;БЦ Смоленский пассаж <br /> 2&quot; • 4 этаж •
                (отдельный вход со стороны Николощеповского переулка)
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm leading-[148%] font-medium tracking-[1%] text-(--color-gray)">
              Контакты
            </p>
            <div className="flex items-center gap-2">
              <a href="tel:84992831911" className="text-accent">
                +7 (499) 283-19-11
              </a>
              <a href="" target="_blank" className="px-4 py-2">
                <MailIcon width={24} height={24} />
              </a>
              <a href="" target="_blank" className="px-4 py-2">
                <Telegram width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-4 flex h-full flex-col justify-between gap-4">
          <div className="gap7 flex flex-col gap-7">
            <h3 className="text-accent pb-2 text-2xl leading-[116%] font-extrabold tracking-normal underline">
              Комарово
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm leading-[148%] font-medium tracking-[1%] text-(--color-gray)">
                Адрес
              </p>
              <p className="text-base leading-[148%] font-medium tracking-[1%]">
                Ленинградская область • пос. Комарово • Приморское шоссе • 466
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm leading-[148%] font-medium tracking-[1%] text-(--color-gray)">
              Контакты
            </p>
            <div className="flex items-center gap-2">
              <a href="tel:84992831911" className="text-accent">
                +7 (499) 283-19-11
              </a>
              <a href="" target="_blank" className="px-4 py-2">
                <MailIcon width={24} height={24} />
              </a>
              <a href="" target="_blank" className="px-4 py-2">
                <Telegram width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-devider mt-7 h-[1.5px] w-full" />

      <div className="grid grid-cols-12 gap-7 py-11">
        <div className="col-span-4 flex flex-col gap-4">
          <p className="text-sm leading-[148%] font-medium tracking-[1%] text-(--color-gray)">
            Навигация
          </p>
          <div className="flex gap-2">
            <p className="text-base leading-[148%] font-medium tracking-[1%]">Рестораны</p>
            <Image src={'/dropdown.svg'} alt="dropdown" width={24} height={24} />
          </div>
          <Link href={'/'} className="text-base leading-[148%] font-medium tracking-[1%]">
            Меню
          </Link>
          <Link href={'/'} className="text-base leading-[148%] font-medium tracking-[1%]">
            Шефы
          </Link>
          <Link href={'/'} className="text-base leading-[148%] font-medium tracking-[1%]">
            События
          </Link>
          <Link href={'/'} className="text-base leading-[148%] font-medium tracking-[1%]">
            Программа лояльности
          </Link>
        </div>
        <div className="col-span-4 flex flex-col gap-4">
          <p className="text-sm leading-[148%] font-medium tracking-[1%] text-(--color-gray)">
            О бренде
          </p>
          <Link href={'/'} className="text-base leading-[148%] font-medium tracking-[1%]">
            О нас
          </Link>
          <Link href={'/'} className="text-base leading-[148%] font-medium tracking-[1%]">
            Пресса о нас
          </Link>
          <Link href={'/'} className="text-base leading-[148%] font-medium tracking-[1%]">
            Инвесторам
          </Link>
          <Link href={'/'} className="text-base leading-[148%] font-medium tracking-[1%]">
            Вакансии
          </Link>
        </div>
        <div className="col-span-4 flex flex-col gap-4">
          <p className="text-sm leading-[148%] font-medium tracking-[1%] text-(--color-gray)">
            Сервис
          </p>
          <Link href={'/'} className="text-base leading-[148%] font-medium tracking-[1%]">
            Доставка
          </Link>
          <Link href={'/'} className="text-base leading-[148%] font-medium tracking-[1%]">
            Подарочные карты
          </Link>
          <Link href={'/'} className="text-base leading-[148%] font-medium tracking-[1%]">
            Контакты
          </Link>
          <Link href={'/'} className="text-base leading-[148%] font-medium tracking-[1%]">
            Отзывы
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Link href={'/'} className="">
          <Image src={'/logo_accent.svg'} alt="" width={190} height={34} />
        </Link>
        <div className="flex gap-7">
          <Image src={'/yandex_mesto.svg'} alt="" width={71} height={40} />
          <Button text="Оставить отзыв" variant="secondary" />
        </div>
      </div>

      <div className="bg-devider mt-7 mb-11 h-[1.5px] w-full" />

      <div className="flex justify-between">
        <p className="text-sm leading-[148%] font-medium tracking-[1%] text-(--color-gray)">
          © Meat_Coin, 2026 . Все права защищены
        </p>

        <div className="flex gap-6">
          {[
            { title: 'Правила посещения ресторана', href: '/rules' },
            { title: 'Политика конфиденциальности', href: '/policy' },
            { title: 'Согласие на получение рассылки', href: '/agreement' },
            { title: 'Настройки cookies', href: '/cookies' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              className="text-sm leading-[148%] font-medium tracking-[1%] text-(--color-gray) underline"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
