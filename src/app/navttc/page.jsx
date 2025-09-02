import Image from 'next/image'
import React from 'react'

const Navttc = () => {
  return (
    <div className=" grid grid-cols-4 mx-10 gap-4 mb-4">

    <div>
    <Image src="/images/navttc-first-img.jpeg" alt="Logo" width={400} height={400} />
    </div>

    <div>
    <Image src="/images/navttc-sec-img.jpeg" alt="Logo" width={400} height={400} />
    </div>

    <div >
    <Image src="/images/navttc-third-img.jpeg" alt="Logo" width={400} height={400} />
    </div>

    <div>
    <Image src="/images/navttc-four-img.jpeg" alt="Logo" width={400} height={400} />
    </div>

    <div>
         <Image src="/images/navttc-five-img.jpeg" alt="Logo" width={400} height={400} />
    </div>

    <div>
    <Image src="/images/navttc-six-img.jpeg" alt="Logo" width={400} height={400} />
    </div>

    <div>
        <Image src="/images/navttc-sev-img.jpeg" alt="Logo" width={400} height={400} />
    </div>
    
    </div>
  )
}

export default Navttc
