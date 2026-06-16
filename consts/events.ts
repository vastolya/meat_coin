export interface EventItem {
  id: number
  date: string
  time: string
  title: string
  description: string
  subtitle?: string
  image: string
}

// TODO: удалить после подключения к CRM — события будут приходить с бэкенда
const PLACEHOLDER = '/event_placeholder.webp'

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 1,
    date: '20 июн 2026',
    time: '19:30',
    title: 'Гала-ужин в Meat_Coin',
    subtitle: 'Эксклюзивный гала-ужин в Meat_Coin с винами Villa VR',
    description:
      '20 июня состоится незабываемый гала-ужин в четыре руки от Хайяма Алимова и бренд-шефа Григория Кин при поддержке винодельной компании DP-Trade. Количество мест ограничено.',
    image: PLACEHOLDER,
  },
  {
    id: 2,
    date: '28 июн 2026',
    time: '15:00',
    title: 'Детский мастер-класс по карвингу',
    description: 'В VIP-гостиной Meat_Coin Комарово',
    image: PLACEHOLDER,
  },
  {
    id: 3,
    date: '4 июл 2026',
    time: '18:00',
    title: 'Дегустация стейков',
    description: 'Эксклюзивный гала-ужин в Meat_Coin с винами Villa VR',
    image: PLACEHOLDER,
  },
  {
    id: 4,
    date: '11 июл 2026',
    time: '19:00',
    title: 'Винный вечер',
    description: 'Эксклюзивный гала-ужин в Meat_Coin с винами Villa VR',
    image: PLACEHOLDER,
  },
  {
    id: 5,
    date: '18 июл 2026',
    time: '12:00',
    title: 'Бранч выходного дня',
    description: 'Эксклюзивный гала-ужин в Meat_Coin с винами Villa VR',
    image: PLACEHOLDER,
  },
  {
    id: 6,
    date: '25 июл 2026',
    time: '20:00',
    title: 'Гала-ужин в Meat_Coin',
    description: 'Эксклюзивный гала-ужин в Meat_Coin с винами Villa VR',
    image: PLACEHOLDER,
  },
  {
    id: 7,
    date: '1 авг 2026',
    time: '17:00',
    title: 'Барбекю на террасе',
    description: 'Эксклюзивный гала-ужин в Meat_Coin с винами Villa VR',
    image: PLACEHOLDER,
  },
  {
    id: 8,
    date: '8 авг 2026',
    time: '15:00',
    title: 'Детский мастер-класс по карвингу',
    description: 'В VIP-гостиной Meat_Coin Комарово',
    image: PLACEHOLDER,
  },
]

export interface PastPhoto {
  src: string
  // wide → 390×300, narrow → 236×300
  variant: 'wide' | 'narrow'
}

// перемешанный порядок широких/узких кадров — два ряда по 6
export const PAST_EVENT_PHOTOS_ROWS: PastPhoto[][] = [
  [
    { src: PLACEHOLDER, variant: 'wide' },
    { src: PLACEHOLDER, variant: 'narrow' },
    { src: PLACEHOLDER, variant: 'narrow' },
    { src: PLACEHOLDER, variant: 'wide' },
    { src: PLACEHOLDER, variant: 'narrow' },
    { src: PLACEHOLDER, variant: 'wide' },
  ],
  [
    { src: PLACEHOLDER, variant: 'wide' },
    { src: PLACEHOLDER, variant: 'narrow' },
    { src: PLACEHOLDER, variant: 'wide' },
    { src: PLACEHOLDER, variant: 'narrow' },
    { src: PLACEHOLDER, variant: 'narrow' },
    { src: PLACEHOLDER, variant: 'wide' },
  ],
]
