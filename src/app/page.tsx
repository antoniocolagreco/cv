import { AsyncPage, DynamicMetadata, PageProps } from '@/types/next'
import Avatar from '../components/Avatar/Avatar'
import Contacts from '../components/Contacts/Contacts'
import BottomBackgroundCurve from '../components/Decorations/BottomBackgroundCurve'
import WorkBackgroundCurve from '../components/Decorations/ProjectsBackgroundCurve'
import TopBackgroundCurve from '../components/Decorations/TopBackgroundCurve'
import PastBackgroundCurve from '../components/Decorations/WorkBackgroundCurve'
import DownloadLink from '../components/DownloadLink/DownloadLink'
import Education from '../components/Education/Education'
import HomeLink from '../components/HomeLink/HomeLink'
import Languages from '../components/Languages/Languages'
import LocaleChanger from '../components/LocaleChanger/LocaleChanger'
import PrivacyLinks from '../components/PrivacyLinks/PrivacyLinks'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import Underline from '../components/Underline/Underline'
import WorkExperience from '../components/WorkExperience/WorkExperience'
import UpIcon from '../icons/UpIcon'
import Dictionary from '../types/locale'
import { getYear } from '../utilities/dates'
import { suffixPath } from '../utilities/suffixPath'

export type HomePageProps = PageProps & { params: { locale: string } }

export const generateMetadata: DynamicMetadata<HomePageProps> = async (props) => {
  const {
    params: { locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE },
    searchParams,
  } = props

  const data = await import(`/public/locales/${locale}.json`)
  const dictionary: Dictionary = JSON.parse(JSON.stringify(data))

  return {
    title: `${dictionary.name} | Resume`,
    description: dictionary.description,
    creator: dictionary.name,
    generator: 'Next.js',
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL || ''),
    icons: `${suffixPath}/favicon.ico`,
    keywords: [
      'Anonio',
      'Colagreco',
      'cv',
      'curriculum',
      'vitae',
      'resume',
      'next.js',
      'gatsby',
      'react',
      'typescript',
      'javascript',
      'web',
      'development',
      'app',
      'ssg',
      'isg',
      'ssr',
    ],
    openGraph: {
      title: dictionary.name,
      description: dictionary.description,
      images: `${suffixPath}/images/${locale}/og.webp`,
      type: 'profile',
    },
    twitter: {
      title: dictionary.name,
      description: dictionary.description,
      images: `${suffixPath}/images/${locale}/og.webp`,
      card: 'summary_large_image',
    },
  }
}

const HomePage: AsyncPage<HomePageProps> = async (props) => {
  const {
    params: { locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE },
    searchParams,
  } = props

  const data = await import(`/public/locales/${locale}.json`)
  const dictionary: Dictionary = JSON.parse(JSON.stringify(data))

  const locales = process.env.NEXT_PUBLIC_LOCALES?.split(',').map((locale) => {
    return { value: locale, node: locale, href: `${suffixPath}/${locale}` }
  })

  return (
    <>
      <header className=' relative px-4 sm:px-8 py-4 flex justify-end gap-4'>
        <TopBackgroundCurve
          className='absolute top-0 left-0 right-0'
          secondaryClassName='fill-amber-500'
          mainClassName=''
          height='200px'
          width='100%'
        />
        <DownloadLink href={`${suffixPath}/download/${locale}/antonio-colagreco-resume.pdf`} download>
          {dictionary.download_pdf}
        </DownloadLink>
        <HomeLink href={`${suffixPath}/${locale}`} />
        <LocaleChanger value={locale} options={locales} className='relative' />
      </header>
      <main>
        <div className='relative gap-x-8 gap-y-4 px-4 py-8 sm:px-8 grid grid-cols-[auto] sm:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] sm:justify-items-stretch grid-rows-[auto_1fr]'>
          <Avatar
            src={`${suffixPath}/images/avatar.webp`}
            alt={dictionary.avatar_alt}
            className='self-start justify-self-start hidden sm:block  row-start-2 col-start-1'
          />
          <div className='flex flex-col gap-2 col-start-1 sm:col-start-2 row-span-1'>
            <h1 className='text-3xl sm:text-4xl text-sky-600'>{dictionary.name}</h1>
            <h2 className='text-xl sm:text-2xl text-sky-700 font-bold'>{dictionary.job_title}</h2>
          </div>
          <div className='col-start-1 sm:col-start-2 row-span-1 row-start-2'>
            <Avatar
              src={`${suffixPath}/images/avatar.webp`}
              alt={dictionary.avatar_alt}
              className='float-left mr-4 mb-2 block sm:hidden'
            />
            <p className='text-base'>{dictionary.description}</p>
          </div>
          <Contacts
            dictionary={dictionary}
            className='row-span-1 row-start-3 col-start-1 sm:col-span-2 lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-2 break-inside-avoid'
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_auto] items-start gap-8 px-4 sm:px-8'>
          <Skills dictionary={dictionary} className='break-inside-avoid' />
          <div className='flex flex-wrap lg:flex-col gap-4 lg:gap-8'>
            <Languages dictionary={dictionary} className='grow break-inside-avoid' />
            <Education dictionary={dictionary} className='grow break-inside-avoid' />
          </div>
        </div>
        <div className='relative pt-[5.5rem] break-before-page'>
          <WorkBackgroundCurve
            className='absolute top-0 left-0 right-0 pointer-events-none bg-gradient-to-t '
            secondaryClassName='fill-green-600'
            mainClassName=''
            height='600px'
            width='100%'
          />
          <Projects dictionary={dictionary} className='px-4 sm:px-8 relative break-inside-avoid' />
        </div>
        <div className='relative pt-[5.5rem] break-before-page'>
          <PastBackgroundCurve
            className='absolute top-0 left-0 right-0 pointer-events-none'
            secondaryClassName='fill-rose-500'
            mainClassName=''
            height='600px'
            width='100%'
          />
          <WorkExperience dictionary={dictionary} className='px-4 sm:px-8 relative' />
        </div>
      </main>
      <footer className=''>
        <BottomBackgroundCurve
          className='mt-8'
          secondaryClassName='fill-amber-500'
          mainClassName=''
          height='150px'
          width='100%'
        />
        <div className='relative text-sm sm:text-base bg-gradient-to-b from-sky-700 to-sky-800  px-4 sm:px-8 pb-4 flex justify-center text-white justify-between'>
          <div className='grid grid-cols-3 gap-8'>
            <div className='flex flex-col flex-wrap gap-2'>
              <div>{`Antonio Colagreco - ${getYear(locale)}`}</div>
              <div>{`P.IVA 02349530689`}</div>
            </div>
            <PrivacyLinks dictionary={dictionary} />
            <a className='cursor-pointer flex gap-2 items-end justify-end fill-white group' href='#'>
              <Underline>{dictionary.scroll_to_top}</Underline>
              <UpIcon width={24} height={24} className='border-2 rounded-full border-amber-500 group-hover:' />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default HomePage

