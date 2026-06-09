import { FileText } from 'lucide-react'

export default function Internship() {
  const experiences = [
    {
      period: '2025.11 — 至今',
      title: '数据科学实习生',
      company: '腾讯 WXG · 读书产品部',
      badge: '腾讯',
      badgeBg: 'bg-black',
      highlights: [
        '负责微信读书核心搜索功能优化分析与新进晋江书籍冷启动',
        '基于 LLM（DeepSeek-R1）对千万量级搜索 Query 进行意图打标，梳理站内搜索意图结构及 Bad Case',
        '推动"意图识别-分意图精细化混排"算法落地，A/B Test 验证：书名/作者/题材三类意图搜索消费率提升超 1.5pp，全站搜索大盘 CVR 提升',
      ],
      metrics: [
        { value: '1.5pp+', label: '消费率提升' },
        { value: '千万级', label: 'Query 打标' },
        { value: '3 类', label: '意图混排' },
      ],
      tags: ['A/B Test', 'LLM', 'DeepSeek-R1', '搜索算法', '意图识别', '数据分析'],
      subProjects: null,
    },
    {
      period: '2025.08 — 2025.11',
      title: '数据分析实习生',
      company: '滴滴 · 国际化部门',
      badge: '滴滴',
      badgeBg: 'bg-[#FF6B6B]',
      highlights: null,
      metrics: null,
      tags: ['SQL', 'Python', 'Causal Impact', 'AB实验', '数据可视化', '因果推断'],
      subProjects: [
        {
          title: '数据监测与周报撰写',
          description:
            '负责巴西四轮车与两轮车业务的数据分析，系统性监测供给侧与需求侧 20+ 核心指标（SQL 提取 + Python 可视化），精准定位异动原因并输出周报。',
          highlight:
            '针对巴西特色产品 Flex，通过 Python 可视化分析 15+ 关键指标的年趋势变化，根据关键指标变化精确定位两类价格调整城市群，最终提出的调价方案使 TSH 增长 4.8%、Rides 提升 3.5%、周 GP 提高 2.7%。',
          metrics: [
            { value: '+4.8%', label: 'TSH 增长' },
            { value: '+3.5%', label: 'Rides 提升' },
            { value: '+2.7%', label: '周 GP 提高' },
          ],
        },
        {
          title: '机场司机管控策略影响分析',
          description:
            '业务方反馈巴西各城市机场出行单乘客体验较差，投诉率显著高于大盘，决定在里约热内卢采用司机管控策略以降低 PCAA（司机应答后乘客取消率）。由于公平性原则约束无法开展 AB 实验，采用 Google Causal Impact 模型进行影响分析。',
          highlight:
            '选用圣保罗作为对照城市，以 PCAA 为 Y 指标，专车接机 PCAA 和司机车队应答订单数为协变量 X。模型输出 PCAA 相对变化 95% 置信区间为 [-34%, -7%]，均值为 -20%，证明管控策略显著有效。',
          metrics: [
            { value: '-20%', label: 'PCAA 均值' },
            { value: '[-34%,-7%]', label: '95% 置信区间' },
          ],
        },
      ],
    },
  ]

  return (
    <section id="experience" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Sticky header */}
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-28 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-[1.3]">
              实习<span className="bg-[#6366F1] text-white px-3 py-1 inline-block">经历</span>
            </h2>
            <p className="text-gray-400 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
              在腾讯与滴滴两家头部互联网企业，将数据分析与机器学习技术转化为业务价值，
              推动核心指标显著提升。
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="bg-white text-black hover:bg-gray-50 rounded-lg py-4 px-8 text-base font-semibold flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px] transition-colors"
            >
              <FileText className="w-5 h-5" />
              联系我
            </a>
          </div>

          {/* Right: Experience cards */}
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-white border-[3px] border-black rounded-3xl">
                {/* Header */}
                <div className="flex items-center justify-between pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[20px] leading-tight font-bold text-[#0B0B0B]">
                    {exp.period}
                  </div>
                  <div className={`rounded-full ${exp.badgeBg} text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-xs font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]`}>
                    {exp.badge}
                  </div>
                </div>

                <div className="border-t-[3px] border-black my-4" />

                {/* Content */}
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[26px] leading-tight font-bold text-[#0B0B0B] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-[#6366F1] font-bold text-sm mb-4">{exp.company}</p>

                  {/* Metrics */}
                  {exp.metrics && (
                    <div className="grid grid-cols-3 gap-2 mb-5 p-3 rounded-xl bg-[#FDB927]/10 border-2 border-black">
                      {exp.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <div className="text-lg md:text-xl font-extrabold text-[#0B0B0B]">{m.value}</div>
                          <div className="text-xs text-gray-500 font-medium">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights (for non-sub-project experiences) */}
                  {exp.highlights && (
                    <ul className="space-y-2.5 mb-4">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-[#393939] leading-relaxed">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FDB927] border-2 border-black flex items-center justify-center text-[10px] font-bold mt-0.5">
                            {i + 1}
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Sub-projects (for DiDi-style multi-project experiences) */}
                  {exp.subProjects && (
                    <div className="space-y-4 mb-4">
                      {exp.subProjects.map((sp, i) => (
                        <div key={i} className="p-4 rounded-xl bg-gray-50 border-2 border-gray-200">
                          <h4 className="text-sm font-bold text-[#0B0B0B] mb-2 flex items-center gap-2">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF6B6B] border-2 border-black flex items-center justify-center text-[10px] font-bold text-white">
                              {i + 1}
                            </span>
                            {sp.title}
                          </h4>
                          <p className="text-xs text-[#393939] leading-relaxed mb-2">{sp.description}</p>
                          {sp.metrics && (
                            <div className="grid grid-cols-3 gap-2 mb-2 p-2.5 rounded-lg bg-white border border-gray-200">
                              {sp.metrics.map((m) => (
                                <div key={m.label} className="text-center">
                                  <div className="text-base font-extrabold text-[#FF6B6B]">{m.value}</div>
                                  <div className="text-[10px] text-gray-500 font-medium">{m.label}</div>
                                </div>
                              ))}
                            </div>
                          )}
                          <p className="text-xs text-[#6366F1] font-medium leading-relaxed bg-white p-2.5 rounded-lg border border-gray-200">
                            <span className="font-bold">成果：</span>{sp.highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-semibold bg-black text-white rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
