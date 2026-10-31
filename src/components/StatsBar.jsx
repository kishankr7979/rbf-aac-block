const stats = [
  { value: 'Up to 4 hrs', label: 'Fire resistance' },
  { value: '3.5 - 5.0 N/mm²', label: 'Compressive strength' },
  { value: '500 - 650 kg/m³', label: 'Dry density' },
  { value: '6 sizes', label: '4" to 10" thickness' },
]

export default function StatsBar() {
  return (
    <section className="bg-brand-800">
      <div className="container-site py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display font-bold text-2xl md:text-3xl text-white">{s.value}</div>
            <div className="mt-1 text-sm text-brand-200">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
