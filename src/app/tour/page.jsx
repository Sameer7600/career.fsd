import Image from 'next/image'
import React from 'react'

const Tour = () => {
  return (
    <div className=" grid grid-cols-4 mx-10 gap-4 mb-4">

    <div>
    <Image src="/images/tour-first-img.jpg" alt="Logo" width={400} height={400} />
    </div>

    <div>
    <Image src="/images/tour-sec-img.jpg" alt="Logo" width={400} height={400} />
    </div>

    <div>
    <Image src="/images/tour-third-img.jpg" alt="Logo" width={400} height={400} />
    </div>

    <div>
    <Image src="/images/tour-four-img.jpg" alt="Logo" width={400} height={400} />
    </div>

    <div>
    <Image src="/images/tour-five-img.jpg" alt="Logo" width={400} height={400} />
    </div>

    <div>
    <Image src="/images/tour-six-img.jpg" alt="Logo" width={400} height={400} />

    </div>

    <div>
    <Image src="/images/tour-sev-img.jpg" alt="Logo" width={400} height={400} />
    </div>

    <div>
    <Image src="/images/tour-eight-img.jpg" alt="Logo" width={400} height={400} />
    </div>

    </div>
  )
}

export default Tour
