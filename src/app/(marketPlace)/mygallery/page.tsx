import Title from '@/app/_components/Title'
import Button from '@/app/_components/Button'

import styles from './page.module.scss'
import OwnedCards from './_components/OwnedCards'

import { MOCK_GRADELIST } from './MOCK_DATA'

export default function myGalleryPage() {
  return (
    <main className={styles.main}>
      <div className={styles.titleWrapper}>
        <Title>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>마이갤러리</h2>
            <div className={styles.buttonContainer}>
              <Button thickness="thin">포토카드 생성하기</Button>
            </div>
          </div>
        </Title>
      </div>
      <OwnedCards totalCount={20} gradeList={MOCK_GRADELIST} userName="유디" />
      <div className={styles.floatButtonContainer}>
        <Button thickness="thin">포토카드 생성하기</Button>
      </div>
    </main>
  )
}
