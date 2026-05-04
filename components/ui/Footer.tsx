import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import MailIcon from '../icons/MailIcon'
import Telegram from './Telegram'
import Paragraph from './Paragraph'

const Footer = () => {
  return (
    <footer className="mx-auto max-w-360 px-4 py-12 md:px-20 md:py-11">
      <div className="hidden grid-cols-12 gap-7 md:grid">
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

      <div className="bg-devider mt-7 mb-11 hidden h-[1.5px] w-full md:flex" />

      <div className="flex flex-col gap-6 py-11 md:grid md:grid-cols-12 md:gap-7">
        {(
          [
            {
              title: 'Навигация',
              header: { label: 'Рестораны', dropdown: true },
              links: [
                { label: 'Меню', href: '/' },
                { label: 'Шефы', href: '/' },
                { label: 'События', href: '/' },
                { label: 'Программа лояльности', href: '/' },
              ],
            },
            {
              title: 'О бренде',
              links: [
                { label: 'О нас', href: '/' },
                { label: 'Пресса о нас', href: '/' },
                { label: 'Инвесторам', href: '/' },
                { label: 'Вакансии', href: '/' },
              ],
            },
            {
              title: 'Сервис',
              links: [
                { label: 'Доставка', href: '/' },
                { label: 'Подарочные карты', href: '/' },
                { label: 'Контакты', href: '/' },
                { label: 'Отзывы', href: '/' },
              ],
            },
          ] as const
        ).map((col) => (
          <div key={col.title} className="flex flex-col gap-4 md:col-span-4">
            <p className="text-sm leading-[148%] font-medium tracking-[1%] text-(--color-gray)">
              {col.title}
            </p>
            {'header' in col && (
              <div className="flex justify-between gap-2">
                <Paragraph>{col.header.label}</Paragraph>
                <Image src={'/dropdown.svg'} alt="dropdown" width={24} height={24} />
              </div>
            )}
            {col.links.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-accent transition-all duration-300"
              >
                <Paragraph delay={index * 0.2} className="">
                  {link.label}
                </Paragraph>
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-between gap-4 pb-6 md:flex-row md:items-center md:gap-0 md:pb-0">
        <Link href={'/'} className="py-3 md:py-0">
          <Image src={'/logo_accent.svg'} alt="" width={190} height={34} />
        </Link>
        <div className="flex gap-7">
          <Image src={'/yandex_mesto.svg'} alt="" width={71} height={40} />
          <Button text="Оставить отзыв" variant="secondary" className="w-full! text-white!" />
        </div>
      </div>

      <div className="bg-devider mt-7 mb-11 hidden h-[1.5px] w-full md:flex" />

      <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-0">
        <p className="text-base leading-[148%] font-medium tracking-[1%] text-(--color-gray) md:text-sm">
          © Meat_Coin, 2026 . Все права защищены
        </p>

        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          {[
            { title: 'Правила посещения ресторана', href: '/rules' },
            { title: 'Политика конфиденциальности', href: '/policy' },
            { title: 'Согласие на получение рассылки', href: '/agreement' },
            { title: 'Настройки cookies', href: '/cookies' },
          ].map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              className="text-base leading-[148%] font-medium tracking-[1%] text-(--color-gray) underline md:text-sm"
            >
              <p>{item.title} </p>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
