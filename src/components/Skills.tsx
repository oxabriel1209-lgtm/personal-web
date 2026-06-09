const skillCategories = [
  {
    title: '编程与框架',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'PyTorch', level: 90 },
      { name: 'SQL', level: 80 },
      { name: 'Scikit-learn', level: 85 },
    ],
  },
  {
    title: 'LLM & AI',
    skills: [
      { name: 'LLM Prompt Engineering', level: 90 },
      { name: 'LLM Fine-tuning (SFT/RLHF)', level: 85 },
      { name: '语义 Embedding', level: 80 },
      { name: 'GRPO/PPO', level: 75 },
    ],
  },
  {
    title: '数据科学与工程',
    skills: [
      { name: '数据分析', level: 90 },
      { name: 'A/B Test', level: 85 },
      { name: '推荐系统', level: 92 },
      { name: '统计建模', level: 88 },
      { name: '深度学习', level: 85 },
      { name: '特征工程', level: 82 },
    ],
  },
]

const tagCloud = [
  'Python', 'PyTorch', 'LLM Prompt Engineering', '数据分析', 'A/B Test',
  '推荐系统', '深度学习', '统计建模', 'SQL', 'GRPO', 'RQ-VAE', 'DeepFM',
  'DIN', 'SENet', '双塔模型', '语义ID', '强化学习', 'SFT', '特征工程', 'Scikit-learn',
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      {/* Marquee tag cloud */}
      <div className="overflow-hidden mb-16">
        <div className="relative bg-[#6366F1] py-8 md:py-10 -rotate-[3deg] scale-110 border-y-[3px] border-black">
          <div className="flex items-center gap-6 md:gap-10 animate-marquee whitespace-nowrap">
            {[...tagCloud, ...tagCloud, ...tagCloud].map((tag, i) => (
              <span
                key={i}
                className="text-white font-bold text-sm md:text-2xl px-4 md:px-6 py-1.5 md:py-2 bg-white/10 rounded-full border-2 border-white/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skill bars */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
            技能<span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">矩阵</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="bg-white border-[3px] border-black rounded-2xl p-5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h3 className="text-sm font-bold text-white bg-black px-3 py-1.5 rounded-lg inline-block mb-4">
                  {cat.title}
                </h3>
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-[#0B0B0B]">{skill.name}</span>
                        <span className="font-bold text-[#6366F1]">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 border border-gray-200 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#6366F1] transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
