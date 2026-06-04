import Link from 'next/link'

type MediaTabsProps = {
  active: 'blog' | 'news' | 'press'
}

const tabs = [
  { text: 'Блог', href: '/blog', value: 'blog' },
  { text: 'Новости', href: '/news', value: 'news' },
  { text: 'Пресса о нас', href: '/press', value: 'press' },
] as const

export default function MediaTabs({ active }: MediaTabsProps) {
  return (
    <div className="bg-beige flex w-fit items-center rounded-sm p-1">
      {tabs.map((tab) => (
        <Link
          key={tab.value}
          href={tab.href}
          className={`flex h-10 w-fit items-center justify-center rounded-sm px-4 py-2.5 md:px-6 md:py-2 text-center leading-[148%] font-medium transition-colors ${
            active === tab.value ? 'bg-accent text-white' : 'text-border hover:text-accent'
          }`}
        >
          {tab.text}
        </Link>
      ))}
    </div>
  )
}
