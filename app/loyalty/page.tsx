import AnimatedDiv from '@/components/ui/AnimatedDiv'
import Button from '@/components/ui/Button'
import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import H2Title from '@/components/ui/H2Title'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'
import Image from 'next/image'

const loyaltyMobileSteps = [
  {
    step: '1 шаг',
    className: 'pb-9',
    text: (
      <>
        <span className="text-gray">Отсканируйте QR-код</span>
        <br /> или нажмите на кнопку <br /> «Оформить карту»
      </>
    ),
  },
  {
    step: '2 шаг',
    className: 'pb-15',
    text: (
      <>
        Заполните анкету, <br /> указав свои данные
      </>
    ),
  },
  {
    step: '3 шаг',
    className: 'pb-6',
    text: (
      <>
        Получите виртуальную карту лояльности meat_coin <br /> и добавьте её в «Wallet»
      </>
    ),
  },
]

export default function LoyaltyPage() {
  return (
    <>
      <GridSection className="bg-beige pt-6 pb-12 md:pt-11 md:pb-30">
        <H1Title className="col-span-5 mb-2 text-black md:col-span-8 md:col-start-5 md:mb-0">
          Программа лояльности <span className="text-accent">meat_coin</span>
        </H1Title>
        <div className="relative col-span-5 h-51 w-full rounded-lg md:col-span-12 md:h-105">
          <Image src="/loyalty_01.webp" alt="Программа лояльности" fill sizes="auto" />
        </div>

        <Button text="Оформить карту" className="col-span-5 mt-2 w-full md:hidden" />
      </GridSection>

      <GridSection className="py-12 md:py-30">
        <Paragraph className="text-gray col-span-5 md:col-span-4" delay={0.2}>
          Получайте уникальные предложения от наших ресторанов!
        </Paragraph>

        <H2Title className="col-span-5 pb-7 md:col-span-8 md:pb-11" delay={0.4}>
          Cтаньте участником программы лояльности
        </H2Title>

        <H3Title
          className="text-gray col-span-5 pb-4 md:col-span-4 md:col-start-5 md:pb-3"
          delay={0.6}
        >
          Чтобы перейти к регистрации в программе лояльности
        </H3Title>

        <div className="relative col-span-5 md:hidden">
          <AnimatedDiv className="bg-devider absolute top-12 bottom-18 left-9 w-0.75" delay={0.8} />

          {loyaltyMobileSteps.map(({ step, className, text }) => (
            <div key={step} className={`relative flex items-start gap-2 ${className}`}>
              <Paragraph
                className="bg-dark-black flex min-w-17.5 items-center justify-center rounded-sm p-3"
                delay={0.8}
              >
                {step}
              </Paragraph>
              <Paragraph delay={1}>{text}</Paragraph>
            </div>
          ))}
        </div>

        <div className="col-span-5 -mx-4 flex gap-2 overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
          <Image
            src="/card_5.webp"
            alt="Карта лояльности 5%"
            width={202}
            height={125}
            className="w-50.5"
          />
          <Image
            src="/card_10.webp"
            alt="Карта лояльности 10%"
            width={202}
            height={125}
            className="w-50.5"
          />
          <Image
            src="/card_15.webp"
            alt="Карта лояльности 15%"
            width={202}
            height={125}
            className="w-50.5"
          />
        </div>

        <div className="col-span-4 col-start-1 hidden md:block">
          <H3Title className="bg-dark-black mb-74.5 w-full rounded-sm py-4 text-center">
            1 шаг
          </H3Title>

          <H3Title className="bg-dark-black mb-22.5 w-full rounded-sm py-4 text-center">
            2 шаг
          </H3Title>

          <H3Title className="bg-dark-black w-full rounded-sm py-4 text-center">3 шаг</H3Title>
        </div>

        <div className="relative col-span-8 hidden pl-7 md:block">
          <div className="absolute -left-2 flex flex-col items-center gap-2">
            <div className="bg-border h-2.5 w-0.5 rounded-sm" />
            <div className="bg-border h-4 w-4 rounded-full" />
            <div className="bg-border h-131.5 w-0.5 rounded-sm" />
          </div>
          <Paragraph className="pb-4">
            Отсканируйте QR-код <br /> или нажмите на кнопку <br /> «Оформить карту»
          </Paragraph>
          <div className="border-accent w-fit rounded-sm border-2 p-2">
            <Image src={'/qr.webp'} alt="QR-код" width={176} height={176} />
          </div>
          <Paragraph className="pt-15 pb-4">Заполните анкету, указав свои данные</Paragraph>
          <Button text="Оформить карту" variant="primary" />
          <Paragraph className="pt-19.5 pb-4">
            Получите виртуальную карту лояльности meat_coin <br /> и добавьте её в «Wallet»
          </Paragraph>
          <div className="flex gap-2">
            <Image src={'/card_5.webp'} alt="Карта лояльности 5%" width={202} height={125} />
            <Image src={'/card_10.webp'} alt="Карта лояльности 10%" width={202} height={125} />
            <Image src={'/card_15.webp'} alt="Карта лояльности 15%" width={202} height={125} />
          </div>
        </div>
      </GridSection>

      <GridSection className="pt-30">
        <>
          <Paragraph className="text-gray col-span-4">Станьте частью закрытого круга</Paragraph>
          <H2Title className="col-span-8">
            <span className="text-accent">Meat Coin Club</span> Преимущества программы
          </H2Title>
        </>

        <>
          <div className="hidden flex-col justify-end md:col-span-4 md:flex">
            <Image src="/loyalty.svg" alt="Программа лояльности" width={299} height={236} />
          </div>

          <div className="col-span-8">
            <div className="border-border flex w-full border-b py-11">
              <H3Title className="w-1/2">Копите миткоины</H3Title>
              <div className="flex w-1/2 flex-col gap-2">
                <Paragraph className="text-gray">
                  За каждую покупку в ресторанах сети вы получаете бонусные баллы — миткоины
                </Paragraph>
                <Paragraph>
                  Их можно использовать для оплаты заказа после достижении уровня Золотая карта.
                </Paragraph>
              </div>
            </div>

            <div className="border-border flex w-full border-b py-11">
              <H3Title className="w-1/2">Выгодные условия</H3Title>
              <div className="flex w-1/2 flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Paragraph className="text-gray">Белая карта (0–300 000 ₽)</Paragraph>
                  <Paragraph>
                    5% бонусов от суммы чека. Бонусы становятся доступны к списанию после присвоения
                    статуса «Золотая карта»
                  </Paragraph>
                </div>

                <div className="flex flex-col gap-2">
                  <Paragraph className="text-gray">Золотая карта (300 000–800 000 ₽)</Paragraph>
                  <Paragraph>10% бонусов от суммы чека</Paragraph>
                </div>

                <div className="flex flex-col gap-2">
                  <Paragraph className="text-gray">Черная карта (от 800 000 ₽)</Paragraph>
                  <Paragraph>15% бонусов от суммы чека</Paragraph>
                </div>
              </div>
            </div>

            <div className="border-border flex w-full border-b py-11">
              <H3Title className="w-1/2">Дополнительные бонусы</H3Title>
              <div className="flex w-1/2 flex-col gap-2">
                <Paragraph className="text-gray">
                  Получайте дополнительные 10% бонусов за 3 дня до и 3 дня после дня рождения
                </Paragraph>
                <Paragraph>
                  Достигнув уровня «Черная карта» и суммы заказов от 1 300 000 ₽, получите именной
                  нож meat_coin
                </Paragraph>
              </div>
            </div>

            <div className="border-border flex w-full border-b py-11">
              <H3Title className="w-1/2">Простое использование</H3Title>
              <div className="flex w-1/2 flex-col gap-2">
                <Paragraph className="text-gray">Виртуальная карта всегда под рукой</Paragraph>
                <Paragraph>Просто покажите её сотруднику ресторана перед оплатой</Paragraph>
              </div>
            </div>
          </div>
        </>

        <Button
          variant="secondary"
          text="Приобрести подарочную карту"
          className="col-span-8 col-start-5 mt-18 w-full text-white"
        />
      </GridSection>

      <GridSection className="pt-30">
        <>
          <Paragraph className="text-gray col-span-4">
            Подарочный сертификат — универсальный статусный подарок
          </Paragraph>
          <H2Title className="col-span-8">Как использовать миткоины</H2Title>
        </>
        <>
          <div className="col-span-4 flex h-full flex-col justify-center pt-26">
            <div>
              <Image src={'/loyalty_cards.webp'} alt="Карты лояльности" width={336} height={280} />
            </div>
          </div>

          <div className="col-span-6 pt-26">
            <div className="bg-dark-black w-fit rounded-sm p-4">
              <H3Title>1 миткоин = 1 рубль</H3Title>
            </div>
            <H3Title className="pt-11 pb-4">
              Накопленные бонусы можно использовать для оплаты до 50% от суммы чека
            </H3Title>
            <ul className="flex list-disc flex-col gap-2 pb-7 pl-5 text-base leading-[148%] font-medium tracking-[1%]">
              <li>
                Бонусы поступают на карту в течение 3 рабочих дней с момента совершения оплаты
              </li>
              <li>Можно оплатить часть счета бонусами или накапливать их</li>
              <li>На счета, оплаченные бонусами, бонусы не начисляются</li>
              <li>Если сумма покупок за год меньше 200 000 ₽, бонусы обнуляются</li>
            </ul>
            <Paragraph className="text-gray pb-2">Удобно использовать</Paragraph>
            <Paragraph>
              Используйте бонусы через номер телефона, виртуальную карту <br /> или в приложении
              «Wallet»
            </Paragraph>
          </div>
        </>
      </GridSection>

      <GridSection className="gap-y-11! py-30">
        <H2Title className="col-span-12 text-center">
          Условия бонусной программы meat_coin доступны по ссылкам
        </H2Title>
        <div className="col-span-12 flex w-full gap-2">
          <Button text="Санкт-Петербург" className="w-full text-white" variant="secondary" />
          <Button text="Москва" className="w-full text-white" variant="secondary" />
          <Button text="Комарово" className="w-full text-white" variant="secondary" />
        </div>
      </GridSection>
    </>
  )
}
