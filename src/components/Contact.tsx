import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <footer id="contact" className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Contact cards */}
          <div className="mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              {/* Avatar */}
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#FDB927] border-4 border-black flex items-center justify-center flex-shrink-0 text-3xl">
                👋
              </div>

              {/* Contact info card */}
              <div className="w-full flex-1 bg-white border-4 border-black rounded-3xl py-4 px-4 md:py-6 md:px-8">
                <h3 className="text-xl md:text-2xl font-bold text-black text-center md:text-left mb-3">
                  期待与您交流
                </h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:oycos1209@163.com"
                    className="flex items-center gap-2 text-sm font-semibold text-black bg-gray-100 hover:bg-[#FDB927] rounded-xl px-4 py-3 transition-colors flex-1 justify-center"
                  >
                    <Mail className="w-4 h-4" />
                    oycos1209@163.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#2F81F7] rounded-full flex items-center justify-center text-white font-bold text-xs">
                  OY
                </div>
                <span className="text-lg font-bold">欧宇轩</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                应用统计硕士 · 数据科学 · 推荐算法 · 大模型应用
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  title="GitHub (待添加)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  title="LinkedIn (待添加)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">快速导航</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">关于我</a></li>
                <li><a href="#experience" className="hover:text-white transition-colors">实习经历</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">项目经历</a></li>
                <li><a href="#papers" className="hover:text-white transition-colors">论文与获奖</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">技能矩阵</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">教育背景</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#6366F1] rounded-full" />
                  复旦大学 · 应用统计硕士
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2F81F7] rounded-full" />
                  南开大学 · 数据科学本科
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} 欧宇轩. Built with React + TypeScript + Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
