export default function Education() {
  const schools = [
    {
      school: '复旦大学',
      period: '2026.09 — 至今',
      degree: '应用统计硕士',
      department: '上海数学中心',
      tag: '全日制',
      color: '#6366F1',
    },
    {
      school: '南开大学',
      period: '2022.09 — 2026.06',
      degree: '数据科学与大数据技术 本科',
      department: '统计与数据科学学院',
      tag: '全日制',
      color: '#2F81F7',
    },
  ]

  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          教育<span className="bg-[#FDB927] text-black px-3 py-1 inline-block">背景</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {schools.map((s) => (
            <div
              key={s.school}
              className="bg-white border-[3px] border-black rounded-2xl p-6 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm border-2 border-black"
                  style={{ backgroundColor: s.color }}
                >
                  {s.school.slice(0, 2)}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{s.school}</h3>
                  <span className="text-xs font-semibold bg-black text-white px-2 py-0.5 rounded-md">
                    {s.tag}
                  </span>
                </div>
              </div>
              <p className="text-base font-semibold text-[#393939]">{s.degree}</p>
              <p className="text-sm text-gray-500 mt-1">{s.department}</p>
              <p className="text-sm font-bold text-[#6366F1] mt-2">{s.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
