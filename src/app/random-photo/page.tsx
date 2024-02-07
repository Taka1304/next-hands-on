'use client'

import Button from '@/components/Button'
import React, { useState } from 'react'
import Image from 'next/image'

import { getRandomPhoto } from './photo'

const Page = () => {
  const [image, setImage] = useState('')

  const handleClick = async () => {
    const data = await getRandomPhoto()
    console.log(data)
    setImage(data.urls.regular)
  }
  console.log(image)
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <Image src={image || 'http://placekitten.com/400/400/'} alt='' width={400} height={400}/>
      <Button onClick={handleClick}>
        画像を更新
      </Button>
    </div>
  )
}

export default Page
