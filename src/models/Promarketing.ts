export interface Promarketing {
  id: number
  disabled: boolean
  info: Info
  name: string
  src: string
  supplier: Supplier
}
export type Supplier = 'playtech' | 'evoplay' | 'pragmatic' | 'spinomenal'

export interface Info {
  moodBonus: boolean
  rtp: string
  version: string
}
