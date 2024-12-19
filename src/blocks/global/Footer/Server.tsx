import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Image from 'next/image'

export default async function FooterServer() {
  const payload = await getPayloadHMR({ config })
  const footer = await payload.findGlobal({ slug: 'footer' })

  return (
    <div>
      <div className="relative w-64 h-20">
        <Image src={footer.logo.url} fill className="object-contain" alt={footer.logo.alt} />
      </div>
    </div>
  )
}
