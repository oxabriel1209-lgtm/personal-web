# Hi there 👋, I'm Yuxuan Ou (欧宇轩) 😎

[![Email](https://img.shields.io/badge/-oycos1209@163.com-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:oycos1209@163.com)](mailto:oycos1209@163.com)
[![GitHub](https://img.shields.io/badge/-oxabriel1209--lgtm-black?style=flat&logo=GitHub&logoColor=white&link=https://github.com/oxabriel1209-lgtm)](https://github.com/oxabriel1209-lgtm)
[![Website](https://img.shields.io/badge/-Personal%20Website-blue?style=flat&logo=vercel&logoColor=white&link=https://personal-web-beta-sandy.vercel.app)](https://personal-web-beta-sandy.vercel.app)

> *M.S. in Applied Statistics · Data Science · Recommendation Systems · LLM Applications*

---

## 🎓 Education

- **Fudan University** — *M.S. in Applied Statistics* `2026.09 – Present`
  Shanghai Mathematics Center (Full-time)
- **Nankai University** — *B.S. in Data Science and Big Data Technology* `2022.09 – 2026.06`
  School of Statistics and Data Science (Full-time)

## 💼 Internship

### Tencent · WXG — Data Science Intern `2025.11 – Present`
- Led search optimization for WeChat Reading, analyzing query logs and click-through data to identify limitations in text-matching algorithms
- Used LLM (**DeepSeek-R1**) for intent labeling of **10M+ queries**, mapping intent structures and surfacing bad cases
- Drove "Intent Recognition → Fine-grained Intent Re-ranking" pipeline: **+1.5pp** search consumption rate across three intent categories, boosting platform-wide search **CVR**

### DiDi · International Division — Data Analytics Intern `2025.08 – 2025.11`

**Data Monitoring & Reporting**
- Systematically tracked 20+ supply/demand metrics across Brazil's ride-hailing business (SQL + Python visualization)
- Identified pricing opportunities for the Flex product; proposed strategy increased **TSH +4.8%**, **Rides +3.5%**, **Weekly GP +2.7%**

**Airport Driver Control Strategy Impact Analysis**
- Applied Google's **Causal Impact** model to evaluate a driver management policy in Rio de Janeiro, using São Paulo as control
- Used PCAA as target variable with covariates; results showed **PCAA reduced by -20%** (95% CI: [-34%, -7%]), confirming significant policy effectiveness

## 🚀 Projects

### Generative Product Recommendation System for Amazon E-commerce `2026.05 – 2026.06`
End-to-end pipeline based on **Qwen2.5-Instruct**: Semantic ID → LLM-SID Alignment → Multi-task SFT → GRPO RL

- **RQ-VAE** for 3-level semantic ID quantization with uniformity loss + dynamic codebook activation; improved codebook collision rate (**ICR: 95.86% → 99.30%**) and utilization (**CUR: 0.069% → 0.072%**)
- **Multi-task SFT**: jointly trained 6 tasks (sequential recommendation, SID-text conversion, description reconstruction, user preference summarization) with constrained decoding
- **GRPO Preference Optimization**: constrained beam search + hybrid reward (rule-based reward + ranking penalty) to mitigate popularity bias
- Results on Amazon public dataset: **NDCG@10 +15.2%**, **HR@10 +14.8%**, significant improvements in coverage and diversity

### Deep Learning Recommendation System for Movie Domain `2026.03 – 2026.04`
Full-stack recommendation system (Recall → Ranking) on **MovieLens-1M**

- **Recall**: Dual-tower (with SENet) + ItemCF multi-channel recall, MLP + DCN for high-order feature crossing
- **Ranking**: DeepFM integrating static user features, candidate item features, and DIN-generated dynamic interest representations
- **Hybrid negative sampling**: in-batch + popularity-weighted sampling to alleviate popularity bias
- Evaluation: **AUC & GAUC**

## 📄 Publications

**Network Dismantling on Signed Network by Evolutionary Deep Reinforcement Learning**
*First Author* | Sensors (SCI Q3) | 2024
[📄 Read Paper](https://www.mdpi.com/1424-8220/24/24/8026)

## 🏆 Honors & Awards

- **15th National College Mathematics Competition** — Tianjin 3rd Prize
- **Nankai University Gongneng Scholarship** (2024–2025) — Highest university-level scholarship

## 🛠 Tech Stack

![Python](https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white)
![PyTorch](https://img.shields.io/badge/-PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white)
![SQL](https://img.shields.io/badge/-SQL-4479A1?style=flat&logo=mysql&logoColor=white)
![LLM](https://img.shields.io/badge/-LLM_Prompt_Engineering-412991?style=flat&logo=openai&logoColor=white)
![A/B Test](https://img.shields.io/badge/-A%2FB_Test-FF6B6B?style=flat)
![Recommender Systems](https://img.shields.io/badge/-Recommender_Systems-2F81F7?style=flat)
![Deep Learning](https://img.shields.io/badge/-Deep_Learning-FF6F00?style=flat)
![Statistical Modeling](https://img.shields.io/badge/-Statistical_Modeling-6366F1?style=flat)
![DeepFM](https://img.shields.io/badge/-DeepFM-000000?style=flat)
![DIN](https://img.shields.io/badge/-DIN-000000?style=flat)
![GRPO](https://img.shields.io/badge/-GRPO-000000?style=flat)
![RQ-VAE](https://img.shields.io/badge/-RQ--VAE-000000?style=flat)
![Causal Impact](https://img.shields.io/badge/-Causal_Impact-000000?style=flat)

---

*中文版 → [README_CN.md](./README_CN.md)*
