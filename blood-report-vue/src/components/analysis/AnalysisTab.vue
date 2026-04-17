<template>
  <div class="analysis-tab">
    <!-- 核心结论 -->
    <SectionCard title="核心结论">
      <div class="analysis-card">
        <div class="analysis-status status-pr">
          <span class="status-icon">📊</span>
          <span class="status-label">当前状态</span>
          <span class="status-value">持续改善型部分缓解 (PR)</span>
        </div>
        <div class="analysis-trend">
          <span class="trend-icon">📈</span>
          <span class="trend-label">整体趋势</span>
          <span class="trend-value">明确向完全缓解 (CR) 发展</span>
        </div>
        <div class="analysis-nature">
          <span class="nature-icon">🧬</span>
          <span class="nature-label">疾病本质</span>
          <span class="nature-value">处于CAR-T主导的免疫控制状态，但仍有残留病灶</span>
        </div>
      </div>
      <div class="analysis-summary">
        <p>🎯 <strong>核心寄语：</strong>治疗有效，目前处于"清扫残局"的最后阶段。</p>
      </div>
    </SectionCard>

    <!-- 三大核心证据整合 -->
    <SectionCard title="三大核心证据整合">
      <div class="evidence-card">
        <h3 class="evidence-title">① PET/CT (定级核心)</h3>
        <div class="evidence-data">
          <div class="data-row">
            <span class="data-label">肿瘤负荷（体积）</span>
            <span class="data-value">84mm → 82mm → <strong>73mm</strong> <span class="data-trend down">↓持续下降</span></span>
          </div>
          <div class="data-row">
            <span class="data-label">肿瘤活性 (SUVmax)</span>
            <span class="data-value">28.7 → 21.2 → <strong>14.8</strong> <span class="data-trend down">↓持续下降</span></span>
          </div>
        </div>
        <div class="evidence-detail">
          <p>🟢 <strong>远处病灶：</strong>右肾上腺和心包病灶已消失；左肾上腺病灶明显下降</p>
          <p>⚠️ <strong>关键问题：</strong>Deauville评分持续为5分；前纵隔仍有活跃灶</p>
        </div>
        <div class="evidence-conclusion">
          <p>📋 <strong>结论：</strong>全身性疾病已控制，局部残留活跃灶</p>
        </div>
      </div>

      <div class="evidence-card">
        <h3 class="evidence-title">② 血液指标 (CAR-T动态)</h3>
        <div class="evidence-data">
          <div class="data-row">
            <span class="data-label">CAR-T扩增特征</span>
            <span class="data-value">成功扩增，持续存在（非短期爆发型），无爆发峰（平稳型）</span>
          </div>
          <div class="data-row">
            <span class="data-label">本质判断</span>
            <span class="data-value">属于"持续压制型"，起效慢但更"稳"，利于长期控制</span>
          </div>
        </div>
        <div class="evidence-detail">
          <p>🩸 <strong>LDH (乳酸脱氢酶)：</strong>总体呈下降趋势，反映肿瘤负荷下降</p>
          <p>🩸 <strong>血象表现：</strong>血小板低、中性粒细胞低、轻度贫血</p>
          <p>📋 <strong>判断：</strong>典型的"CAR-T后骨髓抑制+免疫重建期"</p>
        </div>
      </div>

      <div class="evidence-card">
        <h3 class="evidence-title">③ 骨髓检查 (全身受控的关键)</h3>
        <div class="evidence-conclusion highlight">
          <p>✅ <strong>结论：</strong>未见淋巴瘤侵犯</p>
          <p>🎯 <strong>意义：</strong>将病情定性从"可能的全身失控"转变为"<strong>局部残留型疾病</strong>"</p>
        </div>
      </div>
    </SectionCard>

    <!-- 整合诊断 -->
    <SectionCard title="整合诊断 (MDT标准结论)">
      <div class="mdt-result">
        <div class="mdt-item">
          <span class="mdt-label">疗效分级</span>
          <span class="mdt-value pr">PR (持续改善型)</span>
        </div>
        <div class="mdt-item">
          <span class="mdt-label">生物学行为</span>
          <span class="mdt-value">无骨髓累及，无广泛进展。本质是"被压制但未清零"</span>
        </div>
      </div>
    </SectionCard>

    <!-- 未来走势预测 -->
    <SectionCard title="未来走势预测">
      <div class="prediction-cards">
        <div class="prediction-card best">
          <div class="pred-header">
            <span class="pred-icon">🚀</span>
            <span class="pred-title">路径1：进入CR (最可能)</span>
          </div>
          <div class="pred-prob">65-75%</div>
          <div class="pred-evidence">
            <p>支持证据：</p>
            <ul>
              <li>PET指标持续下降</li>
              <li>CAR-T仍活跃</li>
              <li>骨髓阴性</li>
            </ul>
          </div>
        </div>
        <div class="prediction-card">
          <div class="pred-header">
            <span class="pred-icon">⏸️</span>
            <span class="pred-title">路径2：停在PR</span>
          </div>
          <div class="pred-prob">20-25%</div>
          <div class="pred-evidence">
            <p>表现：指标下降变慢</p>
          </div>
        </div>
        <div class="prediction-card warning">
          <div class="pred-header">
            <span class="pred-icon">⚠️</span>
            <span class="pred-title">路径3：进展</span>
          </div>
          <div class="pred-prob">&lt;15%</div>
          <div class="pred-evidence">
            <p>(已明显降低)</p>
          </div>
        </div>
      </div>
    </SectionCard>

    <!-- 关键节点与下一步行动 -->
    <SectionCard title="关键节点与下一步行动">
      <div class="next-steps">
        <h3>下次PET结果预测</h3>
        <div class="signal-items">
          <div class="signal-item good">
            <span class="signal-icon">✅</span>
            <span class="signal-text">好信号：SUV降至10以下或接近5 → 进入CR轨道</span>
          </div>
          <div class="signal-item medium">
            <span class="signal-icon">⚡</span>
            <span class="signal-text">中信号：下降变慢 → 停在PR</span>
          </div>
          <div class="signal-item bad">
            <span class="signal-icon">❌</span>
            <span class="signal-text">坏信号：SUV反弹 → 考虑进展</span>
          </div>
        </div>

        <h3>治疗策略 (分歧点决策)</h3>
        <div class="strategy-items">
          <div class="strategy-item">
            <span class="strategy-icon">📊</span>
            <span class="strategy-text">若继续下降：继续观察，不干预</span>
          </div>
          <div class="strategy-item highlight">
            <span class="strategy-icon">🎯</span>
            <span class="strategy-text"><strong>若停在PR (关键分支)：</strong>推荐<strong>局部放射治疗</strong></span>
            <span class="strategy-reason">理由：全身已控制，仅需放电清扫CAR-T没杀干净的最后残留</span>
          </div>
          <div class="strategy-item">
            <span class="strategy-icon">💊</span>
            <span class="strategy-text">若进展：考虑双特异性抗体或移植</span>
          </div>
        </div>
      </div>
    </SectionCard>

    <!-- 最终总结 -->
    <SectionCard title="最终总结">
      <div class="final-summary">
        <p>🔬 <strong>阶段转变：</strong>现在不是在担心CAR-T是否有效，而是在研究"<strong>能不能把PR推到CR</strong>"</p>
        <div class="final-conclusion">
          <p>🎯 <strong>最终一句话：</strong></p>
          <p>系统性疾病已被压制，整体向好，关键在于最后局部病灶是自然消退还是需要通过局部放疗"<strong>补最后的一刀</strong>"。</p>
        </div>
      </div>
    </SectionCard>

    <div class="analysis-footer">
      <p>📝 <strong>解析来源：</strong>ChatGPT</p>
      <p>📅 <strong>解析日期：</strong>2026-04-10</p>
    </div>
  </div>
</template>

<script setup>
import SectionCard from '../common/SectionCard.vue'
</script>

<style scoped>
/* 报告解析专用样式 */
.analysis-card {
  background: var(--gradient-primary);
  border-radius: 12px;
  padding: 16px;
  color: white;
  margin-bottom: 12px;
}

.analysis-card > div {
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}

.analysis-card > div:last-child {
  border-bottom: none;
}

.analysis-status .status-icon,
.analysis-trend .trend-icon,
.analysis-nature .nature-icon {
  font-size: 18px;
  margin-right: 10px;
}

.analysis-status .status-label,
.analysis-trend .trend-label,
.analysis-nature .nature-label {
  font-size: 12px;
  opacity: 0.8;
  min-width: 70px;
}

.analysis-status .status-value {
  font-weight: bold;
  color: #FFD700;
}

.analysis-summary {
  background: rgba(255,255,255,0.15);
  border-radius: 8px;
  padding: 12px;
  margin-top: 12px;
  font-size: 13px;
}

.evidence-card {
  background: var(--card-bg);
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: var(--shadow-sm);
  border-left: 4px solid #667eea;
}

.evidence-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.evidence-data {
  background: #f8f9fb;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
}

.data-row {
  display: flex;
  flex-direction: column;
  padding: 6px 0;
}

.data-label {
  font-size: 11px;
  color: var(--text-muted);
}

.data-value {
  font-size: 13px;
  font-weight: 500;
}

.data-trend {
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 8px;
}

.data-trend.down {
  background: #E8F5E9;
  color: #2E7D32;
}

.evidence-detail {
  font-size: 12px;
  color: var(--text);
}

.evidence-detail p {
  margin: 6px 0;
}

.evidence-conclusion {
  background: #E3F2FD;
  border-radius: 8px;
  padding: 12px;
  font-size: 13px;
}

.evidence-conclusion.highlight {
  background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
}

.mdt-result {
  background: var(--card-bg);
  border-radius: 10px;
  padding: 16px;
  box-shadow: var(--shadow-sm);
}

.mdt-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
}

.mdt-item:last-child {
  border-bottom: none;
}

.mdt-label {
  font-size: 12px;
  color: var(--text-muted);
  min-width: 80px;
}

.mdt-value {
  font-weight: 600;
  font-size: 14px;
}

.mdt-value.pr {
  color: #667eea;
}

.prediction-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.prediction-card {
  background: var(--card-bg);
  border-radius: 10px;
  padding: 14px;
  box-shadow: var(--shadow-sm);
  text-align: center;
}

.prediction-card.best {
  background: var(--gradient-primary);
  color: white;
}

.prediction-card.warning {
  background: #FFF3E0;
}

.pred-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.pred-icon {
  font-size: 16px;
  margin-right: 6px;
}

.pred-title {
  font-size: 11px;
  font-weight: 600;
}

.pred-prob {
  font-size: 22px;
  font-weight: bold;
  margin: 8px 0;
}

.prediction-card.best .pred-prob {
  color: #FFD700;
}

.pred-evidence {
  font-size: 10px;
  text-align: left;
}

.pred-evidence ul {
  margin: 4px 0;
  padding-left: 16px;
}

.next-steps h3 {
  font-size: 14px;
  margin-bottom: 12px;
  color: var(--primary);
}

.signal-items,
.strategy-items {
  background: var(--card-bg);
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 16px;
  box-shadow: var(--shadow-sm);
}

.signal-item,
.strategy-item {
  display: flex;
  align-items: flex-start;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  font-size: 12px;
}

.signal-item:last-child,
.strategy-item:last-child {
  border-bottom: none;
}

.signal-icon,
.strategy-icon {
  font-size: 14px;
  margin-right: 10px;
  margin-top: 2px;
}

.signal-item.good { color: #2E7D32; }
.signal-item.medium { color: #ED7D31; }
.signal-item.bad { color: #C62828; }

.strategy-item.highlight {
  background: #FFF8E1;
  margin: 0 -14px;
  padding: 12px 14px;
  border-bottom: none;
  border-radius: 0 0 10px 10px;
}

.strategy-reason {
  display: block;
  font-size: 11px;
  color: var(--text-muted);
  margin-top: 4px;
  margin-left: 24px;
}

.final-summary {
  background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
  border-radius: 10px;
  padding: 16px;
}

.final-summary > p {
  margin-bottom: 12px;
  font-size: 13px;
}

.final-conclusion {
  background: white;
  border-radius: 8px;
  padding: 14px;
  font-size: 13px;
}

.final-conclusion p:last-child {
  margin-top: 8px;
  font-weight: 500;
  color: var(--primary);
}

.analysis-footer {
  background: #f8f9fb;
  border-radius: 8px;
  padding: 12px 16px;
  margin-top: 16px;
  font-size: 12px;
  color: var(--text-muted);
  border-top: 1px solid var(--border);
}

.analysis-footer p {
  margin: 4px 0;
}

@media (max-width: 600px) {
  .prediction-cards {
    grid-template-columns: 1fr;
  }
}
</style>
