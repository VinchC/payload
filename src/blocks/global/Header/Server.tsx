import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Image from 'next/image'

export default async function HeaderServer() {
  const payload = await getPayloadHMR({ config })
  const header = await payload.findGlobal({ slug: 'header' })

  return (
    <div>
      <div className="relative w-64 h-20">
        <Image src={header.logo.url} fill className="object-contain" alt={header.logo.alt} />
      </div>
    </div>
  )
}
