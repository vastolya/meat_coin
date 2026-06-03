import AnimatedDiv from '@/components/ui/AnimatedDiv'
import Button from '@/components/ui/Button'
import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import H2Title from '@/components/ui/H2Title'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'
import ScrollFixedButton from '@/components/ui/ScrollFixedButton'
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

const loyaltyBenefits = [
  {
    title: 'Копите миткоины',
    contentGapClassName: 'gap-1',
    paragraphGapClassName: 'gap-1',
    items: [
      [
        {
          text: 'За каждую покупку в ресторанах сети вы получаете бонусные баллы — миткоины',
          isGray: true,
        },
        {
          text: 'Их можно использовать для оплаты заказа после достижении уровня Золотая карта.',
        },
      ],
    ],
  },
  {
    title: 'Выгодные условия',
    contentGapClassName: 'gap-4',
    paragraphGapClassName: 'gap-1',
    items: [
      [
        { text: 'Белая карта (0–300 000 ₽)', isGray: true },
        {
          text: '5% бонусов от суммы чека. Бонусы становятся доступны к списанию после присвоения статуса «Золотая карта»',
        },
      ],
      [
        { text: 'Золотая карта (300 000–800 000 ₽)', isGray: true },
        { text: '10% бонусов от суммы чека' },
      ],
      [
        { text: 'Черная карта (от 800 000 ₽)', isGray: true },
        { text: '15% бонусов от суммы чека' },
      ],
    ],
  },
  {
    title: 'Дополнительные бонусы',
    contentGapClassName: 'gap-2',
    paragraphGapClassName: 'gap-1',
    items: [
      [
        {
          text: 'Получайте дополнительные 10% бонусов за 3 дня до и 3 дня после дня рождения',
          isGray: true,
        },
        {
          text: 'Достигнув уровня «Черная карта» и суммы заказов от 1 300 000 ₽, получите именной нож meat_coin',
        },
      ],
    ],
  },
  {
    title: 'Простое использование',
    contentGapClassName: 'gap-2',
    paragraphGapClassName: 'gap-1',
    items: [
      [
        { text: 'Виртуальная карта всегда под рукой', isGray: true },
        { text: 'Просто покажите её сотруднику ресторана перед оплатой' },
      ],
    ],
  },
]

export default function LoyaltyPage() {
  return (
    <main className="relative">
      <ScrollFixedButton text="Оформить карту" />

      <div className="bg-beige">
        <GridSection className="pt-6 pb-12 md:pt-11 md:pb-30">
          <H1Title
            delay={0.2}
            className="col-span-5 mb-2 text-black md:col-span-8 md:col-start-5 md:mb-0"
          >
            Программа лояльности <span className="text-accent">meat_coin</span>
          </H1Title>

          <AnimatedDiv
            delay={0.4}
            className="relative col-span-5 h-51 w-full rounded-lg md:col-span-12 md:h-105"
          >
            <Image src="/loyalty_01.webp" alt="Программа лояльности" fill sizes="auto" />
          </AnimatedDiv>

          <AnimatedDiv delay={0.6} className="col-span-5 mt-2 md:hidden">
            <Button text="Оформить карту" className="w-full" />
          </AnimatedDiv>
        </GridSection>
      </div>

      <GridSection className="py-12 md:py-30">
        <Paragraph
          className="text-gray col-span-5 md:col-span-4"
          delay={{ mobile: 0.2, desktop: 0.2 }}
        >
          Получайте уникальные предложения от наших ресторанов!
        </Paragraph>

        <H2Title
          className="col-span-5 pb-7 md:col-span-8 md:pb-11"
          delay={{ mobile: 0.4, desktop: 0.4 }}
        >
          Cтаньте участником программы лояльности
        </H2Title>

        <H3Title
          className="text-gray col-span-5 pb-4 md:col-span-4 md:col-start-5 md:pb-3"
          delay={{ mobile: 0.6, desktop: 0.4 }}
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

        <AnimatedDiv
          delay={1.2}
          className="col-span-5 -mx-4 flex gap-2 overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden"
        >
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
        </AnimatedDiv>

        <AnimatedDiv delay={0.2} className="col-span-4 col-start-1 hidden md:block">
          <H3Title className="bg-dark-black mb-74.5 w-full rounded-sm py-4 text-center">
            1 шаг
          </H3Title>

          <H3Title className="bg-dark-black mb-22.5 w-full rounded-sm py-4 text-center">
            2 шаг
          </H3Title>

          <H3Title className="bg-dark-black w-full rounded-sm py-4 text-center">3 шаг</H3Title>
        </AnimatedDiv>

        <AnimatedDiv delay={0.4} className="relative col-span-8 hidden pl-7 md:block">
          <div className="absolute -left-2 flex flex-col items-center gap-2">
            <div className="bg-border h-2.5 w-0.5 rounded-sm" />
            <div className="bg-border h-4 w-4 rounded-full" />
            <div className="bg-border h-131.5 w-0.5 rounded-sm" />
          </div>
          <Paragraph className="pb-4">
            Отсканируйте QR-код <br /> или нажмите на кнопку <br /> «Оформить карту»
          </Paragraph>
          <div className="border-accent w-fit rounded-sm border-2 p-2">
            <Image src='/qr-loyalty.webp' alt="QR-код" width={176} height={176} />
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
        </AnimatedDiv>
      </GridSection>

      <GridSection className="md:pt-30">
        <Paragraph delay={0.2} className="text-gray col-span-5 md:col-span-4">
          Станьте частью закрытого круга
        </Paragraph>

        <H2Title delay={0.4} className="col-span-5 md:col-span-8">
          <span className="text-accent">Meat Coin Club</span> Преимущества программы
        </H2Title>

        <AnimatedDiv
          delay={{ mobile: 0.6, desktop: 0.2 }}
          className="hidden flex-col justify-end md:col-span-4 md:flex"
        >
          <Image src="/loyalty.svg" alt="Программа лояльности" width={299} height={236} />
        </AnimatedDiv>

        <AnimatedDiv delay={{ mobile: 0.4, desktop: 0.4 }} className="col-span-5 md:col-span-8">
          {loyaltyBenefits.map(({ title, contentGapClassName, paragraphGapClassName, items }) => (
            <div
              key={title}
              className="border-devider -mx-4 flex w-auto flex-col gap-4 border-b px-4 py-7 md:mx-0 md:w-full md:flex-row md:gap-0 md:px-0 md:py-11"
            >
              <H3Title className="w-full md:w-1/2">{title}</H3Title>
              <div className={`flex w-full flex-col ${contentGapClassName} md:w-1/2`}>
                {items.map((group, groupIndex) => (
                  <div
                    key={`${title}-${groupIndex}`}
                    className={`flex flex-col ${paragraphGapClassName}`}
                  >
                    {group.map(({ text, isGray }) => (
                      <Paragraph key={text} className={isGray ? 'text-gray' : undefined}>
                        {text}
                      </Paragraph>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </AnimatedDiv>

        <AnimatedDiv
          delay={{ mobile: 1, desktop: 0.4 }}
          className="col-span-5 mt-7 md:col-span-8 md:col-start-5 md:mt-11"
        >
          <Button
            variant="secondary"
            text="Приобрести подарочную карту"
            className="w-full text-white"
          />
        </AnimatedDiv>
      </GridSection>

      <GridSection className="pt-12 md:pt-30">
        <Paragraph delay={0.2} className="text-gray col-span-5 md:col-span-4">
          Подарочный сертификат — универсальный статусный подарок
        </Paragraph>

        <H2Title delay={0.4} className="col-span-5 md:col-span-8">
          Как использовать миткоины
        </H2Title>

        <AnimatedDiv
          delay={0.2}
          className="col-span-4 hidden h-full flex-col justify-center pt-26 md:flex"
        >
          <Image src={'/loyalty_cards.webp'} alt="Карты лояльности" width={336} height={280} />
        </AnimatedDiv>

        <div className="col-span-6 pt-7 md:pt-19">
          <AnimatedDiv
            delay={0.6}
            className="bg-dark-black w-full rounded-sm p-4 text-center md:w-fit"
          >
            <Paragraph className="font-medium md:text-2xl md:font-bold">
              1 миткоин = 1 рубль
            </Paragraph>
          </AnimatedDiv>

          <H3Title delay={0.8} className="pt-9 pb-4 md:pt-11">
            Накопленные бонусы можно использовать для оплаты до 50% от суммы чека
          </H3Title>

          <AnimatedDiv delay={1}>
            <ul className="flex list-disc flex-col gap-2 pb-7 pl-5 text-base leading-[148%] font-medium tracking-[1%]">
              <li>
                Бонусы поступают на карту в течение 3 рабочих дней с момента совершения оплаты
              </li>
              <li>Можно оплатить часть счета бонусами или накапливать их</li>
              <li>На счета, оплаченные бонусами, бонусы не начисляются</li>
              <li>Если сумма покупок за год меньше 200 000 ₽, бонусы обнуляются</li>
            </ul>
          </AnimatedDiv>

          <Paragraph delay={1.2} className="text-gray pb-2">
            Удобно использовать
          </Paragraph>

          <Paragraph delay={1.2}>
            Используйте бонусы через номер телефона, виртуальную карту <br /> или в приложении
            «Wallet»
          </Paragraph>
        </div>
      </GridSection>

      <GridSection className="gap-y-9 py-12 md:gap-y-11! md:py-30">
        <H2Title delay={0.2} className="col-span-5 md:col-span-12 md:text-center">
          Условия бонусной программы meat_coin доступны по ссылкам
        </H2Title>

        <AnimatedDiv
          delay={0.4}
          className="col-span-5 flex w-full flex-col gap-2 md:col-span-12 md:flex-row"
        >
          <Button text="Санкт-Петербург" className="w-full text-white" variant="secondary" />
          <Button text="Москва" className="w-full text-white" variant="secondary" />
          <Button text="Комарово" className="w-full text-white" variant="secondary" />
        </AnimatedDiv>
      </GridSection>
    </main>
  )
}
