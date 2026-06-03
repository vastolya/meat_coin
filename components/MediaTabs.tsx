import Link from 'next/link'

type MediaTabsProps = {
  active: 'blog' | 'news' | 'press'
}

const tabs = [
  { text: 'Блог', href: '/blog', value: 'blog', className: 'w-35' },
  { text: 'Новости', href: '/news', value: 'news', className: 'w-44' },
  { text: 'Пресса о нас', href: '/press', value: 'press', className: 'w-63' },
] as const

export default function MediaTabs({ active }: MediaTabsProps) {
  return (
    <div className="bg-beige flex w-fit items-center rounded-sm p-1">
      {tabs.map((tab) => (
        <Link
          key={tab.value}
          href={tab.href}
          className={`flex h-10 items-center justify-center rounded-sm text-center leading-[148%] font-medium transition-colors ${tab.className} ${
            active === tab.value ? 'bg-accent text-white' : 'text-border hover:text-accent'
          }`}
        >
          {tab.text}
        </Link>
      ))}
    </div>
  )
}
