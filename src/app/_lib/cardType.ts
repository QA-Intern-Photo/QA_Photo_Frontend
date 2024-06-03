export type GradeType = 'common' | 'rare' | 'super_rare' | 'legendary'

export interface CardType {
  id: number
  userId: number
  name: string
  price: number
  grade: GradeType
  genre: string
  description: string
  totalQuantity: number
  remainingQuantity: number
  createdDate: string
  updatedDate: string
}

type InformationDetailType = {
  imageUrl: string
  nickName: string
}

export type OriginalCardType = Omit<CardType, 'description'> &
  InformationDetailType

export type MyCardType = Omit<CardType, 'description' | 'totalQuantity'> &
  InformationDetailType

export type CardForSaleType = Omit<
  CardType,
  'totalQuantity' | 'remainingQuantity' | 'description'
> &
  InformationDetailType & {
    registeredQuantity: number
    method: 'sale' | 'exchange'
  }

export type ExchangeCardType = Omit<
  CardType,
  'totalQuantity' | 'remainingQuantity'
> &
  InformationDetailType & {
    type?: 'seller' | 'buyer'
  }

export interface CardListType {
  list: CardListType[]
}
