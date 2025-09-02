import Image from 'next/image'
import React from 'react'

const Campuse = () => {
  return (
    <div className="grid grid-cols-4 mx-10 gap-4 mb-4">

      <div>
        <Image src="/images/campuse-first-img.jpeg" alt="Logo" width={400} height={400} />
      </div>

      <div>
        <Image src="/images/campuse-sec-img.jpeg" alt="Logo" width={400} height={400} />
      </div>

      <div>
        <Image src="/images/campuse-third-img.jpeg" alt="Logo" width={400} height={400} />
      </div>

      <div>
        <Image src="/images/campuse-four-img.jpg" alt="Logo" width={400} height={400} />
      </div>

      <div>
        <Image src="/images/campuse-five-img.jpg" alt="Logo" width={400} height={400} />
      </div>

      <div>
        <Image src="/images/campuse-six-img.jpg" alt="Logo" width={400} height={400} />
      </div>

      <div>
        <Image src="/images/campuse-sev-img.jpg" alt="Logo" width={400} height={400} />
      </div>

    </div>
  )
}

export default Campuse
