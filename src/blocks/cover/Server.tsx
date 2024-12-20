export default function CoverBlockServer({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="max-w-5xl py-20">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-xl">{title}</p>
    </div>
  )
}
