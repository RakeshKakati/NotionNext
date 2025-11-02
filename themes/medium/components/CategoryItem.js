import Link from 'next/link'

export default function CategoryItem ({ selected, category, categoryCount }) {
  return (
    <Link
      href={`/category/${category}`}
      passHref
      className={(selected
        ? 'text-black dark:text-white font-medium '
        : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white') +
      ' flex text-sm items-center duration-200 cursor-pointer py-0.5 font-normal whitespace-nowrap'}>

      <span>{category}{categoryCount && ` (${categoryCount})`}</span>

    </Link>
  );
}
