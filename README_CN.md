# 嗨 👋，我是欧宇轩 😎

[![邮箱](https://img.shields.io/badge/-oycos1209@163.com-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:oycos1209@163.com)](mailto:oycos1209@163.com)
[![GitHub](https://img.shields.io/badge/-oxabriel1209--lgtm-black?style=flat&logo=GitHub&logoColor=white&link=https://github.com/oxabriel1209-lgtm)](https://github.com/oxabriel1209-lgtm)
[![个人网站](https://img.shields.io/badge/-个人网站-blue?style=flat&logo=vercel&logoColor=white&link=https://personal-web-beta-sandy.vercel.app)](https://personal-web-beta-sandy.vercel.app)

> *应用统计硕士 · 数据科学 · 推荐算法 · 大模型应用*

---

## 🎓 教育背景

- **复旦大学** — 应用统计硕士 `2026.09 – 至今`
  上海数学中心（全日制）
- **南开大学** — 数据科学与大数据技术 本科 `2022.09 – 2026.06`
  统计与数据科学学院（全日制）

## 💼 实习经历

### 腾讯 · WXG 读书产品部 — 数据科学实习生 `2025.11 – 至今`
- 负责微信读书核心搜索功能优化分析，深度挖掘站内搜索日志与点击消费转化，识别文本相似度匹配算法的局限性
- 基于 LLM（**DeepSeek-R1**）对 **千万量级** 搜索 Query 进行意图打标，梳理站内搜索意图结构及 Bad Case
- 推动"意图识别-分意图精细化混排"算法落地，A/B Test 验证：书名/作者/题材三类意图搜索消费率提升超 **1.5pp**，全站搜索大盘 **CVR** 提升

### 滴滴 · 国际化部门 — 数据分析实习生 `2025.08 – 2025.11`

**数据监测与周报撰写**
- 负责巴西四轮车与两轮车业务的数据分析，系统性监测供给侧与需求侧 20+ 核心指标（SQL 提取 + Python 可视化）
- 针对巴西特色产品 Flex，通过 Python 可视化分析 15+ 关键指标的年趋势变化，提出的调价方案使 **TSH 增长 +4.8%**、**Rides 提升 +3.5%**、**周 GP 提高 +2.7%**

**机场司机管控策略影响分析**
- 采用 Google **Causal Impact** 模型评估里约热内卢机场司机管控策略效果，以圣保罗为对照城市
- 以 PCAA 为 Y 指标，专车接机 PCAA 和司机车队应答订单数为协变量 X；模型输出 **PCAA 均值降低 -20%**（95% CI: [-34%, -7%]），证明管控策略显著有效

## 🚀 项目经历

### 面向 Amazon 电商场景的生成式商品推荐系统 `2026.05 – 2026.06`
基于 **Qwen2.5-Instruct** 搭建端到端推荐管线：语义ID构建 → LLM-SID对齐 → 多任务SFT → GRPO强化学习

- **RQ-VAE** 实现三级语义 ID 量化，加入均匀性损失+动态调整编码激活概率，优化码本碰撞率（**ICR: 95.86% → 99.30%**）与利用率（**CUR: 0.069% → 0.072%**）
- **多任务 SFT**：联合训练序列推荐、SID-文本互转、描述重建、用户偏好总结 6 大任务，约束解码保证合法 SID
- **GRPO 偏好优化**：约束束搜索 + 规则奖励 + 排序惩罚混合奖励机制，缓解热度偏置与奖励稀疏
- Amazon 公开数据集结果：**NDCG@10 +15.2%**，**HR@10 +14.8%**，覆盖率与多样性显著提升

### 面向电影推荐场景的深度学习推荐系统 `2026.03 – 2026.04`
基于 **MovieLens-1M** 构建召回至排序全链路推荐系统

- **召回层**：并联双塔（SENet 特征筛选）+ ItemCF 多路召回，MLP + DCN 显式高阶特征交叉
- **排序层**：DeepFM 融合用户静态特征、候选物品特征、DIN 注意力网络生成的动态兴趣表征
- **混合负采样策略**：batch 内负采样 + 热度加权采样，有效缓解流行度偏差
- 评估指标：**AUC & GAUC**

## 📄 发表论文

**Network Dismantling on Signed Network by Evolutionary Deep Reinforcement Learning**
*第一作者* | Sensors（SCI 3区）| 2024
[📄 阅读论文](https://www.mdpi.com/1424-8220/24/24/8026)

## 🏆 获奖与证书

- 第十五届全国大学生数学竞赛天津赛区三等奖
- 2024–2025 学年南开大学公能奖学金（校级最高奖学金）

## 🛠 技术栈

![Python](https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white)
![PyTorch](https://img.shields.io/badge/-PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white)
![SQL](https://img.shields.io/badge/-SQL-4479A1?style=flat&logo=mysql&logoColor=white)
![LLM](https://img.shields.io/badge/-LLM_Prompt_Engineering-412991?style=flat&logo=openai&logoColor=white)
![A/B Test](https://img.shields.io/badge/-A%2FB_Test-FF6B6B?style=flat)
![推荐系统](https://img.shields.io/badge/-推荐系统-2F81F7?style=flat)
![深度学习](https://img.shields.io/badge/-深度学习-FF6F00?style=flat)
![统计建模](https://img.shields.io/badge/-统计建模-6366F1?style=flat)
![DeepFM](https://img.shields.io/badge/-DeepFM-000000?style=flat)
![DIN](https://img.shields.io/badge/-DIN-000000?style=flat)
![GRPO](https://img.shields.io/badge/-GRPO-000000?style=flat)
![RQ-VAE](https://img.shields.io/badge/-RQ--VAE-000000?style=flat)
![Causal Impact](https://img.shields.io/badge/-Causal_Impact-000000?style=flat)

---

*English version → [README.md](./README.md)*
