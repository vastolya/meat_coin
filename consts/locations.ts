export interface LocationSchedule {
  label: string
  time: string
}

export interface Location {
  name: string
  city: string
  note: string
  address: string
  addressNote?: string
  schedule: LocationSchedule[]
  phone: string
  phoneLabel: string
  telegram: string
  mapUrl: string
  mapPreview: string
}

export const LOCATIONS: Location[] = [
  {
    name: 'Steak & Terrace',
    city: 'Москва',
    note: 'Бесплатный крытый паркинг для гостей',
    address: 'Смоленская площадь • 5',
    addressNote: '(отдельный вход со стороны Николощеповского переулка)',
    schedule: [{ label: 'Ежедневно', time: '12:00–00:00' }],
    phone: 'tel:84991166093',
    phoneLabel: '+7 (499) 116-60-93',
    telegram: 'https://t.me/Meat_coin_bot',
    mapUrl:
      'https://yandex.ru/map-widget/v1/?um=constructor%3A8fa274675addcb7c5913109f940af88d15084baefad65478edc23090113f6f82&source=constructor',
    mapPreview: '/map_msc.webp',
  },
  {
    name: 'Country Club',
    city: 'Комарово',
    note: 'Для гостей доступна бесплатная парковка',
    address: 'Ленинградская область • пос. Комарово • Приморское шоссе • 466',
    schedule: [
      { label: 'ПН–ЧТ', time: '12:00–23:00' },
      { label: 'ПТ', time: '12:00–01:00' },
      { label: 'СБ–ВС', time: '11:00–01:00' },
    ],
    phone: 'tel:88122406666',
    phoneLabel: '+7 (812) 240-66-66',
    telegram: 'https://t.me/Meat_coin_bot',
    mapUrl:
      'https://yandex.ru/map-widget/v1/?um=constructor%3Ae6ea5694b4a72a3a6ae86566661606e092d9645a8e9e5d9d68ec41cc4d4f7baf&source=constructor',
    mapPreview: '/map_kmr.webp',
  },
  {
    name: 'Butcher&Grill',
    city: 'Санкт-Петербург',
    note: 'С видом на Садовое кольцо, у открытой кухни',
    address: 'ул. Рубинштейна • 4',
    schedule: [{ label: 'Ежедневно', time: '12:00–00:00' }],
    phone: 'tel:88122109098',
    phoneLabel: '+7 (812) 210 90 98',
    telegram: 'https://t.me/Meat_coin_bot',
    mapUrl:
      'https://yandex.ru/map-widget/v1/?um=constructor%3Ac8b46d347eec8cfb176c2c54e53bc8873db449d1f71a3a283cf40d17b197b4f6&source=constructor',
    mapPreview: '/map_spb.webp',
  },
]
