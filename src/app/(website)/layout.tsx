import { Footer } from '@/globals/Footer'
import { Header } from '@/globals/Header'
import React, { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </div>
  )
}
