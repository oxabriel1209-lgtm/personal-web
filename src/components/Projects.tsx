import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: '面向 Amazon 电商场景的生成式商品推荐系统',
    period: '2026.05 — 2026.06',
    tag: '重点推荐',
    bgColor: 'bg-[#6366F1]',
    tagBg: 'bg-black',
    logo: '🛒',
    background: '电商推荐冷启动困难、长尾商品覆盖不足、传统 Embedding 扩展性差。',
    approach: '基于 Qwen2.5-Instruct 搭建端到端推荐管线：语义ID构建 → LLM-SID对齐 → 多任务SFT → GRPO强化学习。',
    innovations: [
      'RQ-VAE 实现三级语义 ID(SID) 量化，注入词表完成语言空间对齐',
      '均匀性损失+动态编码激活概率，优化码本碰撞率（ICR: 95.86%→99.30%）与利用率（CUR: 0.069%→0.072%）',
      '多任务 SFT：联合训练序列推荐、SID-文本互转、描述重建等 6 大任务',
      'GRPO 偏好优化：约束束搜索+规则奖励+排序惩罚混合奖励，缓解热度偏置与奖励稀疏',
    ],
    results: [
      { value: '+15.2%', label: 'NDCG@10' },
      { value: '+14.8%', label: 'HR@10' },
      { value: '显著提升', label: '覆盖率' },
    ],
    tags: ['PyTorch', 'LLM', 'GRPO', 'RQ-VAE', 'SFT', 'Qwen2.5', '语义ID', '强化学习'],
  },
  {
    title: '面向电影推荐场景的深度学习推荐系统',
    period: '2026.03 — 2026.04',
    tag: '推荐系统',
    bgColor: 'bg-[#2F81F7]',
    tagBg: 'bg-[#2F81F7]',
    logo: '🎬',
    background: '基于 MovieLens-1M 数据集，构建从召回至排序的完整推荐系统。',
    approach: '召回层并联双塔+ItemCF 多路召回；排序层 DeepFM 融合用户静态特征、候选物品特征与 DIN 注意力动态兴趣表征。',
    innovations: [
      '召回层：并联双塔+ItemCF 多路召回，双塔加入 SENet 特征筛选，并联 MLP+DCN 显式高阶特征交叉',
      '排序层：DeepFM，Deep 部分融合用户静态特征、候选物品特征、DIN 注意力网络生成的动态兴趣表征',
      '混合负采样策略：batch 内负采样+热度加权采样，有效缓解流行度偏差',
      '评估体系：AUC + GAUC 双重指标',
    ],
    results: [
      { value: 'AUC', label: '评估指标' },
      { value: 'GAUC', label: '评估指标' },
      { value: '1M', label: '数据集' },
    ],
    tags: ['DeepFM', 'DIN', '双塔模型', 'ItemCF', 'SENet', 'DCN', '负采样', 'PyTorch'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            看看我的{' '}
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">项目经历</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            从学术探索到工业落地，全链路推荐系统实践
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {/* Left: Content */}
              <div className="p-6 md:p-10 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{project.logo}</span>
                  <span className="text-sm font-bold text-gray-500">{project.period}</span>
                </div>

                <span className={`inline-block ${project.tagBg} text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 w-fit`}>
                  {project.tag}
                </span>

                <h3 className="text-xl md:text-[26px] font-bold mb-3 leading-tight text-[#0B0B0B]">
                  {project.title}
                </h3>

                <div className="mb-3 p-3 rounded-xl bg-gray-50 border-2 border-gray-100">
                  <p className="text-sm text-[#393939]">
                    <span className="font-bold">背景痛点：</span>{project.background}
                  </p>
                </div>

                <p className="text-sm text-[#393939] mb-4 leading-relaxed">
                  <span className="font-bold">技术方案：</span>{project.approach}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-xl bg-[#FDB927]/10 border-2 border-black">
                  {project.results.map((r) => (
                    <div key={r.label} className="text-center">
                      <div className="text-lg font-extrabold text-[#0B0B0B]">{r.value}</div>
                      <div className="text-xs text-gray-500 font-medium">{r.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-[11px] font-semibold bg-gray-100 text-gray-700 rounded-md border border-gray-200">
                      {t}
                    </span>
                  ))}
                </div>

                <a href="#" className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm">
                  查看详情
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Right: Colored panel with innovations */}
              <div className={`${project.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[400px] p-6 md:p-10 flex flex-col justify-center text-white`}>
                <h4 className="text-lg font-bold mb-4">关键创新</h4>
                <ul className="space-y-3">
                  {project.innovations.map((inn, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-white/90">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span>{inn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
