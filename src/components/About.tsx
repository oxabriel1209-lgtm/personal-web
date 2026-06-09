import { User } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Photo (circle) */}
        <div className="flex justify-center order-2 md:order-1">
          <div className="relative w-full max-w-[280px] sm:max-w-md md:max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src={`${import.meta.env.BASE_URL}images/avatar-circle.jpg`}
              alt="欧宇轩"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: About text */}
        <div className="space-y-6 md:space-y-8 order-1 md:order-2">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              站在{' '}
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">统计、工程与产品</span>
              的交叉点
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              我是欧宇轩，目前就读于复旦大学上海数学中心应用统计硕士项目。
              热衷于将前沿机器学习算法与实际业务场景相结合，
              具备从数据分析到模型部署的全链路能力。
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-1">统计背景</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  复旦应用统计硕士 + 南开数据科学本科，扎实的数理统计与机器学习理论基础。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-1">工程能力</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  熟悉 PyTorch / LLM Prompt Engineering / 推荐系统全链路，具备端到端建模与工程落地能力。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FDB927] border-2 border-black rounded-[5px] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-1">产品思维</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  腾讯 WXG 实习经历，擅长从业务指标出发，用数据驱动产品优化与算法迭代。
                </p>
              </div>
            </div>
          </div>

          <a
            href="#experience"
            onClick={(e) => { e.preventDefault(); document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-4 px-8 text-base font-semibold flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px] transition-colors"
          >
            <User className="w-5 h-5" />
            查看经历
          </a>
        </div>
      </div>
    </section>
  )
}
