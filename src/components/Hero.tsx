import { Mail, FolderOpen } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left: Text */}
        <div className="space-y-5 md:space-y-6">
          <h1 className="text-[38px] leading-[46px] md:text-[64px] font-bold md:leading-[78px] tracking-tight">
            我是{' '}
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">欧宇轩</span>
            ，一位
            <br />
            <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">数据科学</span>{' '}
            探索者
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[26px] md:leading-[30px] max-w-xl">
            应用统计硕士，专注于推荐算法与大模型应用。
            具备统计理论基础、工程落地能力与产品思维，
            致力于用前沿 AI 技术解决真实业务问题。
          </p>

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDB927] border-[2px] border-black rounded-full text-sm font-bold">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600" />
            </span>
            在校生 · 可实习6个月 · 一周5天
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 pt-2">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-4 px-8 text-base font-semibold flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px] transition-colors"
            >
              <Mail className="w-5 h-5" />
              联系我
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-4 px-8 text-base font-semibold flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px] transition-colors"
            >
              <FolderOpen className="w-5 h-5" />
              查看项目
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/images/avatar.jpg"
              alt="欧宇轩"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
