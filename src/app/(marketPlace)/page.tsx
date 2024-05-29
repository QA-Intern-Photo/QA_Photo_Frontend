import Link from 'next/link'

import styles from './page.module.scss'
import CommonButton from '@/app/_components/Button'
import Header from '@/app/_components/Header'
import CommonHeader from '@/app/_components/Header'
import Chip from '@/app/_components/Chip'
import Grade from '@/app/_components/Grade'
import GradeChip from '@/app/_components/GradeChip'
import SelectComponent from '@/app/_components/Select/Select'
import Dropdown from '@/app/_components/Dropdown'
import Pagination from '@/app/_components/pagination'
import Title from '@/app/_components/Title'
import SearchInput from '@/app/_components/SearchInput'
import Card from '../_components/Card/CardComponents'

export default function Home() {
  const universal = ['COMMON', 'RARE', 'SUPERRARE', 'LEGENDARY']

  return (
    <main>
      <Header />
      테스트
      <p className={styles.text}>테스트다용</p>
      <CommonButton buttonStyle="secondary" thickness="thin">
        {'흠냐'}
      </CommonButton>
      <Chip>내용</Chip>
      <Grade type="detail" />
      <GradeChip count={20} grade={'LEGENDARY'} />
      <Dropdown list={universal} attribute={'등급'} />
      <Pagination count={2000} />
      <Title>
        <div className={styles.title}>제목</div>
        <div className={styles.buttonWrapper}>
          <CommonButton thickness="thin" disabled={false}>
            포토카드 교환하기
          </CommonButton>
        </div>
      </Title>
      <SearchInput />
      <Link href={'/mygallery/create-card'}>
        <CommonButton>포토카드생성 페이지</CommonButton>
      </Link>
      <Link href={'/login'}>
        <CommonButton>로그인 페이지</CommonButton>
      </Link>
      <Link href={'/signup'}>
        <CommonButton>회원가입 페이지</CommonButton>
      </Link>
      <Card>
        <Card.image
          imageUrl={'/images/image1.png'}
          isSoldOut={true}
          hasChip={true}
          chip="exchange"
        />
        <Card.information
          title={'스페인 여행'}
          genre="풍경"
          grade="common"
          type="exchange"
          maker="프로여행러"
          point={4}
        />
      </Card>
    </main>
  )
}
