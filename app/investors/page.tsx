import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import H2Title from '@/components/ui/H2Title'
import H3Title from '@/components/ui/H3Title'
import Ornament from '@/components/ui/Ornament'
import Paragraph from '@/components/ui/Paragraph'
import InvestorsScaleSection from '@/app/investors/InvestorsScaleSection'
import InvestorsAwardsSection from '@/app/investors/InvestorsAwardsSection'
import InvestorsGrowthSection from '@/app/investors/InvestorsGrowthSection'
import InvestorsRoadmapSection from '@/app/investors/InvestorsRoadmapSection'
import InvestorsCapitalSection from '@/app/investors/InvestorsCapitalSection'
import Image from 'next/image'
import InvestorsCorporateDocuments from './InvestorsCorporateDocuments'
import InvestorsDividendsSection from './InvestorsDividendsSection'
import Tag from '@/components/ui/Tag'
import RubleIcon from '@/components/icons/RubleIcon'
import Checkbox from '@/components/ui/Checkbox'
import FormInput from '@/components/ui/FormInput'
import FormTextarea from '@/components/ui/FormTextarea'
import Button from '@/components/ui/Button'

const Investors = () => {
  return (
    <main>
      <div className="bg-beige text-dark">
        <GridSection className="pt-18">
          <H1Title className="col-span-9">
            <span className="text-accent">Meat_Coin Инвестиции</span> в премиальный гастрономический
            опыт
          </H1Title>
          <div className="relative col-span-12 h-105 w-full rounded-sm">
            <Image src={'/investors_01.webp'} alt="Meat_Coin Инвестиции" fill />
          </div>
        </GridSection>

        <GridSection className="items-center py-30">
          <Ornament className="md:col-span-1!" color="var(--color-accent)" />

          <div className="col-span-4 col-start-5">
            <H2Title className="text-accent pb-18">Meat_Coin</H2Title>
            <Paragraph className="pb-2">
              Премиальные мясные рестораны, куда политики, знаменитости и предприниматели
              возвращаются ради авторского подхода к мясу и театрализованной подачи блюд с открытым
              огнем
            </Paragraph>
            <H3Title className="text-accent">
              Учениками самого Нусрета Гекче, он же Salt Bae
            </H3Title>
          </div>
          <Ornament className="col-span-1! col-start-12!" color="var(--color-accent)" />
        </GridSection>
      </div>

      <InvestorsScaleSection />

      <GridSection className="pt-30">
        <Image
          src={'/investors_08.webp'}
          alt="Статистика ресторанов"
          width={408}
          height={300}
          className="rounded-t-125 col-span-4 h-75 w-full"
        />
        <div className="col-span-4 flex flex-col justify-between py-7">
          <div className="flex flex-col gap-2">
            <H2Title>8 лет</H2Title>
            <Paragraph className="text-gray">На рынке</Paragraph>
          </div>
          <div className="flex flex-col gap-2">
            <H2Title>34%</H2Title>
            <Paragraph className="text-gray">Рост выручки в 2024 • 2025 году</Paragraph>
          </div>
        </div>
        <div className="col-span-4 flex flex-col justify-between py-7">
          <div className="flex flex-col gap-2">
            <H2Title>6</H2Title>
            <Paragraph className="text-gray">Действующих ресторанов</Paragraph>
          </div>
          <div className="flex flex-col gap-2">
            <H2Title>755 млн ₽</H2Title>
            <Paragraph className="text-gray">Выручка за 2025</Paragraph>
          </div>
        </div>
      </GridSection>

      <InvestorsAwardsSection />

      <InvestorsGrowthSection />

      <InvestorsRoadmapSection />

      <InvestorsCapitalSection />

      <InvestorsCorporateDocuments />

      <InvestorsDividendsSection />

      <div className="bg-white">
        <div className="bg-dark-black rounded-t-[8rem]">
          <GridSection className="gap-y-18! py-30">
            <H2Title className="col-span-8 col-start-5">Инвестиционное предложение</H2Title>
            <div className="col-span-4 flex flex-col justify-between">
              <div>
                <Tag
                  text="Обращения рассматриваются индивидуально"
                  variant="gray"
                  className="mb-3"
                />
                <H3Title className="pb-2">
                  Компания рассматривает следующий раунд публичных инвестиций в 2027 году
                </H3Title>
                <Paragraph className="text-gray">
                  Его параметры, включая структуру сделки и сроки, будут раскрыты дополнительно
                </Paragraph>
              </div>

              <div>
                <Paragraph>
                  Помимо открытых раундов привлечения финансирования компания открыта к обсуждению
                  партнерства с крупными инвесторами в индивидуальном порядке
                </Paragraph>
                <Paragraph className="text-gray">
                  Для предметного диалога оставьте заявку или напишите по указанным внизу страницы
                  контактам
                </Paragraph>
              </div>
            </div>
            <div className="border-devider col-span-5 flex flex-col gap-7 rounded-sm border p-7">
              <div className="flex flex-col gap-2">
                <H3Title>Оставьте заявку</H3Title>
                <Paragraph>
                  Наши инвестиционные менеджеры свяжутся с вами, чтобы ответить на все вопросы
                  и предложить варианты инвестиций
                </Paragraph>
              </div>

              <div className="flex flex-col gap-4">
                <FormInput type="text" placeholder="Имя*" required />

                <div className="flex gap-2">
                  <FormInput type="number" placeholder="Телефон*" required />
                  <FormInput type="email" placeholder="Email*" required />
                </div>

                <FormInput
                  type="number"
                  placeholder="Планируемая сумма инвестиций"
                  rightSlot={<RubleIcon />}
                />

                <FormTextarea placeholder="Комментарий" className="min-h-30" />
              </div>

              <div className="flex flex-col gap-2">
                <Button text="Оставить заявку" variant="primary" className="w-full" />
                <Checkbox
                  label={
                    <>
                      Нажимая кнопку «Оставить заявку», я даю свое согласие на обработку моих
                      персональных данных в соответствии с{' '}
                      <a href="#" className="text-white underline">
                        Федеральным законом от 27.07.2006 года № 152-ФЗ
                      </a>{' '}
                      <br />
                      «О персональных данных», на условиях и для целей, определенных в Согласии на
                      обработку персональных данных
                    </>
                  }
                />
              </div>
            </div>
          </GridSection>
        </div>
      </div>
    </main>
  )
}

export default Investors
