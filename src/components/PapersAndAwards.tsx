import { ExternalLink, Trophy } from 'lucide-react'

export default function PapersAndAwards() {
  return (
    <section id="papers" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            论文<span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">与获奖</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-6 mb-12">
          {/* Paper card - Large */}
          <div className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <div className="bg-[#EDEDED] relative min-h-[180px] md:min-h-[240px] m-3 md:m-4 rounded-2xl overflow-hidden flex items-center justify-center">
              <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-lg z-10">
                SCI 3区
              </span>
              <div className="text-center p-6">
                <span className="text-5xl mb-4 block">📄</span>
                <p className="text-sm font-bold text-gray-500">Sensors · 第一作者</p>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold mb-3 leading-snug">
                Network Dismantling on Signed Network by Evolutionary Deep Reinforcement Learning
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#FF6B7A] border-2 border-black rounded-full flex items-center justify-center text-white font-bold text-xs">
                  一作
                </div>
                <div>
                  <div className="font-bold text-sm">欧宇轩</div>
                  <div className="text-xs text-gray-500">Published in Sensors</div>
                </div>
              </div>
              <a
                href="https://www.mdpi.com/1424-8220/24/24/8026"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-semibold text-[#2F81F7] hover:gap-3 transition-all text-sm border-2 border-[#2F81F7] rounded-lg px-4 py-2 hover:bg-[#2F81F7] hover:text-white"
              >
                阅读论文
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Awards card */}
          <div className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <div className="bg-[#FDB927]/20 relative min-h-[180px] md:min-h-[240px] m-3 md:m-4 rounded-2xl overflow-hidden flex items-center justify-center">
              <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-lg z-10">
                获奖荣誉
              </span>
              <div className="text-center p-6">
                <span className="text-5xl mb-4 block">🏆</span>
                <p className="text-sm font-bold text-gray-500">Honors & Awards</p>
              </div>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <div className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-[#FDB927] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">第十五届全国大学生数学竞赛天津赛区三等奖</h4>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-[#FDB927] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">2024-2025学年南开大学公能奖学金</h4>
                  <p className="text-xs text-gray-500">校级最高奖学金</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
