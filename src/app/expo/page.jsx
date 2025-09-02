import Image from 'next/image'
import React from 'react'

const Expo = () => {
  return (
    <div className=" grid grid-cols-4 mx-10 gap-4 mb-4">

    <div>
    <Image src="/images/expo-first-img.jpg" alt="Logo" width={400} height={400} />
    </div>

    <div>
    <Image src="/images/expo-sec-img.jpg" alt="Logo" width={400} height={400} />
    </div>

    <div >
    <Image src="/images/expo-third-img.jpg" alt="Logo" width={400} height={400} />
    </div>

    <div>
    <Image src="/images/expo-four-img.jpg" alt="Logo" width={400} height={400} />
    </div>

    <div>
    <Image src="/images/expo-five-img.jpg" alt="Logo" width={400} height={400} />
    </div>

    <div>
    <Image src="/images/expo-six-img.jpg" alt="Logo" width={400} height={400} />
    </div>

    <div>
    <Image src="/images/expo-sev-img.jpg" alt="Logo" width={400} height={400} />
    </div>

    <div>
    <Image src="/images/expo-eight-img.jpg" alt="Logo" width={400} height={400} />
    </div>


    </div>
  )
}

export default Expo
